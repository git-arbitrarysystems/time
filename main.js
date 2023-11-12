function getCurrentTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const milliseconds = currentTime.getMilliseconds();

  // Calculate the total time in seconds
  const s = (hours * 3600) + (minutes * 60) + seconds + (milliseconds / 1000);

  // Convert to kiloseconds
  const ks =(s * 0.001)
  const p = s / (36*24)

  return {s, ks, p, t:currentTime.toTimeString()};
}

function updateHtml() {
  const kse = document.getElementById("kiloseconds")
  const pe = document.getElementById("percent")
 const te = document.getElementById("time")
 
  const {s,ks,p, t} = getCurrentTime()
  
  
  kse.textContent = `${ks.toFixed(4)} kS`;
  pe.textContent = `${p.toFixed(4)} %`
  te.textContent = t
}


window.addEventListener("load", () => {
  updateHtml()
  setInterval(updateHtml, 100);
})