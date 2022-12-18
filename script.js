const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

function setGradient () {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}


// These tow lines of code are substitued with "oninput= setGradient()" 
// in the html file as an attribute to <input> tag.
// it is not a recommanded way because we want to have all our javascript in one file
//color1.addEventListener("input", setGradient);
//color2.addEventListener(("input"), (setGradient);