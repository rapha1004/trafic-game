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
        // var colorList = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
        // var randomIndex = Math.floor(Math.random() * colorList.length)
        // var randomColor = "rgb(44, 172, 21)"
        // car.style.background = randomColor
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
        car.classList.add('state1')
        changeCarState(car)

        car.addEventListener('click', (event) => {
            let currentCar = event.target
            moovcar(currentCar)
        });
        document.body.appendChild(car);
        carCount++; 
    }, 200);
}
setInterval(() => {
    delCar()
    document.querySelector('h3').innerText = carCount
}, 100);

let interval1;

function moovcar(currentCar) {
    if (currentCar.classList.contains('moov')) {
        let = carSP = currentCar.classList
        // if (carSP.contains === '1') {}
        clearInterval(interval1);
        currentCar.style.transition = "none";
        let newTop = currentCar.getBoundingClientRect()
        let newLeft = currentCar.getBoundingClientRect()
        currentCar.style.left = newLeft.left
        currentCar.style.top = newTop.top
        currentCar.classList.remove('moov');
    } else {
        currentCar.style.transition = "10s ease";
        currentCar.classList.add('moov');
        if (currentCar.classList.contains('1')) {
            interval1 = setInterval(() => {
                currentCar.style.left = (parseFloat(currentCar.style.left) + 1) + "px";
            }, 1);
        } else if (currentCar.classList.contains('2')) {
            var moov = window.innerHeight + 200;
            currentCar.style.top = "-" + moov + "px";
        } else if (currentCar.classList.contains('3')) {
            var moov = window.innerWidth + 200;
            currentCar.style.left = "-" + moov + "px";
        } else {
            var moov = window.innerHeight + 200;
            currentCar.style.top = moov + "px";
        }
    }
}
function changeCarState(car) {
    car.style.background = "rgb(44, 172, 21)"
    setTimeout(() => {
        car.classList.remove('state1')
        car.classList.add('state2')
        car.style.background = 'red'
        if (car.classList.contains('state2')) {
            car.classList.remove('state1')
            car.classList.add('state2')
            car.style.background = 'orange'
            setTimeout(() => {
                car.classList.remove('state2')
                car.classList.add('state3')
                car.style.background = 'red'
                setTimeout(() => {
                   moovcar(car)
                }, 300);
            }, 3000);
        }
    }, 5000);
}

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
