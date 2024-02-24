function openNav() {
  document.getElementById("sidebar").style.width = "200px";
  document.getElementById("main").style.marginLeft = "220px";
  document.getElementById("openBtn").style.display = "none";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("openBtn").style.display = "block";
}

function goToCalculator() {
  const url = "http://localhost:8080";
  window.location.href = url;
}

function goToInfo() {
  const url = "http://localhost:8080";
  window.location.href = url + "/info";
}

function goToHistory() {
  const url = "http://localhost:8080";
  window.location.href = url + "/history";
}
