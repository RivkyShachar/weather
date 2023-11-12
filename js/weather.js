window.onload = () => {
    doRestApi();
}

const doRestApi = () => {
    const URL = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8ee633956bad6ae1965b557a94ecfcba";

    fetch(URL)
        .then(response => response.json())
        .then(data => { 
            console.log(data.main) 
            console.log(data.weather[0].description)
            return data.main;
        })
        .then(data => { 
            console.log(data.temp) ;
            console.log(data.feels_like);
            console.log(data.humidity);
        })
}