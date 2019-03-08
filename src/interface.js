$(document).ready(function() {
    var thermostat = new Thermostat();

     $( "#temperature-reset" ).click(function() {
          thermostat.reset();
          $( "#temperature" ).text(thermostat.temperature);
     });

     $( "#temperature" ).text(thermostat.temperature); 

     $( "#temperature-up" ).click(function() {
          thermostat.up();
         updateTemp(); 
     });

     $( "#temperature-down" ).click(function() {
          thermostat.down();
          updateTemp(); ;
     });

     $( "#powersaving-on" ).click(function() {
          thermostat.powersave();
      $( "#temperature" ).text(thermostat.temperature); 
     });

     $( "#powersaving-off" ).click(function() {
          thermostat.powersave("off");
      $( "#temperature" ).text(thermostat.temperature); 
     });

     function updateTemp(){
       $( "#temperature" ).text(thermostat.temperature); 
       if(thermostat.usage() == 'low-usage') {
          $("#temperature").css('color','green')
       } else if (thermostat.usage() == 'medium-usage') {
          $("#temperature").css('color','black')
       } else if (thermostat.usage() == 'high-usage') {
          $("#temperature").css('color','red')
       }  
     };
     

});
