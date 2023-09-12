class Car {
	constructor(speed) {
		this.speed = speed;
	}
	drive(newSpeed) {
		this.speed = newSpeed
		return this.speed
	}
}

let newCar =  new Car(0)

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
