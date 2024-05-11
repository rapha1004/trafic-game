let startBtn = document.getElementById('start');
let carCount = 0;
let intervalId; 
let spawnLocations = [1, 2, 3, 4]

startBtn.addEventListener('click', () => {
    startBtn.style.visibility = "hidden";
    carCount = 0;
    genRndCar();
});

function genRndCar() {
    intervalId = setInterval(() => {
        document.querySelector('h3').innerText = carCount
        if (carCount >= 4) {
            clearInterval(intervalId); // Arrête la génération de voitures lorsque 20 sont atteintes
            return;
        }
        let car = document.createElement('div');
        car.classList.add('car');
        car.style.width = "70px";
        car.style.height = "40px";
        car.style.position = "absolute"
        var colorList = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
        var randomIndex = Math.floor(Math.random() * colorList.length)
        var randomColor = colorList[randomIndex]
        car.style.background = randomColor
        let spawnIndex = Math.floor(Math.random() * spawnLocations.length); // Choix aléatoire d'un emplacement de spawn disponible
        const spawn = spawnLocations[spawnIndex];
        spawnLocations.splice(spawnIndex, 1);
        if (spawn === 1) {
            car.style.left = "600px"
            car.style.top = "560px"
            car.classList.add('1')
            car.classList.add('O-E')
        }else if (spawn === 2) {
            car.style.transform = "rotate(90deg)";
            car.style.left = "1050px"
            car.style.top = "70%"
            car.classList.add('2')
            car.classList.add('N-S')
        }else if (spawn === 3) {
            car.style.left = "65%"
            car.style.top = "415px"
            car.classList.add('3')
            car.classList.add('O-E')
        }else if (spawn === 4) {
                car.style.transform = "rotate(90deg)";
                car.style.left = "750px"
                car.style.top = "10%"
                car.classList.add('4')
                car.classList.add('N-S')
        }
        
        car.addEventListener('click', (event) => {
            let currentCar = event.target
            
            if(currentCar.classList.contains('moov')){
                currentCar.style.transition = "0.2s"
                currentCar.classList.remove('moov')
            }else{
                currentCar.style.transition = "7s ease"
                currentCar.classList.add('moov')
                if (currentCar.classList.contains('1')){
                    var moov = window.innerWidth + 200;
                    currentCar.style.left = moov + "px";
                }else if(currentCar.classList.contains('2')){
                    var moov = window.innerHeight + 200;
                    currentCar.style.top = "-" + moov + "px";
                }else if(currentCar.classList.contains('3')){
                    var moov = window.innerWidth + 200;
                    currentCar.style.left = "-" + moov + "px";
                }else{
                    var moov = window.innerHeight + 200;
                    currentCar.style.top = moov + "px";  
                }
            }
            
        });
        document.body.appendChild(car);
        carCount++; 
    }, 200);
}
setInterval(() => {
    delCar()
    document.querySelector('h3').innerText = carCount
}, 100);

function delCar() {
    let cars = document.querySelectorAll('.car');
    cars.forEach(car => {
        var rect = car.getBoundingClientRect();
        if (rect.top >= innerHeight || rect.bottom <= 0 || rect.left >= innerWidth || rect.right <= 0) {
            car.remove();
            carCount--
        }
    });
}
