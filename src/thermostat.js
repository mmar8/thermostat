function Thermostat() {
    this.temperature = 20;

};

Thermostat.prototype.up = function() {
    this.temperature++
    console.log(this.temperature)
}

