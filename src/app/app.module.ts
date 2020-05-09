import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { PostsTreeComponent } from './posts-tree/posts-tree.component';
import { NavigationMainComponent } from './navigation-main/navigation-main.component';
import { TreeComponent } from './tree/tree.component';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    FieldErrorDisplayComponent,
    PostsTreeComponent,
    NavigationMainComponent,
    TreeComponent,
    SelectDropdownComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
