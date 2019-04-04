'use strict';

describe("Thermostat", function() {
    var thermostat
    beforeEach(function(){
        thermostat = new Thermostat()
    })
    it("Thermostat starts at 20 degreeses", function() {
        expect(thermostat.temp).toEqual(20);
    });

    it('You can increase the temperature with an up function by 1 degree', function(){
        thermostat.up()
        expect(thermostat.temp).toEqual(21);
    });

    it('You can decrease the temperature with a down function', function() {
        thermostat.down()
        expect(thermostat.temp).toEqual(19);
    });

    it('The minimum temperature is 10 degrees', function(){
        var times = 20;
        for(var i = 0; i < times; i++) {
            thermostat.down()
        }
        expect(thermostat.temp).toEqual(10);
    });

    it('Power saving mode is on by default', function() {
        expect(thermostat.powerSaving).toBe(true);
    });

    it('The power saving mode can be switched on and off', function() {
        thermostat.powerSavingSwitch();
        expect(thermostat.powerSaving).toBe(false);
        thermostat.powerSavingSwitch();
        expect(thermostat.powerSaving).toBe(true);
    });

    it('If power saving mode is on, the maximum temperature is 25 degrees', function() {
        var times = 20;
        for(var i = 0; i < times; i++) {
            thermostat.up()
        }
        expect(thermostat.temp).toEqual(25);
    });

    it('If power saving mode is off, the maximum temperature is 32 degrees', function() {
        thermostat.powerSavingSwitch();
        var times = 20;
        for(var i = 0; i < times; i++) {
            thermostat.up()
        }
        expect(thermostat.temp).toEqual(32);
    });

    it('You can reset the temperature to 20 with a reset function', function() {
        var times = 20;
        for(var i = 0; i < times; i++) {
            thermostat.up()
        }
        thermostat.reset();
        expect(thermostat.temp).toEqual(20);
    });

    it('return low-usage if under <18', function(){
        thermostat.temp = 17;
        expect(thermostat.currentEnergyUsage()).toEqual('low-usage')
    });

    it('return medium-usage if under <25', function(){
        thermostat.temp = 20;
        expect(thermostat.currentEnergyUsage()).toEqual('medium-usage')
    });

    it('return high-usage over >25', function(){
        thermostat.temp = 30;
        expect(thermostat.currentEnergyUsage()).toEqual('high-usage')
    });
});