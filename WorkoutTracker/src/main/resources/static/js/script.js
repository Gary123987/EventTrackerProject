
window.addEventListener('load', function(e) {
	console.log('Window loaded, Dom created');
	init();
})

function init() {
	console.log('in init')
	


document.showAll.submit.addEventListener('click', function (e) {
	e.preventDefault()
	console.log('howdy')
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/workout');
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if(xhr.status === 200) {
				let workoutList = JSON.parse(xhr.responseText);
				console.log(workoutList)
				displayWorkout(workoutList);
			}
		}
		
		
	}
	
	xhr.send();
	
})

document.workoutSearch.searchById.addEventListener('click', function(e) {
	e.preventDefault()
	let xhr = new XMLHttpRequest()
	let id = document.workoutSearch.workoutId.value
	console.log(id)
	xhr.open('GET', "api/workout/" + id)
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let workout = JSON.parse(xhr.responseText)
				console.log('workout')
				displayWorkout(workout)
			}
		}
	}
	
	xhr.send()
	
	
})

document.createWorkout.createSubmit.addEventListener('click', function(e) {
	e.preventDefault()
	let workout = {
	date: document.createWorkout.workoutDate.value,
	duration: document.createWorkout.workoutDuration.value,
	intensity: document.createWorkout.workoutIntensity.value,
	description: document.createWorkout.workoutDescription.value
	}
	let xhr = new XMLHttpRequest()
	xhr.open('POST', "api/workout")
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let returnedWorkout = JSON.parse(xhr.responseText)
				displayWorkout(returnedWorkout)
			}
		}
	}
	
	
	xhr.setRequestHeader("Content-type", "application/json");
	let workoutJSON = JSON.stringify(workout); 
	xhr.send(workoutJSON);
})

document.deleteWorkout.deleteButton.addEventListener('click', function (e) {
	e.preventDefault()
	let id = document.deleteWorkout.deleteId.value
	let xhr = new XMLHttpRequest()
	xhr.open('DELETE', 'api/workout/' + id)
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log('deleted ' + id)
			}
			if(xhr.status === 500) {
				window.alert('ID Not Found')
			}
		}
	}
	xhr.send();
})


let displayWorkout = function(workouts) {
	let div = document.getElementById('showWorkout')
		let table = document.createElement('table')
		table.setAttribute('border', '1')
		let headers = table.insertRow()
		let th0 = headers.insertCell()
		let th1 = headers.insertCell()
		let th2 = headers.insertCell()
		let th3 = headers.insertCell()
		let th4 = headers.insertCell()
		th0.appendChild(document.createTextNode('ID'))
		th1.appendChild(document.createTextNode('Date'))
		th2.appendChild(document.createTextNode('Duration'))
		th3.appendChild(document.createTextNode('Intensity'))
		th4.appendChild(document.createTextNode('Description'))
		table.appendChild(headers)
		div.appendChild(table)
		if (workouts && Array.isArray(workouts)) {
			for (let workout of workouts) {
				console.log(workout)
				let data = table.insertRow()
				let row1 = data.insertCell()
				row1.appendChild(document.createTextNode(workout.id))
				let row2 = data.insertCell()
				row2.appendChild(document.createTextNode(workout.date))
				let row3 = data.insertCell()
				row3.appendChild(document.createTextNode(workout.duration))
				let row4 = data.insertCell()
				row4.appendChild(document.createTextNode(workout.intensity))
				let row5 = data.insertCell()
				row5.appendChild(document.createTextNode(workout.description))
			}
			
		}
		else{
				console.log(workouts)
				let data = table.insertRow()
				let row1 = data.insertCell()
				row1.appendChild(document.createTextNode(workouts.id))
				let row2 = data.insertCell()
				row2.appendChild(document.createTextNode(workouts.date))
				let row3 = data.insertCell()
				row3.appendChild(document.createTextNode(workouts.duration))
				let row4 = data.insertCell()
				row4.appendChild(document.createTextNode(workouts.intensity))
				let row5 = data.insertCell()
				row5.appendChild(document.createTextNode(workouts.description))
		}
	}
	}
