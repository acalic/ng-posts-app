import { Location } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ApiService } from '../api.service';

import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  faArrowLeft = faArrowLeft;

  postId: number;
  myForm: FormGroup;
  post$: Post;

  modalRef: BsModalRef;
  message: string;
  
  private _postSub: Subscription;

  constructor(
    private _fb: FormBuilder,
    private _api: ApiService,
    private _route: ActivatedRoute,
    private _location: Location,
    private _modalService: BsModalService
  ){}

  ngOnInit(): void {

    this.myForm = this._fb.group({
      location: [null, Validators.required],
      author: [null, Validators.required],
    })

    this.postId = this._route.snapshot.params.id;
    this._postSub = this._api.getPost(this.postId).subscribe((data: Post) => {
      this.post$ = data

      this.myForm.setValue({
        location: this.post$.location, 
        author: this.post$.author
      });
    });
  }

  ngOnDestroy(): void {
    this._postSub.unsubscribe();
  }

  backClicked() {
    this._location.back();
  }

  isFieldValid(field: string) {
    return !this.myForm.get(field).valid && this.myForm.get(field).touched;
  }
  
  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  openConfirmUpdateModal(template: TemplateRef<any>) {
    this.modalRef = this._modalService.show(template, {class: 'modal-sm'});
  }
 
  confirmUpdate(): void {
    this.post$.author = this.myForm.get('author').value;
    this.post$.location = this.myForm.get('location').value;
    this.modalRef.hide();
  }
 
  declineUpdate(): void {
    this.modalRef.hide();
  }

}
