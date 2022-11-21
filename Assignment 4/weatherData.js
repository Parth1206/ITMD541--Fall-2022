let locationInput;
let entButton;
let geoButton;
let dayHour;
let region;

region = document.getElementById("region");

function init(){
    locationInput = this.document.getElementById("locationName");
    let locationData = locationInput.value;
    console.log(typeof(locationData));

    if(locationData === "" || locationData === null) {
        alert("Please enter a valid location");
    }

    fetch('https://weatherdbi.herokuapp.com/data/weather/'+locationData)
    .then(res=>res.json())
    .then(function (json){

        
        let dataRegion = json.region;
        console.log(json);
        
        let dataArray = Object.values(json.currentConditions);
        console.log(dataArray);
        console.log(dataArray[1]);
        let temp = Object.values(dataArray[1]);
       // console.log("Temprature " + temp[0]);

        let wind = Object.values(dataArray[4]);
       // console.log("Temprature " + wind[0]);ß

       let boxDisplay = document.getElementById("Results");
       boxDisplay.style.visibility = "visible"; 

        document.getElementById("region").innerHTML  = "Weather for " + dataRegion;
        document.getElementById("dayHour").innerHTML = dataArray[0];
        document.getElementById("currentConditions").innerHTML  = "Current Conditions";
        document.getElementById("temp").innerHTML  = temp[1]+"°F";
        document.getElementById("percip").innerHTML  = dataArray[2];
        document.getElementById("humidity").innerHTML  = dataArray[3];
        document.getElementById("wind").innerHTML  = wind[0]+" kmph";
        document.getElementById("description").innerHTML  = dataArray[6];

        let img = document.getElementById('imageIcon');
        img.src = dataArray[5];
        
        let forecast = json.next_days;
        console.log(forecast);

        minTemp1 = Object.values(forecast[1].min_temp);
        maxTemp1 = Object.values(forecast[1].max_temp);

        document.getElementById("forecastDisplay").innerHTML  = "Forecast for the Next 7 days";
        
        document.getElementById("daysAhead1").innerHTML = forecast[1].day;
        document.getElementById("comments2").innerHTML = forecast[1].comment;
        document.getElementById("max_temp1").innerHTML = maxTemp1[1]+"°F";
        document.getElementById("min_temp1").innerHTML = minTemp1[1]+"°F";

        let forecastImg1 = document.getElementById('forecastIcon1');
        forecastImg1.src = forecast[1].iconURL;

        // Day 2
        
        minTemp2 = Object.values(forecast[2].min_temp);
        maxTemp2 = Object.values(forecast[2].max_temp);

        document.getElementById("daysAhead2").innerHTML = forecast[2].day;
        document.getElementById("comments2").innerHTML = forecast[2].comment;
        document.getElementById("max_temp2").innerHTML = maxTemp2[1]+"°F";
        document.getElementById("min_temp2").innerHTML = minTemp2[1]+"°F";

        let forecastImg2 = document.getElementById('forecastIcon2');
        forecastImg2.src = forecast[2].iconURL;

        // Day 3
        
        minTemp3 = Object.values(forecast[2].min_temp);
        maxTemp3 = Object.values(forecast[2].max_temp);

        document.getElementById("daysAhead3").innerHTML = forecast[3].day;
        document.getElementById("comments3").innerHTML = forecast[3].comment;
        document.getElementById("max_temp3").innerHTML = maxTemp3[1]+"°F";
        document.getElementById("min_temp3").innerHTML = minTemp3[1]+"°F";

        let forecastImg3 = document.getElementById('forecastIcon3');
        forecastImg3.src = forecast[3].iconURL;

        // Day 4

        minTemp4 = Object.values(forecast[4].min_temp);
        maxTemp4 = Object.values(forecast[4].max_temp);

        document.getElementById("daysAhead4").innerHTML = forecast[4].day;
        document.getElementById("comments4").innerHTML = forecast[4].comment;
        document.getElementById("max_temp4").innerHTML = maxTemp4[1]+"°F";
        document.getElementById("min_temp4").innerHTML = minTemp4[1]+"°F";

        let forecastImg4 = document.getElementById('forecastIcon4');
        forecastImg4.src = forecast[4].iconURL;
        
        // Day 5
        minTemp5 = Object.values(forecast[5].min_temp);
        maxTemp5 = Object.values(forecast[5].max_temp);

        document.getElementById("daysAhead5").innerHTML = forecast[5].day;
        document.getElementById("comments5").innerHTML = forecast[5].comment;
        document.getElementById("max_temp5").innerHTML = maxTemp5[1]+"°F";
        document.getElementById("min_temp5").innerHTML = minTemp5[1]+"°F";

        let forecastImg5 = document.getElementById('forecastIcon5');
        forecastImg5.src = forecast[5].iconURL;
        
        // Day 6

        minTemp6 = Object.values(forecast[6].min_temp);
        maxTemp6 = Object.values(forecast[6].max_temp);

        document.getElementById("daysAhead6").innerHTML = forecast[6].day;
        document.getElementById("comments6").innerHTML = forecast[6].comment;
        document.getElementById("max_temp6").innerHTML = maxTemp6[1]+"°F";
        document.getElementById("min_temp6").innerHTML = minTemp6[1]+"°F";

        let forecastImg6 = document.getElementById('forecastIcon6');
        forecastImg6.src = forecast[6].iconURL;
        
        // Day 7

        minTemp7 = Object.values(forecast[7].min_temp);
        maxTemp7 = Object.values(forecast[7].max_temp);

        document.getElementById("daysAhead7").innerHTML = forecast[7].day;
        document.getElementById("comments7").innerHTML = forecast[7].comment;
        document.getElementById("max_temp7").innerHTML = maxTemp7[1]+"°F";
        document.getElementById("min_temp7").innerHTML = minTemp7[1]+"°F";

        let forecastImg7 = document.getElementById('forecastIcon7');
        forecastImg7.src = forecast[7].iconURL;

    })

}

function geoLocationHandler(){
    function success(p){
        console.log(p);

        let data = p.coords;
        // console.log('Latitude ' + data.latitude);
        // console.log('Longitude ' + data.longitude);
         lat = data.latitude;
        long = data.longitude;

        //console.log('https://weatherdbi.herokuapp.com/data/weather/'+lat+','+long);

        fetch('https://weatherdbi.herokuapp.com/data/weather/'+lat+','+long)
        .then(res=>res.json())
        .then(function(json){
        
            let dataRegion = json.region;
        console.log(dataRegion);
        
        let dataArray = Object.values(json.currentConditions);
        console.log(dataArray);
        console.log(dataArray[1]);
        let temp = Object.values(dataArray[1]);
       // console.log("Temprature " + temp[0]);

        let wind = Object.values(dataArray[4]);
       // console.log("Temprature " + wind[0]);

       let boxDisplay = document.getElementById("Results");
       boxDisplay.style.visibility = "visible"; 

        document.getElementById("region").innerHTML  = "Weather for " + dataRegion;
        document.getElementById("dayHour").innerHTML = dataArray[0];
        document.getElementById("currentConditions").innerHTML  = "Current Conditions";
        document.getElementById("temp").innerHTML  = temp[1]+"°F";
        document.getElementById("percip").innerHTML  = dataArray[2];
        document.getElementById("humidity").innerHTML  = dataArray[3];
        document.getElementById("wind").innerHTML  = wind[0]+" kmph";
        document.getElementById("description").innerHTML  = dataArray[6];

        let img = document.getElementById('imageIcon');
        img.src = dataArray[5];
     
        let forecast = json.next_days;
        console.log(forecast);

        minTemp1 = Object.values(forecast[1].min_temp);
        maxTemp1 = Object.values(forecast[1].max_temp);

        document.getElementById("forecastDisplay").innerHTML  = "Forecast for the Next 7 days";
        
        document.getElementById("daysAhead1").innerHTML = forecast[1].day;
        document.getElementById("comments2").innerHTML = forecast[1].comment;
        document.getElementById("max_temp1").innerHTML = maxTemp1[1]+"°F";
        document.getElementById("min_temp1").innerHTML = minTemp1[1]+"°F";

        let forecastImg1 = document.getElementById('forecastIcon1');
        forecastImg1.src = forecast[1].iconURL;

        // Day 2
        
        minTemp2 = Object.values(forecast[2].min_temp);
        maxTemp2 = Object.values(forecast[2].max_temp);

        document.getElementById("daysAhead2").innerHTML = forecast[2].day;
        document.getElementById("comments2").innerHTML = forecast[2].comment;
        document.getElementById("max_temp2").innerHTML = maxTemp2[1]+"°F";
        document.getElementById("min_temp2").innerHTML = minTemp2[1]+"°F";

        let forecastImg2 = document.getElementById('forecastIcon2');
        forecastImg2.src = forecast[2].iconURL;

        // Day 3
        
        minTemp3 = Object.values(forecast[2].min_temp);
        maxTemp3 = Object.values(forecast[2].max_temp);

        document.getElementById("daysAhead3").innerHTML = forecast[3].day;
        document.getElementById("comments3").innerHTML = forecast[3].comment;
        document.getElementById("max_temp3").innerHTML = maxTemp3[1]+"°F";
        document.getElementById("min_temp3").innerHTML = minTemp3[1]+"°F";

        let forecastImg3 = document.getElementById('forecastIcon3');
        forecastImg3.src = forecast[3].iconURL;

        // Day 4

        minTemp4 = Object.values(forecast[4].min_temp);
        maxTemp4 = Object.values(forecast[4].max_temp);

        document.getElementById("daysAhead4").innerHTML = forecast[4].day;
        document.getElementById("comments4").innerHTML = forecast[4].comment;
        document.getElementById("max_temp4").innerHTML = maxTemp4[1]+"°F";
        document.getElementById("min_temp4").innerHTML = minTemp4[1]+"°F";

        let forecastImg4 = document.getElementById('forecastIcon4');
        forecastImg4.src = forecast[4].iconURL;
        
        // Day 5
        minTemp5 = Object.values(forecast[5].min_temp);
        maxTemp5 = Object.values(forecast[5].max_temp);

        document.getElementById("daysAhead5").innerHTML = forecast[5].day;
        document.getElementById("comments5").innerHTML = forecast[5].comment;
        document.getElementById("max_temp5").innerHTML = maxTemp5[1]+"°F";
        document.getElementById("min_temp5").innerHTML = minTemp5[1]+"°F";

        let forecastImg5 = document.getElementById('forecastIcon5');
        forecastImg5.src = forecast[5].iconURL;
        
        // Day 6

        minTemp6 = Object.values(forecast[6].min_temp);
        maxTemp6 = Object.values(forecast[6].max_temp);

        document.getElementById("daysAhead6").innerHTML = forecast[6].day;
        document.getElementById("comments6").innerHTML = forecast[6].comment;
        document.getElementById("max_temp6").innerHTML = maxTemp6[1]+"°F";
        document.getElementById("min_temp6").innerHTML = minTemp6[1]+"°F";

        let forecastImg6 = document.getElementById('forecastIcon6');
        forecastImg6.src = forecast[6].iconURL;
        
        // Day 7

        minTemp7 = Object.values(forecast[7].min_temp);
        maxTemp7 = Object.values(forecast[7].max_temp);

        document.getElementById("daysAhead7").innerHTML = forecast[7].day;
        document.getElementById("comments7").innerHTML = forecast[7].comment;
        document.getElementById("max_temp7").innerHTML = maxTemp7[1]+"°F";
        document.getElementById("min_temp7").innerHTML = minTemp7[1]+"°F";

        let forecastImg7 = document.getElementById('forecastIcon7');
        forecastImg7.src = forecast[7].iconURL;

    })
    }

    function error(e){
        console.log(e);
    }

    navigator.geolocation.getCurrentPosition(success,error);
}
