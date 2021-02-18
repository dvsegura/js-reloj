window.addEventListener("load", function () {
    hours = document.getElementById('hours');
    minutes = document.getElementById('minutes');
    seconds = document.getElementById('seconds');
    milliseconds = document.getElementById('milliseconds');
    showClock();
});
function showClock() {
    intervalClock = setInterval(function () {
        let nowDate = new Date();
        hours.innerHTML = addZeroLeft(nowDate.getHours());
        minutes.innerHTML = addZeroLeft(nowDate.getMinutes());
        seconds.innerHTML = addZeroLeft(nowDate.getSeconds());
        milliseconds.innerHTML = roundDecimal(nowDate.getMilliseconds());
        console.log( roundDecimal(nowDate.getMilliseconds()));
    }, 10);
}
function roundDecimal(number) {
    let base = 10;
    let result;

    result = addZeroLeft(Math.trunc(number / base));
    return result;
}
function addZeroLeft(number) {
    return (number < 10) ? "0" + number : number;
}

