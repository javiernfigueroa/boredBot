const BOTON = document.getElementById("btn");

BOTON.addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("activity-container").textContent = data.activity;
    });
});
