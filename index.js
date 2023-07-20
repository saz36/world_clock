function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = document.querySelector(".date");
  let londonTimeElement = document.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  let hawaiiElement = document.querySelector("#hawaii");
  let hawaiiDateElement = document.querySelector("#hawaii .date");
  let hawaiiTimeElement = document.querySelector("#hawaii .time");
  let hawaiiTime = moment().tz("pacific/honolulu");

  hawaiiDateElement.innerHTML = hawaiiTime.format("MMMM Do YYYY");
  hawaiiTimeElement.innerHTML = hawaiiTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = document.querySelector("#paris .date");
  let parisTimeElement = document.querySelector("#paris .time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss[<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
