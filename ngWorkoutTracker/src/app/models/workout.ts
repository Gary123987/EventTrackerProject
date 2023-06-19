export class Workout {
id: number;
date:string;
intensity : number;
duration : number;
description: string;

constructor (
id: number = 0,
date:string = '',
intensity : number = 0,
duration : number = 0,
description: string = '',
) {
  this.id = id
  this.date = date,
  this.intensity = intensity,
  this.duration = duration,
  this.description = description
}




}
