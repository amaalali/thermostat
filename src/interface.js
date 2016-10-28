$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemp();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8a99df7bf7ef4a4a202732c392b2d240&units=metric', function(data) {
    $('#outsideTemperature').text(data.main.temp);
  });
  $('#select-city').submit(function(event) {
      event.preventDefault();
      var city = $('#current-city').val();
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=8a99df7bf7ef4a4a202732c392b2d240&units=metric', function(data) {
        $('#outsideTemperature').text(data.main.temp);
      });
  });
  $('#increaseTemp').on('click', function() {
    thermostat.increaseTemp();
    updateTemp();
  });

  $('#decreaseTemp').on('click', function() {
    thermostat.decreaseTemp();
    updateTemp();
  });

  $('#powerSaveModeOn').on('click', function() {
    thermostat.powerSaveModeOn();
    $('#powerSaveMode').text('on')
    updateTemp();
  });

  $('#powerSaveModeOff').on('click', function() {
    thermostat.powerSaveModeOff();
    $('#powerSaveMode').text('off')
    updateTemp();
  });

  $('#resetTemp').on('click', function() {
    thermostat.resetTemp();
    updateTemp();
  });

  function updateTemp() {
    $('#currentTemperature').text(thermostat.currentTemperature);
    $('#currentTemperature').attr('class', thermostat.colour());
  };

});
