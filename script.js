function createCountries(countries) {
    countries.forEach((country) => {
    document.body.innerHTML += `
    <div class="country-box">
        <img id="countryFlag" src="${country.flags.svg}" alt="flag">
            <div class="content-box">
                <h2 id="countryName"> ${country.name.common}</h2>
                <p id="countryCapital"><span>Capital:</span> ${country.capital}</p>
                <p id="countryRegion"><span>Region:</span> ${country.region}</p>
                <p id="countryCode"><span>Country Code:</span> ${country.cca3}</p>
                <button id="countryWeather">Click for Weather</button>
            </div>
    </div>`;
    });   
}

var p1 = fetch("https://restcountries.com/v3.1/all")
// var p2 = fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")
// Promise.all([p1, p2])
    .then((data) => data.json())
    .then((countries) => createCountries(countries))
    // .then((countries) => console.log(countries))
    .catch((errMsg) => console.log("An error occured", errMsg))