
$(document).ready(function () {
   var cel =""; 
  var picurl = "";
  //grab and display temperature in celsius.
      var getTemp = function(data){
       cel = Math.round((data.main.temp-273.15))
      $("#temp").html(cel + "&degC");
      var isCel = true;
//convert Celsius to Fahrenheit button.
 $("#ctof").on("click",function(){
    if(isCel) {   $("#temp").html(Math.round((cel * 9)/5 +32)+ "&degF"); isCel = false; } else{$("#temp").html(cel + "&degC"); isCel = true}
    
      });}
      //grab and display sky conditions
      var getSky = function(data){
      var wd = "";
      data.weather.forEach(function(val){
        wd += val.main
        wd += " "
      });
      $("#wpic").html(wd);};
   //display picture based on temperature
      var getClothes = function(data){
  
        if (cel <= 0){
            picurl = "https://cdn0.rubylane.com/shops/nouveautonow/NN772.1L.jpg"}
            
          else if (cel >0 && cel < 10){
            picurl = "http://ww1.prweb.com/prfiles/2015/09/30/12996504/3_DownNoHood.png"}
            else if (cel >= 10 && cel < 20){
            picurl = "http://ww1.prweb.com/prfiles/2016/01/31/13192175/3_Hoodie.png"}
      else if (cel >= 20 && cel < 26){
            picurl = "http://pngimg.com/upload/tshirt_PNG5449.png"}
      else if (cel >= 26){
            picurl = "https://www.designashirt.com/img/pages/landing-pages/products/tank-tops.png"};
                  
        $("#clothes").html("<img src='" + picurl + "'/>")};
  //display background based on sky conditions 
  var getBackground= function(data){
      $("#wpic:contains(Mist), #wpic:contains(Fog)").fadeIn(function(){ $("body").addClass("fog")});
     
      $("#wpic:contains(Cloud), #wpic:contains(cloud)").fadeIn(function(){ $("body").addClass("cloudy")});
      $("#wpic:contains(Haze), #wpic:contains(Smoke)").fadeIn(function(){ $("body").addClass("haze")});
      $("#wpic:contains(Rain), #wpic:contains(Drizzle)").fadeIn(function(){ $("body").addClass("rain")});
      $("#wpic:contains(Storm), #wpic:contains(Thunder)").fadeIn(function(){ $("body").addClass("storm")});
      $("#wpic:contains(Snow), #wpic:contains(Hail)").fadeIn(function(){ $("body").addClass("snow")});
      $("#wpic:contains(Extreme), #wpic:contains(Lightning)").fadeIn(function(){ $("body").addClass("extreme")});
      $("#wpic:contains(Clear), #wpic:contains(Sun)").fadeIn(function(){ $("body").addClass("clear")});}
  // A function that takes a lat/lon pair and returns the weather URL string.
  
  var url = function (latitude, longitude) {
    var app = "1e1fc09da0314d9f44fc47d0243c2dae";
    return "http://api.openweathermap.org/data/2.5/weather?APPID=" + app +
      "&lat=" + latitude +"&lon="+ longitude;
  }

  
  // Grab the lat/lon and make the API request.
  navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    $.getJSON(url(latitude, longitude), function(data) { 
     $("#browserFail").addClass("hide");
//grab and display location name. 
      $("#cityName").html(data.name + ", " + data.sys.country);
      //grab and display temperature in celsius.
      getTemp(data);
//grab and display sky conditions
      getSky(data);
      //display picture based on temperature
      getClothes(data);
     
      //display background based on sky conditions    
      getBackground(data);
      
      
      
    }); 
  
     });

  
  //this code is only for browsers that don't support http
    $("#redoBtn").on("click", function newPosition(){
      $.getJSON("http://freegeoip.net/json/", function(json){
        var latitude = json.latitude;
         var longitude = json.longitude;

        $.getJSON(url(latitude, longitude), function getWeather (data) { 
     $("#browserFail").addClass("hide");
//grab and display location name. 
      $("#cityName").html(data.name + ", " + data.sys.country);
      //grab and display temperature in celsius.
      getTemp(data);//grab and display sky conditions
      getSky(data);
      //display picture based on temperature
      getClothes(data);
     
      //display background based on sky conditions    
      getBackground(data);
      
      
      
      
        
                                                             
    }); 
      
      
    
      });   
  });
    //end of code for broswer issues code
     $("#newCity").click(function(){
       $("body").removeClass();
                  var urlc = function (city) {
    var app = "1e1fc09da0314d9f44fc47d0243c2dae";
    return "http://api.openweathermap.org/data/2.5/weather?APPID=" + app + "&q=" +
        city;
                   
  }
   
   var city = prompt("What city would you like the weather for?");                                                          $.getJSON(urlc(city), function (data){
      
            $("#browserFail").addClass("hide");
//grab and display location name. 
      $("#cityName").html(data.name + ", " + data.sys.country);
      //grab and display temperature in celsius.
      getTemp(data);//grab and display sky conditions
      getSky(data);
      //display picture based on temperature
      getClothes(data);
     
      //display background based on sky conditions    
      getBackground(data);
      
      
      
                                                              
                                                             }); 
    });
})