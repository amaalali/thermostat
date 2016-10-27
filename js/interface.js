$( document ).ready(function() {
  var thermostat = new Thermostat();

    $("#current_temp").text(thermostat._current_temperature);

    $( "#up" ).click(function( event ) {
        thermostat.up();
        $("#current_temp").text(thermostat._current_temperature);
    });

    $( "#down" ).click(function( event ) {
        thermostat.down();
        $("#current_temp").text(thermostat._current_temperature);
    });

    $( "#power_savings_on" ).click( function () {
        thermostat.powerSavingOn();
        $("#current_temp").text(thermostat._current_temperature);
        $("#power_saving_status").text('on');
    });

     $( "#power_savings_off" ).click( function () {
        thermostat.powerSavingOff();
        $("#power_saving_status").text("off");
     });

     $( "#reset" ).click( function() {
       thermostat.reset();
       $("#current_temp").text(thermostat._current_temperature);
       $("#power_saving_status").text('on');
     });
});
