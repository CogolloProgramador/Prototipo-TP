// LOGIN
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('loginForm');

email.addEventListener('input', (nose) => {
  if (!email.validity.typeMismatch && email.value.includes('.com')) {
    let error = document.getElementById('error-email').classList.add('invisible');
  }
});

form.addEventListener('submit', (asdf) => {
  if (!email.validity.typeMismatch && email.value.includes('.com')) {
    alert('BIENVENID@');
  }
  else {
    let error = document.getElementById('error-email').classList.remove('invisible');
    asdf.preventDefault();
  }

});

// FUNCIONES

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
