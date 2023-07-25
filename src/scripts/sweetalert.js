const Swal = require('sweetalert2')
const formInputName = document.getElementById("inputName");
const navItemConfirmPresence = document.getElementById("navItemConfirmPresence")
const btnConfirmPresence = document.getElementById("btn-confirm")
const btnCancel = document.getElementById("btn-cancel")
const form = document.getElementById("confirm-presence");

function confirmPresence() {
  Swal.fire({
    icon: 'success',
    title: `See you there!`,
    showConfirmButton: false,
    timer: 2000
  })
}

navItemConfirmPresence.onclick = () => {
  form.style.display = "flex";
  form.style.visibility = "visible";
}

btnCancel.onclick = (event) => {
  event.preventDefault()
  form.style.display = "none";
  form.style.visibility = "hidden";
  formInputName.value = ""
}

btnConfirmPresence.onclick = (event) => {
  event.preventDefault()
  if (formInputName.value === "") {
    alert("please fill in your name")
  } else {
    confirmPresence()
    form.style.display = "none";
    form.style.visibility = "hidden";
    formInputName.value = ""
  }
}