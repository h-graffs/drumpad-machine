//* plays audio on mouse press //*

function playQ() {
  document.getElementById("Q").play();
  document.getElementById("display").innerHTML = "Heater1";
}

function playW() {
  document.getElementById("W").play();
  document.getElementById("display").innerHTML = "Heater2";
}

function playE() {
  document.getElementById("E").play();
  document.getElementById("display").innerHTML = "Heater3";
}

function playA() {
  document.getElementById("A").play();
  document.getElementById("display").innerHTML = "Heater4";
}

function playS() {
  document.getElementById("S").play();
  document.getElementById("display").innerHTML = "Heater6";
}

function playD() {
  document.getElementById("D").play();
  document.getElementById("display").innerHTML = "DcsOh";
}

function playZ() {
  document.getElementById("Z").play();
  document.getElementById("display").innerHTML = "KicknHat";
}

function playX() {
  document.getElementById("X").play();
  document.getElementById("display").innerHTML = "Kick1";
}

function playC() {
  document.getElementById("C").play();
  document.getElementById("display").innerHTML = "CevH2";
}

//*plays audio on key trigger *//

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 81) {
    document.getElementById("Q").play();
    document.getElementById("display").innerHTML = "Heater1";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 87) {
    document.getElementById("W").play();
    document.getElementById("display").innerHTML = "Heater2";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 69) {
    document.getElementById("E").play();
    document.getElementById("display").innerHTML = "Heater3";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 65) {
    document.getElementById("A").play();
    document.getElementById("display").innerHTML = "Heater4";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 83) {
    document.getElementById("S").play();
    document.getElementById("display").innerHTML = "Heater6";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 68) {
    document.getElementById("D").play();
    document.getElementById("display").innerHTML = "DcsOh";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 90) {
    document.getElementById("Z").play();
    document.getElementById("display").innerHTML = "KicknHat";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 88) {
    document.getElementById("X").play();
    document.getElementById("display").innerHTML = "Kick1";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 67) {
    document.getElementById("C").play();
    document.getElementById("display").innerHTML = "CevH2";
  }
});
