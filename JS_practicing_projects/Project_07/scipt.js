const inpSlider = document.getElementById("inpSlider");
const sliderVal = document.getElementById("sliderVal");
const pswdInp = document.getElementById("pswdInp");
const lowerCase = document.getElementsByClassName("lowercase");
const upperCase = document.getElementsByClassName("uppercase");
const numbers = document.getElementsByClassName("Numbers");
const symbols = document.getElementsByClassName("symbol");
const genButton = document.getElementById("genBtn");

const allNumbers = "0123456789";
const allSymbols = "~!@#$%^&*()_+";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";

sliderVal.textContent = inpSlider.value;
inpSlider.addEventListener('input', function () {
    sliderVal.textContent = inpSlider.value
});




genButton.addEventListener("click", function () {
    pswdInp.value = generatePassword();
    console.log(pswdInp.value)
})

function generatePassword() {
    let genPassword = "";

    

    genPassword = upperChars.charAt(Math.floor(Math.random() * upperChars.length))
    return genPassword;
}


