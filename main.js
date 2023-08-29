function getCurrentTimeOfDayInKiloseconds() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const milliseconds = currentTime.getMilliseconds();

  // Calculate the total time in seconds
  const totalSeconds = (hours * 3600) + (minutes * 60) + seconds + (milliseconds / 1000);

  // Convert to kiloseconds
  const kiloseconds = (totalSeconds * 0.001).toFixed(4);

  return kiloseconds;
}

function updateKiloseconds() {
  const kilosecondsElement = document.getElementById("kiloseconds");
  const kiloseconds = getCurrentTimeOfDayInKiloseconds();
  kilosecondsElement.textContent = `${kiloseconds} kS`;
}


window.addEventListener("load", () => {
  updateKiloseconds()
  setInterval(updateKiloseconds, 100);
})