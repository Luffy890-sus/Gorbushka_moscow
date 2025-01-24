// Transport klassi
class Transport {
    constructor(name, speed, capacity) {
        this.name = name;
        this.speed = speed;
        this.capacity = capacity;
    }

    start() {
        console.log(`${this.name} harakatga tushdi.`);
    }

    stop() {
        console.log(`${this.name} to'xtadi.`);
    }
}

// Avtomobil klassi
class Car extends Transport {
    constructor(name, speed, capacity, fuelType) {
        super(name, speed, capacity);
        this.fuelType = fuelType;
    }

    driveMode(mode) {
        console.log(`${this.name} ${mode} rejimida harakatlanmoqda.`);
    }
}

// Samolyot klassi
class Airplane extends Transport {
    constructor(name, speed, capacity, altitude) {
        super(name, speed, capacity);
        this.altitude = altitude;
    }

    fly() {
        console.log(`${this.name} parvoz boshladi.`);
    }
}

// Kema klassi
class Ship extends Transport {
    constructor(name, speed, capacity, cargoCapacity) {
        super(name, speed, capacity);
        this.cargoCapacity = cargoCapacity;
    }

    sail() {
        console.log(`${this.name} suzishni boshladi.`);
    }
}

// Misol uchun obyektlar yaratamiz
const car = new Car("Toyota Prius", 180, 5, "gibrid");
car.start();
car.driveMode("eco");
car.stop();

const plane = new Airplane("Boeing 747", 900, 660, 13100);
plane.start();
plane.fly();
plane.stop();

const ship = new Ship("Titanic", 40, 3000, 15000);
ship.start();
ship.sail();
ship.stop();
