alert("ensure to press a key after starting")
const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

startBtn.addEventListener("click", () => {
    console.log("Start button clicked");
    document.addEventListener("keydown", handledown);
    document.addEventListener("keyup", handleup);
    startBtn.disabled= true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
    console.log("Stop button clicked");
    document.removeEventListener("keydown", handledown);
    document.removeEventListener("keyup", handleup);
    logDiv.textContent = "";
    stateDiv.textContent = "";
    stopBtn.disabled= true;
    startBtn.disabled = false;
});

function handledown(e) {
    console.log(`Key pressed: ${e.key}`);
    logDiv.textContent = `Key ${e.key} pressed down`;
    stateDiv.textContent = " key is down";
}

function handleup(e) {
    console.log(`Key released: ${e.key}`);
    logDiv.textContent = `Key ${e.key} released`;
    stateDiv.textContent = " key is up";
}
