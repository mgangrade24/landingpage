particlesJS.load("particles-js", "particles.json");
let barContainer = document.getElementById("bar-container");
let bars = document.getElementById("bars");
const MQ = window.matchMedia("(max-width: 768px)");
console.log(MQ);
MQ.addEventListener("change", (event) => {
  console.log(event);
  

  if (event.matches) {
    menu.style.display = "none";
    barContainer.style.display = "block";
  } else {
    menu.style.display = "block";
    barContainer.style.display = "none";
  }
});
barContainer.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
    bars.classList.remove("fa-bars");
    bars.classList.add("fa-times");
  } else {
    menu.style.display = "none";
    bars.classList.remove("fa-times");
    bars.classList.add("fa-bars");
  }
});