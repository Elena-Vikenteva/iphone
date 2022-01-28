const scrollFunc = () => {
    const links = document.querySelectorAll('.header-menu__item a')
    const linkCharacteristics = document.querySelector('.card-details__link-characteristics')

    const newArray = [...links, linkCharacteristics]

    newArray.forEach((element) => {
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
}
 scrollFunc()


