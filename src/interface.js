$(document).ready(function() {
    var thermostat = new Thermostat();
    $('#thermostat').text(thermostat.temp);

    $('#temperature-up').on('click', function(){
        thermostat.up();
        $('#thermostat').text(thermostat.temp);
    });

    $('#temperature-down').on('click', function(){
        thermostat.down();
        $('#thermostat').text(thermostat.temp);
    });

    $('#temperature-down').on('click', function(){
        thermostat.down();
        $('#thermostat').text(thermostat.temp);
    });

    $('#reset').on('click', function(){
        thermostat.reset();
        $('#thermostat').text(thermostat.temp);
    });

    $('#switch-power-saving').on('click', function(){
        thermostat.powerSavingSwitch();
        if(thermostat.powerSaving === true){
            $('#power-saving-status').text('on')
        } else {
            $('#power-saving-status').text('off')
        };
    })
});