describe('Thermostat', function() {
    it('starts at 20 degrees', function(){
        thermostat = new Thermostat();
        expect(thermostat.temperature).toEqual(20);
    });
    
    it('can increase the temerature with an up function', function(){
        thermostat = new Thermostat()
        thermostat.up()
        expect(thermostat.temperature).toEqual(21);
    });








});

