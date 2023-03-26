class ElectricalAppliance {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  plugIn() {
    console.log(this.name + " подключен!");
    this.isPlugged = true;
  }

  unplug() {
    console.log(this.name + " отключен!");
    this.isPlugged = false;
  }
}

class Lamp extends ElectricalAppliance {
  constructor (name, power) {
    super(name, power);
    this.isPlugged = true;
  }
}

class Computer extends ElectricalAppliance {
  constructor(name, power, type) {
    super(name, power);
    this.type = type;
    this.isPlugged = false;
  }
}

const tableLamp = new Lamp("Table lamp",  5);
const homePC = new Computer("Table PC",  120, "stationary");

tableLamp.unplug();
homePC.plugIn();

console.log(homePC)
console.log(tableLamp)