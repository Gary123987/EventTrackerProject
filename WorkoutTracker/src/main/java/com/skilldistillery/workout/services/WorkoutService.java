package com.skilldistillery.workout.services;

import java.util.List;

import com.skilldistillery.workout.entities.Workout;

public interface WorkoutService {

	List<Workout> listAllWorkout();
	Workout getWorkout(int id);
	Workout create(Workout workout);
	void delete(int id);
	Workout update(Workout workout, int id);

}
