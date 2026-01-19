//const buttons= document.querySelectorAll('button');
const result = document.querySelector('.result');
/*buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        e.preventDefault();
        if(e.target.id==="op1" || e.target.id==="op2" || e.target.id==="op3"){
            result.innerHTML='Wrong option';
        }
        else{
            result.innerHTML='Correct';
        }
    });
});*/

const form=document.querySelector('form');
form.addEventListener('submit', function(e){
    if(e.target.id==='op1' || e.target.id==='op2' e.target.id==='op3' ){
        result.innerHTML='Wrong';
    }
    else{
        result.innerHTML='Corect';
    }
});