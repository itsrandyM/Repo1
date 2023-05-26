const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toogle('hidden')
        mobileMenu.classList.toogle('flex')
        
    }

 hamburgerBtn.addEventListener('click', toggleMenu)
 mobileMenu.addEventListener('click', toggleMenu)

}

document.addEventListener('DOMContentLoadad,  initApp')
