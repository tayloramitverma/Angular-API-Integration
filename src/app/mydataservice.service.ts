import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MydataserviceService {

  constructor(private http: HttpClient) { }


  getTotalBlogs(page: number)
  {
    return this.http.get('http://192.168.1.40/testing/wp-json/wp/v2/posts');
  }

  getMyBlogs(page: number)
  {
    return this.http.get('http://192.168.1.40/testing/wp-json/wp/v2/posts?page='+page).pipe(
      tap(res => console.log('fetched blogs')),
      catchError(this.handleError('getHeroes', []))
    );
  }

  getMyBlogDetail(slug: any)
  {
    return this.http.get('http://192.168.1.40/testing/wp-json/wp/v2/posts?slug='+slug);
  }

  getMyBlogMenu()
  {
    return this.http.get('http://192.168.1.40/testing/wp-json/menus/v2/header');
  }


private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(`${operation} failed: ${error.message}`); // log to console instead
 

 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}