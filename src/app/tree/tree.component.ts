import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() treeData: TreeNode[];

  faAngleRight = faAngleRight;
  faAngleDown = faAngleDown;

  ngOnInit() {
  }

  toggleChild(node: TreeNode) {
    node.showChildren = !node.showChildren;
  }

}