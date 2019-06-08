"use strict";

describe("Thermostat", function(){
  var thermostat;
  beforeEach(function(){
   thermostat = new Thermostat;
  })
  it("starts at 20 degrees", function(){
    expect(thermostat._temperature).toBe(20);
  });

  it("the temperature can go up", function(){
    thermostat.up()
    expect(thermostat._temperature).toBe(21);
  });

  it('the temperature can go down', function() {
    thermostat.down()
    expect(thermostat._temperature).toBe(19);
  });

  it('has a minimum temperature of 10', function() {
    expect(thermostat._minimumTemperature).toBe(10);
  });

  it('has a maximum temperature', function() {
    expect(thermostat._maximumTemperature).toBe(25);
  });

  it('changes maximum temperature when power saving on', function() {
    thermostat.powerSavingOn()
    expect(thermostat._maximumTemperature).toBe(25)
  });

  it('changes maximum temperature when power saving off', function() {
    thermostat.powerSavingOff()
    expect(thermostat._maximumTemperature).toBe(32)
  });

  it('resets to 20', function()  {
    thermostat.up()
    thermostat.up()
    thermostat.reset()
    expect(thermostat._temperature).toBe(20);
  });

  it('shows the current energy usage', function() {
    thermostat.down()
    thermostat.down()
    thermostat.down()
    expect(thermostat.currentEnegryUsage()).toBe('Low Usage')
  });

});
