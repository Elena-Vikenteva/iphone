const tabs = document.querySelectorAll(".card-detail__change")
const tabsTitle = document.querySelectorAll('.card-details__title')
const tabsPrice = document.querySelectorAll('.card-details__price')
const tabsImage = document.querySelectorAll('.card__image_item')

const tabsOptions = [
    {
        name: "Graphite",
        memory: '128',
        prise: 60000,
        image: 'img/iPhone-graphite.webp'
    },
    {
        name: "Silver",
        memory: '256',
        prise: 65000,
        image: 'img/iPhone-silver.webp'
    },
    {
        name: "Sierra Blue",
        memory: '512',
        prise: 70000,
        image: 'img/iPhone-sierra_blue.webp'
    }
]

const changeContent = (index) => {
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`
tabsPrice.textContent = `${tabsOptions[index].prise}₽`

   tabsImage.setAttribute('src', 'tabsOptions[index].image')
}

const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
        tab.classList.remove('active')

        if (index === indexClickedTab){
            tab.classList.add('active')
    }
})
    changeContent(indexClickedTab)
}

tabs.forEach((tab,index) => {
    tab.addEventListener('click', () => {
        changeActiveTabs(index)
    })
})

changeContent(0)