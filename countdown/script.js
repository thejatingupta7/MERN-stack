
let intervalId;
let paused = false;
let totalSeconds;

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

function startTimer() {
    const minutes = parseInt(document.getElementById('minutes').value);
    const seconds = parseInt(document.getElementById('seconds').value);
    totalSeconds = minutes * 60 + seconds;
    intervalId = setInterval(updateDisplay, 1000);
}

function pauseTimer() {
    clearInterval(intervalId);
    paused = true;
}

function resetTimer() {
    clearInterval(intervalId);
    paused = false;
    totalSeconds = 0;
    document.getElementById('display').innerHTML = 'ee:ee';
}

function updateDisplay() {
    if (totalSeconds > 0) {
        totalSeconds--;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        document.getElementById('display').innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    } else {
        clearInterval(intervalId);
        document.getElementById('display').innerHTML = 'ee:ee';
    }
}

