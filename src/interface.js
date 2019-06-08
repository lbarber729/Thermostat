$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving_on').click(function() {
    thermostat.isPSMon(true);
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#powersavinig_off').click(function() {
    thermostat.isPSMon(false);
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
  };

  function updateTemperature() {
  $('#temperature').text(thermostat._temperature);
  $('#temperature').attr('class', thermostat.currentEnegryUsage());
}
});
