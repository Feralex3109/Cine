const btnLogOut = document.getElementById('btnLogOut')
const saveUser = localStorage.getItem('userName')
const userNameIcon = document.getElementById('userNameIcon')

const logOut = document.getElementById("logOut")
const savePassword = localStorage.getItem('userPassword')

if (saveUser !== null) {
  ingresar.classList.add("d-none")
  logOut.classList.remove("d-none")
}else {
  ingresar.classList.remove("d-none")
  logOut.classList.add("d-none")
}


btnLogOut.addEventListener("click", function(event){
  event.preventDefault()
    
    window.location.href="./index.html"
    localStorage.clear()
})

  userNameIcon.innerText = saveUser
  console.log(userNameIcon.innerText)
ingresar.addEventListener("click", function () {
  window.location.href="./index.html"
})