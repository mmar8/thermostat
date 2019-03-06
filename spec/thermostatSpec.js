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

    it('can decrese the temerature with a down function', function(){
        thermostat = new Thermostat()
        thermostat.down()
        expect(thermostat.temperature).toEqual(19);
    });








});

