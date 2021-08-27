function clickMethod() {
  let p = document.getElementById("click-method-p");
  p.innerText = "Just click methood";
}
document.getElementById("daelestener").addEventListener("click", function () {
  let p = document.getElementById("click-method-p");
  p.innerText = "Add Event Listener";
});
document.getElementById("submitfield").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  let p = document.getElementById("click-method-p");
  p.innerText = inputField.value;
  inputField.value = "";
});
// ----------------------------

let article = document.createElement("article");
article.classList.add("articleblog");
let h2 = document.createElement("h2");
h2.innerText = "Blog 3 BY JS";
let p = document.createElement("p");
p.innerText = "This is a paragraph adding by JavaScript.";
article.appendChild(h2);
article.appendChild(p);
let section = document.getElementById("blogsarticle");
section.appendChild(article);
// =============================
let articles = document.getElementsByClassName("articleblog");
for (let element of articles) {
  element.style.color = "blue";
  element.style.border = "2px solid tomato";
  element.style.borderRadius = "10px";
  element.style.padding = "10px";
  element.style.margin = "10px";
}
// ----------------------------
// ----------------------------
// ----------------------------
document.getElementById("add-item").addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerText = "Add new item";
  li.classList.add("item");
  let ul = document.getElementById("un-list");
  ul.appendChild(li);
});
document.getElementById("un-list").addEventListener("click", function (event) {
  event.target.parentNode.removeChild(event.target);
});
// ----------------------------
// ----------------------------
// ----------------------------
document.getElementById("dlt-btn").addEventListener("click", function () {
  document.getElementById("secret-heading").style.display = "none";
});
document
  .getElementById("dlt-input")
  .addEventListener("keyup", function (event) {
    if (event.target.value == "delete") {
      document.getElementById("dlt-btn").removeAttribute("disabled");
    } else {
      document.getElementById("dlt-btn").setAttribute("disabled", true);
    }
  });
