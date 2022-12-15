const targetDiv = document.getElementById("location");
const link = document.getElementById("toggle");
link.onclick = function () {
  if (targetDiv.style.display !== "block") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
};
