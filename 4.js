function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " подключен!");
    this.isPlugged = true;
};

ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " отключен!");
    this.isPlugged = false;
};

function Lamp(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = true;
}

function Computer(name, power, type) {
    this.name = name;
    this.power = power;
    this.type = type;
    this.isPlugged = false;
}

Lamp.prototype = new ElectricalAppliance();
Computer.prototype = new ElectricalAppliance();

const tableLamp = new Lamp("Table lamp",  5);
const homePC = new Computer("Asus", 120, "laptop");

tableLamp.unplug();
homePC.plugIn();

console.log(homePC)
console.log(tableLamp)