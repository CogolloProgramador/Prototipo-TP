// REGISTRO
const formRegistro = document.getElementById('formRegistro');

const username = document.getElementById('nombre');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const repass = document.getElementById('repass');
const date = document.getElementById('fecha');

username.addEventListener('focusout', (e) => {

  e.preventDefault();
  console.log(username.value.length);
  let error = document.getElementById('error-nombre');

  if (username.value.length < 4) {
    username.classList.add('input-incorrecto');
    error.innerHTML = "El nombre de usuario debe contener al menos 4 caracteres.";
    error.classList.remove('invisible');
  }
  else if (username.value.length > 15) {
    username.classList.add('input-incorrecto');
    error.innerHTML = "El nombre de usuario debe contener menos de 15 caracteres.";
    error.classList.remove('invisible');
  }
  else {
    console.log('dentro del else');
    username.classList.remove('input-incorrecto');
    error.innerHTML = "";
    error.classList.add('invisible');
  }
});

email.addEventListener('focusout', (e) => {
  e.preventDefault();

  let error = document.getElementById('error-email');
  if (!String(email.value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
    email.classList.add('input-incorrecto');
    error.innerHTML = "Esta dirección de correo electrónico no parece correcta.";;
    error.classList.remove('invisible');
  }
  else {
    email.classList.remove('input-incorrecto');
    error.innerHTML = "";
    error.classList.add('invisible');
  }
});

pass.addEventListener('focusout', (e) => {
  e.preventDefault();
  let especial = /[a-zA-Z]+[(@!#\$%\^\&*\)\(+=._-]{1,}/;
  let error = document.getElementById('error-password');

  if (pass.value.length < 8) {
    pass.classList.add('input-incorrecto');
    error.innerHTML = "La contraseña debe contener al menos 8 caracteres.";
    error.classList.remove('invisible');
  }

  else if (pass.value.length > 16) {
    pass.classList.add('input-incorrecto');
    error.innerHTML = "La contraseña debe contener como máximo 16 caracteres.";
    error.classList.remove('invisible');
  }

  else if (especial.test(pass.value)) {
    pass.classList.add('input-incorrecto');
    error.innerHTML = "La contraseña debe contener al menos un caracter especial y un número.";
    error.classList.remove('invisible');
  }
  else {
    pass.classList.remove('input-incorrecto');
    error.innerHTML = "";
    error.classList.add('invisible');
  }
});

repass.addEventListener('focusout', (e) => {
  e.preventDefault();
  let error = document.getElementById('error-repass');
  if (pass.value !== repass.value) {
    repass.classList.add('input-incorrecto');
    error.innerHTML = "Las contraseñas no coinciden.";
    error.classList.remove('invisible');
  }
  else {
    repass.classList.remove('input-incorrecto');
    error.innerHTML = "";
    error.classList.add('invisible');
  }
});

fecha.addEventListener('focusout', (e) => {
  e.preventDefault();
  let error = document.getElementById('error-fecha');
  let hoy = new Date();
  let nac = new Date(fecha.value);
  let edad = hoy.getFullYear() - nac.getFullYear();

  if (edad < 18) {
    fecha.classList.add('input-incorrecto');
    error.innerHTML = "Tenes que tener al menos 18 años para poder crear una cuenta.";
    error.classList.remove('invisible');
    fecha.value = "";
  }
  else {
    fecha.classList.remove('input-incorrecto');
    error.innerHTML = "";
    error.classList.add('invisible');
  }
});
