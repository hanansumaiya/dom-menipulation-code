function clickMethod() {
  let p = document.getElementById("click-method-p");
  p.innerText = "Just click function";
}
////////
document.getElementById("daelestener").addEventListener("click", function () {
  let p = document.getElementById("click-method-p");
  p.innerText = "Click using add event lestener";
});
//////////
document.getElementById("submitfield").addEventListener("click", function () {
  let inputField = document.getElementById("inputfield");
  let p = document.getElementById("click-method-p");
  p.innerText = inputField.value;
  inputField.value = "";
});
