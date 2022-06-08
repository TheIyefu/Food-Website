const toggleButton = document.querySelector('.toggle-button');
const navMenu = document.querySelector('.navmenu');
const container = document.querySelector('.container');
const button = document.getElementById('load');
const modal = document.getElementById('modal')
const modalTitle = document.querySelector('.title');
const modalBody = document.querySelector('.modal-body')
const modalImage = document.getElementById('modal-image')
const overlay = document.getElementById('overlay')
const closeBtn = document.querySelector('.close-btn')
toggleButton.addEventListener('click', ()=>{
    navMenu.classList.toggle('active');
})

function getRecipes(){
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(response => {
        return response.json();
    })
    .then(responsejson =>{
        return responsejson.meals;
    })
    .then(meals =>{
        for(let i = 0; i<meals.length; i++){
            var recipediv = document.createElement('div');
            recipediv.className = 'recipe-div'
            var image = document.createElement('img')
            var name = document.createElement('h2')
            var text = document.createTextNode(meals[i].strMeal)
            image.src = meals[i].strMealThumb
            recipediv.appendChild(image)
            name.appendChild(text)
            recipediv.appendChild(name)
            container.appendChild(recipediv)
            recipediv.addEventListener('click', displayModel)
        }
    })
}
function displayModel(e){
    if(e.target.className == 'recipe-div'){
        div = e.target
    }else{
        div = e.target.parentElement
    }
    modalTitle.textContent = div.textContent;
    if (div.childNodes.length == 2){
        console.log(div.childNodes[0].src)
        modalImage.src = div.childNodes[0].src
    }
    overlay.style.display = 'initial';
    modal.style.display = 'initial';
}
function hideModal(){
    overlay.style.display = 'none';
    modal.style.display = 'none';
    console.log('yes')
}
getRecipes()
button.addEventListener('click', getRecipes);
closeBtn.addEventListener('click', hideModal);
