const hourCount = document.querySelector('#hour');
const minCount = document.querySelector('#min');
const secondCount = document.querySelector('#second');

const weekdayText = document.querySelector('#weekday');
const monthText = document.querySelector('#month');
const dayText = document.querySelector('#day');
const yearText = document.querySelector('#year');

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

function setDate() {
    const now = new Date();

    const weekday = now.getDay();
    switch (weekday) {
        case 0:
            weekdayText.textContent = "Sunday ";
            break;
        case 1:
            weekdayText.textContent = "Monday ";
            break;
        case 2:
            weekdayText.textContent = "Tuesday ";
            break;
        case 3:
            weekdayText.textContent = "Wednesday ";
            break;
        case 4:
            weekdayText.textContent = "Thursday ";
            break;
        case 5:
            weekdayText.textContent = "Friday ";
            break;
        case 6:
            weekdayText.textContent = "Saturday ";
            break;
    }

    if (weekday === 0 || weekday === 6) {
        weekdayText.style.color = 'red';
    } else {
        weekdayText.style.color = "blue";
    }

    const month = now.getMonth();
    switch (month) {
        case 0:
            monthText.textContent = "January ";
            break;
        case 1:
            monthText.textContent = "Febuary ";
            break;
        case 2:
            monthText.textContent = "March ";
            break;
        case 3:
            monthText.textContent = "April ";
            break;
        case 4:
            monthText.textContent = "May ";
            break;
        case 5:
            monthText.textContent = "June ";
            break;
        case 6:
            monthText.textContent = "July ";
            break;
        case 7:
            monthText.textContent = "Augest ";
            break;
        case 8:
            monthText.textContent = "September ";
            break;
        case 9:
            monthText.textContent = "October ";
            break;
        case 10:
            monthText.textContent = "November ";
            break;
        case 11:
            monthText.textContent = "December ";
            break;
    }

    const day = now.getDate();
    dayText.textContent = day + ",";

    const year = now.getFullYear();
    yearText.textContent = year;
}

setInterval( function () {
    setDate();
    setTime();
}, 1000);

