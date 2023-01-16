

const menuIcon = document.getElementById("menu-icon");
const navItemCont = document.getElementById("navItemCont");

const navToggleEffect = function () {
    navItemCont.classList.toggle("activeCont")
}

menuIcon.addEventListener("click", navToggleEffect)