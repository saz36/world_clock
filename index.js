function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = document.querySelector(".date");
    let londonTimeElement = document.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
  let hawaiiElement = document.querySelector("#hawaii");
  if (hawaiiElement) {
    let hawaiiDateElement = document.querySelector("#hawaii .date");
    let hawaiiTimeElement = document.querySelector("#hawaii .time");
    let hawaiiTime = moment().tz("pacific/honolulu");

    hawaiiDateElement.innerHTML = hawaiiTime.format("MMMM Do YYYY");
    hawaiiTimeElement.innerHTML = hawaiiTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = document.querySelector("#paris .date");
    let parisTimeElement = document.querySelector("#paris .time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split`/`[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city">
          
  <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${cityTime.format("A")}</small>
          </div>
        
        </div>
        <a href="/">All Cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
