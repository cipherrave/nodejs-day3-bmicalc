const url = "http://localhost:8080";

function goToCalculator() {
  window.location.href = url;
}

function goToInfo() {
  window.location.href = url + "/info";
}

function toggleSideBar() {
  if (document.getElementById("toggleSideBar").value == "CLOSED") {
    document.getElementById("toggleSideBar").value = "OPEN";
    document.getElementById("sidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "165px";
    document.getElementById("titleBar").style.paddingLeft = "235px";
    document.getElementById("madeBy").style.display = "block";
  } else {
    document.getElementById("toggleSideBar").value = "CLOSED";
    document.getElementById("sidebar").style.width = "35px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("titleBar").style.paddingLeft = "70px";
    document.getElementById("madeBy").style.display = "none";
  }
}

function logout() {
  goToCalculator();
  document.getElementById("cardLogin").style.display = "flex";
  document.getElementById("cardCalc").style.display = "none";
  document.getElementById("cardHistory").style.display = "none";
  document.getElementById("cardResult").style.display = "none";
  document.getElementById("userName").innerText = "";
  document.getElementById("logoutX").style.display = "none";
}
