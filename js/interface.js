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

    $( "#power-savings-on" ).click( function () {
        thermostat.powerSavingOn();
        updateTemp();
        $("#power-saving-status").text('on');
        powerSavingColor();
    });

     $( "#power-savings-off" ).click( function () {
        thermostat.powerSavingOff();
        $("#power-saving-status").text("off");
        powerSavingColor();
     });

     $( "#reset" ).click( function() {
       thermostat.reset();
       updateTemp();
       $("#power-saving-status").text('on');
       powerSavingColor();
     });

     $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=???&units=metric', function(data) {
        $('#current-temperature').text(data.main.temp);
     })

     function updateTemp(){
       powerSavingColor();
       $("#current-temp").text(thermostat._current_temperature);
       $('#current-temp').attr('class', thermostat.energyUse());
     };

     function powerSavingColor(){
       $('#power-saving-status').attr('class', thermostat._powerSaving);
     }
});
