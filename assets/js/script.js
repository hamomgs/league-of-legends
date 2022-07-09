const inputs = document.querySelectorAll('input')
const loginBtn = document.querySelector('button')
const eyeBtn = document.querySelectorAll('.fa-light')
let [userInput, passwordInput] = inputs

function handleChange() {
  if (userInput.value && passwordInput.value.length >= 8) {
    loginBtn.classList.remove('blocked')
    loginBtn.disabled = false
  } else {
    loginBtn.classList.add('blocked')
  }
}

function showPassword() {
  let [eye, slashEye] = eyeBtn
  
  passwordInput.type == 'password' ? 
  passwordInput.type = 'text' :
  passwordInput.type = 'password'

  eye.classList.toggle('invisible')
  slashEye.classList.toggle('invisible')
}

inputs.forEach(input => {
  input.addEventListener('input', handleChange)
})

eyeBtn.forEach(eye => {
  eye.addEventListener('click', showPassword)
})