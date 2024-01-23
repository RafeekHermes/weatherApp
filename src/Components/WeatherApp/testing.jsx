let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value},uk&callback=test&appid=${api_key}`;
let response = await fetch(url);
let data = await response.json();
console.log(data);