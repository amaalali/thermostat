'use strict';

function Thermostat(){
  this.MIN_TEMPERATURE = 10;
  this.MAX_TEMPERATURE = 32;
  this.MAX_TEMPERATURE_PSM = 25;
  this.DEFAULT_TEMPERATURE = 20;
  this.powerSaveMode = true;
  this.currentTemperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.getCurrentTemp = function(){
  return this.currentTemperature;
};

Thermostat.prototype.increaseTemp = function(){
  if( this.powerSaveMode === false && this.currentTemperature + 1 > this.MAX_TEMPERATURE) {
    throw new Error("Cannot increase temperature beyond the maximum.");
  } else if ( this.powerSaveMode === true && this.currentTemperature + 1 > this.MAX_TEMPERATURE_PSM) {
    throw new Error("Power saving on - maximum temperature reached: 25 degrees");
  }
  this.currentTemperature += 1;;
};

Thermostat.prototype.decreaseTemp = function () {
  if(this.currentTemperature - 1 < this.MIN_TEMPERATURE) {
    throw new Error("Cannot decrease temperature beyond the min.");
  };
  this.currentTemperature -= 1;
};

Thermostat.prototype.powerSaveModeOn = function() {
  // this.MAX_TEMPERATURE = 25;
  this.powerSaveMode = true;
};

Thermostat.prototype.powerSaveModeOff = function() {
  // this.MAX_TEMPERATURE = 32;
  this.powerSaveMode = false;
};

Thermostat.prototype.resetTemp = function() {
  this.currentTemperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.colour = function() {
  if(this.currentTemperature < 18) {
    return 'lowIntensity';
  }
  if(this.currentTemperature < 25) {
    return 'medIntensity';
  }
  return 'highIntensity';
};
