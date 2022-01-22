const links = document.querySelectorAll('.header-menu__item a')


links.forEach((element) => {
    element.addEventListener('click',(e) => {
        e.preventDefault()

        const id = element.getAttribute('href').substring(1)
        const section = document.getElementById(id)

        if(section){
            section.scrollIntoView({
                behavior: 'smooth',
                block: "start"
            })
        } else {
            console.log('no')
        }
    })
})