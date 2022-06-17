const burgers = document.getElementsByClassName('header__burger--icon')
const headerContainer = document.getElementsByClassName('header-container')
const navbars=document.getElementsByClassName('navbar')
const listContainer=document.getElementById('list-container')

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


fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json.map(result =>  listContainer.innerHTML+=
    `
        <div class="list-block">
          <span class="block">block ${result.id}</span>
          <h2 key="${result.id}" class="title">${result.title}</h2>
          <p class="body">${result.body}</p>
        </div>
    `
    )))