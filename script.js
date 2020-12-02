const getWeather = async function (city) {
    try {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2893c6b5a4200b7958e442b620f3e631&units=imperial`, {mode: "cors"})
    let responseJson = await response.json(); //get json object of the api call
    let temperature = responseJson.main.temp;
    let weatherDesc = responseJson.weather[0].description; 
    let humidity = responseJson.main.humidity;
    let wind= responseJson.wind.speed;
    console.log([temperature, weatherDesc, humidity, wind]);
    let weatherInfo = [temperature, weatherDesc, humidity, wind];
    return weatherInfo;
    }
    catch (err) {
        console.log(err);
        console.log("Error State");
        togglePopup(true);
    }
};

let button = document.getElementById("submit");
button.addEventListener("click", async ()=> {
    togglePopup(false);
    let input = document.getElementById("search").value;
    //console.log(input);
    let weatherInfo = await getWeather(input);
    console.log(weatherInfo);
    renderValues(weatherInfo, capitalizeInput(input));
});

const submitFunc = async () =>{
    togglePopup(false);
    let input = document.getElementById("search").value;
    //console.log(input);
    let weatherInfo = await getWeather(input);
    console.log(weatherInfo);
    renderValues(weatherInfo, capitalizeInput(input));
};

const renderValues = function (info, input) {
    let tempVal = document.getElementById("tempVal");
    tempVal.innerHTML=info[0];
    let descVal = document.getElementById("descVal");
    descVal.innerHTML=info[1];
    let humidityVal = document.getElementById("humidityVal");
    humidityVal.innerHTML=info[2];
    let windVal = document.getElementById("windVal");
    windVal.innerHTML=info[3];
    let title = document.getElementById("title");
    title.innerHTML=`${input} Weather`
};

const initialRender = async function (city) {
    let weatherInfo = await getWeather(city);
    console.log(weatherInfo);
    renderValues(weatherInfo, city);
};

const togglePopup = (state) => {
    let popup = document.getElementById("errorPopup");
    (state)?popup.style.display="block":popup.style.display="none";
};

const capitalizeInput = (input) => {
const words = input.split(" ");
let capitalized= words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");
console.log(capitalized);
return capitalized;
};

initialRender("Salt Lake City");
