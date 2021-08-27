document.getElementById("sec-item").addEventListener("click", function (somo) {
  console.log("li 0 selected");
  //   somo.stopPropagation();
  somo.stopImmediatePropagation();
});
document.getElementById("sec-item").addEventListener("click", function () {
  console.log("li 1 selected");
});
document.getElementById("sec-item").addEventListener("click", function () {
  console.log("li 2 selected");
});
//////
document.getElementById("un-list").addEventListener("click", function () {
  console.log("ul selected");
});
//////
document.getElementById("sec").addEventListener("click", function () {
  console.log("section selected");
});
