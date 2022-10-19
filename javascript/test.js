function showLogin() {
  document.querySelector(".popup").classList.add("active");
  document.querySelector(".cortina").classList.add("curtainActive");
}

function hideLogin() {
  document.querySelector(".popup").classList.remove("active");
  document.querySelector(".cortina").classList.remove("curtainActive");
}

function clearBox() {
  document.getElementById('txtarea').value='';
}
