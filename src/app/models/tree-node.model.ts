import { Post } from './post.model';

export interface TreeNode {
    groupedBy: string;
    posts: Post[];
    showChildren: boolean;
}