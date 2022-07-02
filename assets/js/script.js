const userInput = document.querySelector('#user')
const passwordInput = document.querySelector('#password')
const loginBtn = document.querySelector('button')


function handleChange() {
  if (userInput.value && passwordInput.value.length >= 8) {
    loginBtn.classList.remove('blocked')
    loginBtn.disabled = false
  } else {
    loginBtn.classList.add('blocked')
  }
}

userInput.addEventListener('input', handleChange)
passwordInput.addEventListener('input', handleChange)