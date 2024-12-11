function updateTime() {
  let losAngelesElement = document.getElementById("los-angeles");
  if (losAngelesElement) {
    let losAngeles = moment().tz("America/Los_Angeles");
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTime = losAngelesElement.querySelector(".time");
    losAngelesDate.innerHTML = losAngeles.format("MMMM DD yyyy");
    losAngelesTime.innerHTML = losAngeles.format(
      "hh:mm:ss [<small>] a[</small>]"
    );
  }

  parisElement = document.getElementById("paris");
  if (parisElement) {
    let paris = moment().tz("Europe/paris");
    let parisDate = parisElement.querySelector(".date");
    let parisTime = parisElement.querySelector(".time");
    parisDate.innerHTML = paris.format("MMMM DD yyyy");
    parisTime.innerHTML = paris.format("hh:mm:ss [<small>] a[</small>]");
  }
}
function changeCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone) {
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cityElement = document.getElementById("cities");
    cityElement.innerHTML = `<div class="city" >
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM DD yyyy")}</div>
            </div>
            <div class="time">${cityTime.format(
              "hh:mm:ss [<small>] a[</small>]"
            )}</div>
          </div>`;
  }
}

updateTime();
setInterval(updateTime, 1000);
let selectElement = document.querySelector("#city");
selectElement.addEventListener("change", changeCity);
