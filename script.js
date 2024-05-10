let startBtn = document.getElementById('start');
let carCount = 0;
let intervalId; 
let spawnLocations = [1, 2, 3, 4, 5, 6, 7, 8]

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
        car.style.width = "70px";
        car.style.height = "40px";
        car.style.position = "absolute"
        //car.style.transform = "rotate(90deg)";
        let spawnIndex = Math.floor(Math.random() * spawnLocations.length); // Choix aléatoire d'un emplacement de spawn disponible
        const spawn = spawnLocations[spawnIndex];
        spawnLocations.splice(spawnIndex, 1);
        if (spawn === 1) {
            car.style.left = "50px"
            car.style.top = "415px"
            car.classList.add('1')
        }else if (spawn === 2) {
            car.style.left = "50px"
            car.style.top = "560px"
            car.classList.add('2')
        }else if (spawn === 3) {
            car.style.transform = "rotate(90deg)";
            car.style.left = "750px"
            car.style.top = "90%"
            car.classList.add('3')
        }else if (spawn === 4) {
            car.style.transform = "rotate(90deg)";
            car.style.left = "1050px"
            car.style.top = "90%"
            car.classList.add('4')
        }else if (spawn === 5) {
            car.style.left = "90%"
            car.style.top = "415px"
            car.classList.add('5')
        }else if (spawn === 6) {
            car.style.left = "90%"
            car.style.top = "560px"
            car.classList.add('6')
        }else if (spawn === 7) {
            car.style.transform = "rotate(90deg)";
            car.style.left = "750px"
            car.style.top = "10%"
            car.classList.add('7')
        }else if (spawn === 8) {
                car.style.transform = "rotate(90deg)";
                car.style.left = "1050px"
                car.style.top = "10%"
                car.classList.add('8')
        }
        var colorList = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
        var randomIndex = Math.floor(Math.random() * colorList.length)
        var randomColor = colorList[randomIndex]
        car.style.background = randomColor
        car.addEventListener('click', (event) => {
            let currentCar = event.target
            currentCar.classList
            if (currentCar.classList.contains('1') || currentCar.classList.contains('2')){
                var carPos = currentCar.getBoundingClientRect();
                var randomX = window.innerWidth + 200;
                currentCar.style.left = randomX + "px";
            }else if(currentCar.classList.contains('3') || currentCar.classList.contains('4')){
                var carPos = currentCar.getBoundingClientRect();
                var randomY = window.innerHeight + 200;
                currentCar.style.top = "-" + randomY + "px";
            }else if(currentCar.classList.contains('5') || currentCar.classList.contains('6')){
                var carPos = currentCar.getBoundingClientRect();
                var randomX = window.innerWidth + 200;
                currentCar.style.left = "-" + randomX + "px";
            }else{
                var carPos = car.getBoundingClientRect();
                var randomY = window.innerHeight + 200;
                currentCar.style.top = randomY + "px";  
            }
            rectangleBleu.style.top = randomY + "px";
            document.querySelector('h3').innerText = carCount
        });
        document.body.appendChild(car);
        carCount++; 
    }, 200);
}
setInterval(() => {
    delCar()
}, 200);

function delCar(event) {
    if (car.style.top >= innerHeight || car.style.top >= innerHeight - innerHeight) {
        event.target.remove()
    }else if(car.style.left >= innerWidth || car.style.left >= innerWidth - innerWidth){
        event.target.remove()
    }
}