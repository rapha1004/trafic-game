let startBtn = document.getElementById('start');
let carCount = 0;
let intervalId; 


startBtn.addEventListener('click', () => {
    startBtn.style.visibility = "hidden";
    carCount = 0;
    genRndCar();
});

function genRndCar() {
    intervalId = setInterval(() => {
        document.querySelector('h3').innerText = carCount
        if (carCount >= 8) {
            clearInterval(intervalId); // Arrête la génération de voitures lorsque 20 sont atteintes
            return;
        }
        let car = document.createElement('div');
        car.classList.add('car');
        car.style.width = "50px";
        car.style.height = "20px";
        car.style.margin = "30px";
        car.style.position = "absolute"
        rotate = Math.round(Math.random());
        //car.style.transform = "rotate(90deg)";
        const spawn = Math.floor(Math.random() * 8);
        if (spawn == 1) {
            car.style.left = "10%"
            car.style.top = "30%"
        }else if (spawn == 2) {
            car.style.left = "10%"
            car.style.top = "60%"
        }else if (spawn == 3) {
            car.style.left = "30%"
            car.style.top = "90%"
        }
        var colorList = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
        var randomIndex = Math.floor(Math.random() * colorList.length)
        var randomColor = colorList[randomIndex]
        car.style.background = randomColor
        car.addEventListener('click', (event) => {
            event.target.remove()
            carCount--; 
            document.querySelector('h3').innerText = carCount
        });
        document.body.appendChild(car);
        carCount++; 
    }, 200);
}
