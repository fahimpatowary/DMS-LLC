window.addEventListener('scroll', () => {
    let navBar = document.getElementById('nav-bar')

    if (window.innerWidth > 1024) {

        if (window.scrollY > 0) {
            navBar.classList.add("mystyle");
        }else {
            navBar.classList.remove("mystyle");
        }

    }

})