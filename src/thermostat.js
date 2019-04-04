'use strict';

function Thermostat(){

    this.temp = 20;
    this.powerSaving = true

    this._minTemp = 10;
    this._maxTemp = 32;
};

Thermostat.prototype.up = function() {
    this.powerSaving ? this._maxTemp = 25 : this._maxTemp = 32;
    if (this.temp < this._maxTemp) {
        this.temp += 1;
    };
};

Thermostat.prototype.down = function() {
    if (this.temp > this._minTemp){
        this.temp -= 1;
    }
};

Thermostat.prototype.powerSavingSwitch = function() {
    this.powerSaving = !this.powerSaving;
};

Thermostat.prototype.reset = function() {
    this.temp = 20;
};

Thermostat.prototype.currentEnergyUsage = function() {
    if (this.temp < 18) {
        return 'low-usage'
    }
    if (this.temp < 25) {
        return 'medium-usage'
    }
    if (this.temp > 25) {
        return 'high-usage'
    };
};