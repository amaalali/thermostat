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

});
