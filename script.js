const hourCount = document.querySelector('#hour');
const minCount = document.querySelector('#min');
const secondCount = document.querySelector('#second');

function setTime() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    secondCount.textContent = seconds;
    if (secondCount.textContent <= 9) {
        secondCount.textContent = "0" + seconds;
    }

    const mins = now.getMinutes();
    minCount.textContent = mins;
    if (minCount.textContent <= 9) {
        minCount.textContent = "0" + mins;
    }

    const hours = now.getHours();
    hourCount.textContent = hours;
    if (hourCount.textContent <= 9) {
        hourCount.textContent = "0" + hours;
    }

}

setInterval(setTime, 1000)