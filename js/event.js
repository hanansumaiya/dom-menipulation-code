function bgblue() {
  document.body.style.backgroundColor = "blue";
}
function bgyellow() {
  document.body.style.backgroundColor = "yellow";
}
function bggreen() {
  document.body.style.backgroundColor = "green";
}
/////////
let arif = document.getElementById("sumaiya");
arif.onclick = bggreen;
///////
let orangebtn = document.getElementById("make-btn-orange");
orangebtn.onclick = function bgorange() {
  document.body.style.backgroundColor = "orange";
};
////////Add Event listener
let deeppinkBtn = document.getElementById("make-btndeeppink");
deeppinkBtn.addEventListener("click", bgpink);
function bgpink() {
  document.body.style.backgroundColor = "deeppink";
}
///////////////////// aitaoo use korbo
let goldenrodBtn = document.getElementById("make-btn-goldrod");
goldenrodBtn.addEventListener("click", function bggoldrod() {
  document.body.style.backgroundColor = "goldenrod";
});
///////////////////////aita basi use korbo
document
  .getElementById("make-btn-lightblue")
  .addEventListener("click", function bglightblue() {
    document.body.style.backgroundColor = "lightblue";
  });
//////////////////////////////////////////////////////////////
