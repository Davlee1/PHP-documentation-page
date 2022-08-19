function navList_Switch() {
  var x = document.getElementById("navlist");
  if (x.className === "navlist") {
    x.className += " responsive";
  } else {
    x.className = "navlist";
  }
}

function closenav() {
  var x = document.getElementById("navlist");
  if (x.className !== "navlist") {
    x.className = "navlist";
  }
}