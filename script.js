const burgers = document.getElementsByClassName('header__burger--icon')
const headerContainer = document.getElementsByClassName('header-container')
const navbars=document.getElementsByClassName('navbar')

for(const burger of burgers){
    burger.addEventListener('click', ()=>{
        for(const header of headerContainer){
            header.classList.toggle('active')
        }
    })
}


for(const burger of burgers){
    burger.addEventListener('click', ()=>{
        for(const navbar of navbars){
            navbar.classList.toggle('active-navbar')
        }
    })
}


