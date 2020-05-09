import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/post.model'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private _apiUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(this._apiUrl + '/posts')
  }

  getPost(id: number): Observable<Post> {
    return this._http.get<Post>(this._apiUrl + '/posts/' + id)
  }

}