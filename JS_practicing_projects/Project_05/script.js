// const API_KEY = `eb655b5123d823606a26e04e06e3b7f0`;
// const URL = ``




// const searchInp = document.getElementsByClassName('search-inp');

// // const searchForm = document.querySelector('.search-form');
// const submitBtn = document.querySelector('.submit-btn');


// const weather = document.querySelector('.weather');

// const API_key = `b7b670bd4fa6712f27e052b420479cf1`;

// const getWeather = async (city) => {
//     const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
//     const Img_URL = `https://openweathermap.org/img/wn/10d@2x.png`;

//     const res = await fetch(URL)
//     const data = await res.json()
//     console.log(data);
// }


// submitBtn.addEventListener('click', (e) => {
//     getWeather(searchInp.value);
//     e.preventDefault();
// });


// const weather = document.querySelector('.weather');
// const h = document.querySelector('.h1');

// h.innerHTML = "30 C";



// // weather.appendChild(h);

// weather.append(h);






function makeBubble() {
    let clutter = " ";
    for (let i = 1; i < 436; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector('.pbtm').innerHTML = clutter;

};


let timer = 60;
function runTimer() {
    setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timer').textContent = timer;
        }
    }, 1000)
}

runTimer();
makeBubble();