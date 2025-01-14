// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}
car.prototype.getMakeModel = function(){
	return `${this.make} ${this.model}`;
};


function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model);
	this.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function(){
	return this.topSpeed;
};

const car = new SportsCar("Ferrari", "Testarossa", 200);

console.log(car.getMakeModel());
console.log(car.getTopSpeed());



// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;













