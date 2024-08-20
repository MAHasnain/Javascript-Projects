const leftButton = document.querySelector(".btn1");
const rightButton = document.querySelector(".btn2");
const colorCodeInp = document.querySelector(".copyInp");


const colorGen = () => {
    let color = "#";
    let hexColorCode = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
        color = color + hexColorCode[Math.floor(Math.random() * 16)]
    }
    // console.log(`color : ${color}`)
    return color;
}

let rgb1 = `#fff`
const handleBtnLeft = () => {
    rgb1 = colorGen()
    leftButton.textContent = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    colorCodeInp.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    // console.log(`rgb1: ${rgb1}`)
}

let rgb2 = `#000`
const handleBtnRight = () => {
    rgb2 = colorGen()
    rightButton.textContent = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    // console.log(rgb2);
    colorCodeInp.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    // console.log(`rgb2: ${rgb2}`)
}

const copyText = () => {
    navigator.clipboard.writeText(colorCodeInp.innerHTML);
    alert(`Your Gradient Codes ${rgb1} and ${rgb2} Copied!`);
}

leftButton.addEventListener('click', handleBtnLeft);
rightButton.addEventListener('click', handleBtnRight);
colorCodeInp.addEventListener('click', copyText)

