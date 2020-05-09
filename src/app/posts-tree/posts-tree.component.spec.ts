import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsTreeComponent } from './posts-tree.component';

describe('PostsTreeComponent', () => {
  let component: PostsTreeComponent;
  let fixture: ComponentFixture<PostsTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
