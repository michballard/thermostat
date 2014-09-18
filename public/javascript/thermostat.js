var temperatureChange = 1;
var minimumTemperature = 10;
var resetTemperature = 20;
var psmMaximum = 25;
var nonpsmMaximum = 32;
var efficientToAverageTemperature = 18;
var averageToEfficientTemperature = 25;
var resetPSMSetting = true;

function Thermostat() {
	this.resetThermostat();
}

Thermostat.prototype.increaseTemperature = function() {
	if(this.temperature < this.maximumTemperature()) this.temperature += temperatureChange;
};

Thermostat.prototype.decreaseTemperature = function() {
	if(this.temperature > minimumTemperature){
		this.temperature -= temperatureChange;
	}
};

Thermostat.prototype.maximumTemperature = function() {
	if(this.powerSavingMode) {
		return psmMaximum;
	}
	return nonpsmMaximum;
};

Thermostat.prototype.resetThermostat = function() {
	this.temperature = resetTemperature;
	this.powerSavingMode = resetPSMSetting;
};

Thermostat.prototype.energyRating = function() {
	if(this.temperature < efficientToAverageTemperature){
		return "efficient";
	} else if (this.temperature >= efficientToAverageTemperature && this.temperature < averageToEfficientTemperature) {
		return "average";
	} else return "inefficient";
};

$(document).ready(function() {
	
	var thermostat = new Thermostat();

	function updateTemperature() {
		$('.temp').text(thermostat.temperature);
		$('h2').removeClass('efficient average inefficient').addClass(thermostat.energyRating());
    console.log(thermostat.energyRating());
	}

	updateTemperature();

	$('.increaseTemp').on('click', function() {
		thermostat.increaseTemperature();
	});

	$('.decreaseTemp').on('click', function() {
		thermostat.decreaseTemperature();
	});

	$('.reset').on('click', function() {
		thermostat.resetThermostat();
		$('.psm').prop('checked', true);
	});

	$('.psm').on('change', function() {
		thermostat.powerSavingMode = $(this).prop('checked');
	});

	$('button').on('click', function() {
		updateTemperature();
	});

});