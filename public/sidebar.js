function toggleSideBar() {
  if (document.getElementById("toggleSideBar").value == "CLOSED") {
    document.getElementById("toggleSideBar").value = "OPEN";
    document.getElementById("sidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "165px";
    document.getElementById("titleBar").style.marginLeft = "165px";

    document.getElementById("madeBy").style.display = "block";
  } else {
    document.getElementById("toggleSideBar").value = "CLOSED";
    document.getElementById("sidebar").style.width = "35px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("madeBy").style.display = "none";
    document.getElementById("titleBar").style.marginLeft = "0px";
  }
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
