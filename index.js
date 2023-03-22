const menu = document.querySelector(".menu")
const menuItem = document.querySelectorAll(".menu-burger")
const navLinks = document.querySelector(".nav-links")

menu.addEventListener("click", (event) =>{
    navLinks.classList.toggle("active")
     menuItem.forEach(item => item.classList.toggle("active"))
})