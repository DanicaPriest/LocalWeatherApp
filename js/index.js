
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
            picurl = "https://lh3.googleusercontent.com/P87BTJrJ-hINJqV7jSIMFZYA07pjvUPHai1477jVT5I1GRoYMOTPL-_WkT0nkVLc1d8cJWPUVs0gHJYeD4L9CO_mB08kN-bxSoItxqV3OR06D7HYPU8l8GM9lq2sO8Hh_I98Fj8ETWWB4EA4zMWD2A0le4xwFOIaMWEEK6DYcBC6pN9ZJMHe6lJdVF2MDPy8MFZ0QRVgxo9Mf-LrITQRwIjOBu05YoK6BCUiH8lqCKzixBrgDGVdS_D6_TnM8VjPTrNKbML5wJF-46lBbhNxhriG-K0YzY6OBrdawv4NwK6RYHpWnnM5MgkyolyLNMeEWfvL6tWfk53pe4fIEAX5g-rGCKqCtUEFi8tvB1KLBEAzZWlh5ouRRHzUzf1rIBhaqR1SFSaw2mKLXym-4AXoJ_o2IDly_UG5LEiBRpAy5HnS4ZS6Oh2rW-deoxOdoF83ui3gSrMNpFkJ4ThCU7BJQ_kEh0tl-1v7Zg7YMze85Pre4ZLRA5EFQgX9Ow0gPhSSz86DXxS8yr3rL8xAvBa70ihg2NDIujAPUcu8nnxgKONaLdGxpNd252ui8rJ_81UC_zP-7thJPJg1Dc187aDiRMHjsG5qNITrNqZmmK4n=w441-h546-no"}
            else if (cel >= 10 && cel < 20){
            picurl = "https://lh3.googleusercontent.com/kAA3AXsijP9cLWfT0fvZHWzXLeCuuliA4Pco_kB8amE6DqWtIDrzekbOuSpSenJEBN4Vm_8u7ydYyQw0emNrSgf9y5Fmeo-MmREKvdCKbXP7d-sqXMx-T9Bk2QU_kr04qmTPQIdNEKFLE1XOTd2H1omPbvMiEAxx8MBw7ibzfp7b-X7Nhs4Vg81pHsx-rI0Rc7ZFmBJfLD2NT8MMF--cYB-LqHrexG6G3ASwnfWTg5ZfhbVMQSNI_YxppxHIvJoZr3CigsA6HhrFyGE6N3rEYUIDfA-qry7W44j0xnIpWKtl0YKhaFkwwn-Ktf9tcw9P2sjk2LsPijNLu0pzWxpz50FtX-J29X_bDRkJg8p8C4iyBHHrkw2zZOCU45NL5ZYndqAOG2L4E4ewoNm8maLneOA5lPNSWv5IoyspY3d7cFa_7uElc1ugxOhD_8TVOem1Q1c29RAx5UaEQIXdmqEqQePqx0Z09zNr5cvS2fU63CMcEOOABRZh9Um4dFpdJcZjmGhxirmRAOqQyl-XqxuieBqgSyeH7tsxN_aijqs9U9VbyPK78If7qZ9li2e90O6jYGZcs-pDrnAAQ-28eqGsZH6rs2WyTolbTUO2gfF3=w373-h465-no"}
      else if (cel >= 20 && cel < 26){
            picurl = "https://lh3.googleusercontent.com/qHTafBSLkR4VNod4w1eFrt_JrCCweJ_AiVtPTKd35LL2jjAfdVGZG6oyIbHm9cZoPSRUjJgYSh8CExbzLqkCIULj2ebe7iBVJeuBN5FSnDlGdNI1YCSaXbXsQEBeWCdZf4VSEqU9gcQfuTdSo-7vbRErRAeJKaAS6Wk-MQqf8IoWZoDOHtdpIAUQkwQTkFX35VaeS9bkBji9PyhvdOugFRN6nbc7MJpTjCUv0p9sVfDXsp_xmjLZFl-UeRY7Ax2xoPVVxE6gExc9lzAwe6-0nYNaJ7gPQZsB4T5_-UwsNj5eCW8-ow8cL7wD9ZQWZl1bbidoN1RbwrxHW_HZyE7GVHzcQoZfkDEKmmZmp7I7JcsPTtd21ucOC7w1XKx1r0io54bH5EtcqY7Xylk-xQ3Bou07KOxNPADGkfH4doTCk3_dGJ48RwOYK5AW5JkPRokHZy72cdl-nR2cx9j_pZIeO9P4tEefuxUySsaQQaiOVHtd-h64BD4_a6V71CdBWRxPKAkwFsDPh6s4o9Kel8FjvQTuThzXA34AVqc6Cka0WZvHZcDknEt8lp_PrkgZp5ZqdD-dEdB6vHdfIAXAtJ-QXi0mem_g3bQtYHrYpVVm=w594-h698-no"}
      else if (cel >= 26){
            picurl = "https://lh3.googleusercontent.com/OD84PC-3hVaQPRNEixO2awZ-3Xao5vPjWD5zFV7UU6lY_zAM8-Ei_n_V7EbzQ7ftXiLdoSqlrgb5lUEftjjUkkdI1gJYh3QP8wm-XEUTYDXCCSXKdPKdtFggnm7RO7KMt3BnQySjm9EojSNlnJI0SSvGdTtPYo8eh7In2J01aAxAsykeQUjawY2anCkL3-D60WKz0hQDyldUVLdmiM-WTGbdO9-82IaBYm8NqaRvLFSYJ9PBR5PKGibKrCVnT_UMxmfbhVa357n-bZWepdyStIrpfofwRFhubjGunD7qkXO0pqhvgp3-hmWkHdh1U7SKxu-vn6nA8NmPb-E4TEUEvVJZTAdUbK_rWUPKLMARzdKDD---G19_-jimMRPNGmsE5tp_QggeNb1eT_cUEFHSoC2qDjlzVnLYsF1OuBC_WXsnpDmRsud7DwZyG8T4XfqUlvmBcHTVbSAIdg6Wf2msdyVsfIQkf5KDG9p9jYRwkrKCMbkG5BLIHTWsrOkWud0ZY3LnCJRuLZCVKvHdXkaCvGfNcVua48SQQCeIDeZgV9_nTPAxWHEesJwyA_V0_kqSQ6bFPNee-N_ZsHJOR4g5-Ll01ObpMufVsp4xsPt_=s250-no"};
                  
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
    var app = "59dfb3bb052698f4ef166dabc3c0d641";
    return "https://api.openweathermap.org/data/2.5/weather?appid=" + app +
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
      $.getJSON("https://freegeoip.net/json/", function(json){
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
    var app = "59dfb3bb052698f4ef166dabc3c0d641";
    return "https://api.openweathermap.org/data/2.5/weather?appid=" + app + "&q=" +
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
        
    
   

  
