/*----JAVASCRIPT--Logic To Make The Mobile NavBar--appear and disappear upon the click of the Menu Bar and Close button/icon-----*/

const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

if (bar) {                                     /*if user clicks on the BAR icon, or if it the BAR icon that is clicked upon, only then add the eventListener below*/
    bar.addEventListener('click', () => {          /*Add Event Lisetener on the BAR element -->(nav)-const!*/
        nav.classList.add("active")                 /*add a class of acive to make the NavBar appear*/

    })
}

/*---------------0R----------------*/

if (close) {                                     /*if user clicks on the CLOSE X icon, or if it the CLOSE X icon that is clicked upon, only then add the eventListener below*/
    close.addEventListener('click', () => {              /*Add Event Lisetener on the CLOSE X element -->(close)-const!*/
        nav.classList.remove("active")                 /*add a class of acive to make the NavBar appear*/

    })
}