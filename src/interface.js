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
      $('#power-saving-status').text("ON"); 
     });

     $( "#powersaving-off" ).click(function() {
          thermostat.powersave("off");
      $( "#temperature" ).text(thermostat.temperature);
      $('#power-saving-status').text("OFF");  
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

     $('#current-city').change(function() {
          var city = $('#current-city').val();
          $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
            $('#current-temperature').text(data.main.temp)
          })
        })

     function displayWeather(city) {
          var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
          var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
          var units = '&units=metric';
          $.get(url + token + units, function(data) {
            $('#current-temperature').text(data.main.temp);
          })
     };
});
