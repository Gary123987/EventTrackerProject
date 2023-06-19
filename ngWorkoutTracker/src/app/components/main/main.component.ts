import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  workoutList : Workout [] = []

  workoutToBeUpdated : Workout | null = null

  newWorkout = new Workout()

  constructor (
    private ws : WorkoutService
  ) {

  }


  ngOnInit(): void {
    this.loadWorkouts()
  }


  loadWorkouts() {
    this.ws.index().subscribe( {
      next : (workoutList) => {
        this.workoutList = workoutList
      } ,
      error: (theError) => {
        console.log(theError)
      }
    })
  }

  createWorkout(workout : Workout) {
    this.ws.create(workout).subscribe ({
      next : (workout) => {
        this.ngOnInit()
        console.log(workout)
      } ,
      error : (theError) => {
        console.log(theError)
      }
    })
  }

  update(workout: Workout) {
    this.ws.update(workout).subscribe({
      next: (workout) => {
        this.ngOnInit()
        console.log(workout)
        this.workoutToBeUpdated = null
      } ,
      error : (theError) => {
        console.log(theError)
      }
    })

  }

  delete(workout : Workout) {
    this.ws.destroy(workout).subscribe( {
      next: () => {
        this.ngOnInit()
      } ,
      error: (theError) => {
        console.log(theError)
      }

    })
  }






}
