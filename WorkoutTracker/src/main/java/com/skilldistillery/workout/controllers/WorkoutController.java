package com.skilldistillery.workout.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.workout.entities.Workout;
import com.skilldistillery.workout.services.WorkoutServiceImpl;

@RestController
@RequestMapping("api")
public class WorkoutController {
	
	@Autowired
	private WorkoutServiceImpl dao;
	
	@GetMapping("workout")
	public List<Workout> listAllWorkouts() {
		return dao.listAllWorkout();
	}
	
	@GetMapping("workout/{id}")
	public Workout findWorkoutById(@PathVariable int id) {
		return dao.getWorkout(id);
	}
	@PostMapping("workout")
	public Workout createWorkout(@RequestBody Workout workout) {
		return dao.create(workout);
	}
	@DeleteMapping("workout/{id}") 
	public void deleteWorkout(@PathVariable int id) {
		dao.delete(id);
	}
	@PutMapping("workout/{id}") 
	public Workout updateWokrout(@PathVariable int id, @RequestBody Workout workout) {
		return dao.update(workout, id);
	}
	
	

}
