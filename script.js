 
const button$$ = document.querySelector('[data-function="btn"]');
const empty$$ = document.querySelector('[data-function="empty"]');
const ul$$ = document.querySelector('[data-function="Li"]');
const input$$ = document.querySelector('input');


button$$.addEventListener('click', (e) => {
    e.preventDefault();

    const text = input$$.value.toUpperCase();

    if(text !== ""){
        const li$$ = document.createElement('li');
        const p$$ = document.createElement('h3');
        p$$.textContent = text; 
    
        li$$.appendChild(p$$);
        li$$.appendChild(addDeleteBtn());
        ul$$.appendChild(li$$);
    
        input$$.value = "";
        empty$$.style.display = "none";
    }
     
});

function addDeleteBtn() {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'Btn-delete';

    deleteBtn.addEventListener('click', (e) =>{
        const item = e.target.parentElement;
        ul$$.removeChild(item);

        const items = document.querySelectorAll('li');
        if(items.length === 0){
            empty$$.style.display = 'block';
        }
    });
    return deleteBtn; 

}