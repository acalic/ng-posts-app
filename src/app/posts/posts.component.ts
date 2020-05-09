import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ApiService } from '../api.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  public posts$: Post[];
  
  private _postsSub: Subscription;

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this._postsSub = this._api.getPosts().subscribe((data: Post[]) => this.posts$ = data);
  }

  ngOnDestroy(): void {
    this._postsSub.unsubscribe();
  }
}
