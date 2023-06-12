package com.skilldistillery.workout.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.skilldistillery.workout.entities.Workout;
import com.skilldistillery.workout.repositories.WorkoutRepository;

@Service
public class WorkoutServiceImpl implements WorkoutService {
	
	@Autowired
	private WorkoutRepository repo;

	@Override
	public List<Workout> listAllWorkout() {
		return repo.findAll();
	}

	@Override
	public Workout getWorkout(int id) {
		return repo.findById(id);
	}

	@Override
	public Workout create(Workout workout) {
		return repo.saveAndFlush(workout);
	}

	@Override
	public Workout update(Workout workout, int id) {
		Workout oldWorkout = repo.findById(id);
		oldWorkout.setDate(workout.getDate());
		oldWorkout.setDescription(workout.getDescription());
		oldWorkout.setIntensity(workout.getIntensity());
		oldWorkout.setDuration(workout.getDuration());
		return repo.save(oldWorkout);
	}

	@Override
	public void delete(int id) {
		repo.deleteById(id);
	}

}
