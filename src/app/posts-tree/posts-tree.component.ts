import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

import { TreeNode } from '../models/tree-node.model';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs/internal/Subscription';

import { getWeek, getYear } from 'date-fns'

@Component({
  selector: 'app-posts-tree',
  templateUrl: './posts-tree.component.html',
  styleUrls: ['./posts-tree.component.scss']
})

export class PostsTreeComponent implements OnInit {
  
  public posts$: Post[];
  public postsTree: TreeNode[] = [];
  
  public groupTypeOptions: string[] = ['week', 'author', 'location'];
  public groupType: string = this.groupTypeOptions[0];

  private _postsSub: Subscription;

  constructor(
    private _api: ApiService
  ) {}

  ngOnInit(): void {
    this._postsSub = this._api.getPosts().subscribe((data: Post[]) => {
      this.posts$ = data;

      this.posts$.map(item => {
          item.week = this.weekNumber(Number(item.time));
      });      
      this.groupPosts();
    });
  }

  ngOnDestroy(): void {
    this._postsSub.unsubscribe();
  }

  weekNumber (time: number) {
    return getYear(new Date(time * 1000)) + ' - Week ' + getWeek(new Date(time * 1000));
  }

  groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };

  groupByChange(event: string) {
    this.groupType = event;
    this.groupPosts();
  }

  groupPosts() {
    const groupedPosts = this.groupBy(this.posts$, this.groupType);

    this.postsTree = [];

      Object.keys(groupedPosts).map(key => {
        this.postsTree.push({
          groupedBy: key,
          posts: groupedPosts[key],
          showChildren: false
        });
      });
  }
  
}
