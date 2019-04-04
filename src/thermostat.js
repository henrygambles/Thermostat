function Thermostat(){

    this.temp = 20;
    this._minTemp = 10;
    this._maxTemp = 32;
    this.powerSaving = true
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