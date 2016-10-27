$( document ).ready(function() {
  var thermostat = new Thermostat();

    updateTemp();

    $( "#up" ).click(function( event ) {
        thermostat.up();
        updateTemp();
    });

    $( "#down" ).click(function( event ) {
        thermostat.down();
        updateTemp();
    });

    $( "#power_savings_on" ).click( function () {
        thermostat.powerSavingOn();
        updateTemp();
        $("#power_saving_status").text('on');
        powerSavingColor();
    });

     $( "#power_savings_off" ).click( function () {
        thermostat.powerSavingOff();
        $("#power_saving_status").text("off");
        powerSavingColor();
     });

     $( "#reset" ).click( function() {
       thermostat.reset();
       updateTemp();
       $("#power_saving_status").text('on');
       powerSavingColor();
     });

     function updateTemp(){
       powerSavingColor();
       $("#current_temp").text(thermostat._current_temperature);
       $('#current_temp').attr('class', thermostat.energyUse());
     };

     function powerSavingColor(){
       $('#power_saving_status').attr('class', thermostat._powerSaving);
     }
});
