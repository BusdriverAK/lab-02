'use strict';

class Vehicle {
  constructor(name, wheels) {
    this.name = name;
  }
  drive() {
    console.log('Driving!');
  }
}

class Car extends Vehicle {
  constructor(name, doors) {
    super(name);
    this.doors = doors;
  }
  drive() {
    super.drive();
  }
}

class Motorcycle extends Vehicle {
  constructor(name) {
    super(name);
  }
  wheelie() {
    console.log('Doing a wheelie!');
  }
}

module.exports = Vehicle;
