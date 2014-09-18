describe("Thermostat", function() {

	var thermostat = new Thermostat();

	describe("General Functionality", function() {
		
		it("has a starting temperature of 20 degrees", function() {
			expect(thermostat.temperature).toEqual(20);
		});

		it("can increase in temperature", function() {
			thermostat.increaseTemperature();
			expect(thermostat.temperature).toEqual(21);
		});

		it("can reduce in temperature", function() {
			thermostat.temperature = 20;
			thermostat.decreaseTemperature();
			expect(thermostat.temperature).toEqual(19);
		});

		it("has a minimum temperature of 10 degrees", function() {
			thermostat.temperature = 10;
			thermostat.decreaseTemperature();
			expect(thermostat.temperature).toEqual(10);
		});

	});

	describe("Power Saving Mode", function() {
		
		it("should default to being on", function() {
			expect(thermostat.powerSavingMode).toBe(true);
		});

		it("when on, should have maximum temperature of 25 degrees", function() {
			thermostat.temperature = 25;
			thermostat.increaseTemperature();
			expect(thermostat.temperature).toEqual(25);
		});

		it("when off, should have maximum temperature of 32 degrees", function() {
			thermostat.temperature = 32;
			thermostat.powerSavingMode = false;
			thermostat.increaseTemperature();
			expect(thermostat.temperature).toEqual(32);
		});

	});

	describe("Reset Temperature", function() {

		it("the thermostat can be reset", function() {
			thermostat.temperature = 30;
			thermostat.powerSavingMode = false;
			thermostat.resetThermostat();
			expect(thermostat.temperature).toEqual(20);
			expect(thermostat.powerSavingMode).toBe(true);
		});

	});

	describe("Energy Rating", function() {

		it("should display 'efficient' if below 18 degrees", function() {
			thermostat.temperature = 17;
			expect(thermostat.energyRating()).toBe("efficient");
		});

		it("should display 'average' if between 18 and 25 degrees", function() {
			thermostat.temperature = 20;
			expect(thermostat.energyRating()).toBe("average");
		});

		it("should display 'inefficient' if above 25 degrees", function() {
			thermostat.temperature = 28;
			expect(thermostat.energyRating()).toBe("inefficient");
		});

	});

});
