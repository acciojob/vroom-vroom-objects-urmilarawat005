// Constructor function for Car
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add method to Car prototype to get make and model
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// Constructor function for SportsCar, inheriting from Car
function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model);  // Call the Car constructor to set make and model
  this.topSpeed = topSpeed;
}

// Inherit the Car prototype methods
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar; // Set the constructor back to SportsCar

// Add method to SportsCar prototype to get top speed
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Example Usage:

// Create an instance of SportsCar
const car = new SportsCar("Ferrari", "Testarossa", 200);

// Get the make and model
console.log(car.getMakeModel()); // Output: Ferrari Testarossa

// Get the top speed of the sports car
console.log(car.getTopSpeed()); // Output: 200
