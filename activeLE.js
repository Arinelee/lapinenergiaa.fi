let header = document.querySelector("li");
let links = header.getElementsByClassName("btn");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
