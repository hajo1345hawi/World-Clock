function updateTime() {
  let losAngelesElement = document.getElementById("los-angeles");
  let losAngeles = moment().tz("America/Los_Angeles");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  losAngelesDate.innerHTML = losAngeles.format("MMMM DD yyyy");
  losAngelesTime.innerHTML = losAngeles.format(
    "hh:mm:ss [<small>] a[</small>]"
  );
  let parisElement = document.getElementById("paris");
  let paris = moment().tz("Europe/paris");
  let parisDate = parisElement.querySelector(".date");
  let parisTime = parisElement.querySelector(".time");
  parisDate.innerHTML = paris.format("MMMM DD yyyy");
  parisTime.innerHTML = paris.format("hh:mm:ss [<small>] a[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
