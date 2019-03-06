function Thermostat() {
    this.temperature = 20;
    this.minimumTemperature = 10
    this.powersavemode = true

};

Thermostat.prototype.up = function() {
    if (this.powersavemode === true && this.temperature < 25) {
    this.temperature++}
    else {return this.temperature}
    console.log(this.temperature)
}

Thermostat.prototype.down = function() {
    if (this.temperature > this.minimumTemperature) {
    this.temperature--} else
    { return this.temperature }
    console.log(this.temperature)
}

Thermostat.prototype.powersave = function(mode) {
    if (mode === 'on') {
        this.powersavemode = true
        if (this.temperature > 25) { this.temperature = 25}
    }
    else if (mode === 'off') {
        this.powersavemode = false
    }
}