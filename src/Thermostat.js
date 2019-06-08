function Thermostat() {
  this._temperature = 20;
  this._minimumTemperature = 10;
  this._maximumTemperature = 25;
  this._psmOn = true
};

Thermostat.prototype.up = function(){
  this._temperature += 1;
};

Thermostat.prototype.down = function(){
  this._temperature -= 1;
};

Thermostat.prototype.powerSavingOn = function() {
  this._maximumTemperature = this._maximumTemperature;
  this._psmOn == true
};

Thermostat.prototype.powerSavingOff = function() {
  this._maximumTemperature += 7;
  this.psmOn == false
};

Thermostat.prototype.isPSMon = function () {
  if (this._psmOn === true) {
    return 'On';
  }
    return 'Off';
};

Thermostat.prototype.reset = function () {
  this._temperature = 20;
};

Thermostat.prototype.currentEnegryUsage = function() {
  if (this._temperature < 18) {
    return 'low-usage';
  }
  if (this._temperature > 25) {
    return 'high-usage';
  }
  return 'medium-usage';
};
