import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Workout } from '../models/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  url : string = environment.baseUrl + 'api/workout'




  constructor(
    private http: HttpClient
  ) { }

  index() : Observable<Workout[]> {
    return this.http.get<Workout[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('index failed' + err)
        );
      })
    );
  }

  create (workout: Workout) : Observable<Workout>{
    return this.http.post<Workout>(this.url, workout).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('create failed' + err)
        );
      })
    );
  }

  update(workout:Workout){
    return this.http.put<Workout>(this.url + '/' + workout.id, workout).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('update failed' + err)
        );
      })
    );
  }

  destroy(workout: Workout){
    return this.http.delete(this.url + '/' + workout.id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('destroy failed' + err)
        );
      })
    );
  }






}
