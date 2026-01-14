const buttons = document.querySelectorAll('.button');
const body=document.querySelector('body');
console.log(buttons);
buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function (e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='button1'){
            body.style.backgroundColor='rgb(255, 58, 130)';
        }
        if(e.target.id==='button2'){
            body.style.backgroundColor='rgb(247, 134, 175)';
        }
        if(e.target.id==='button3'){
            body.style.backgroundColor='rgb(186, 160, 170)';
        }
        if(e.target.id==='button4'){
            body.style.backgroundColor='rgb(92, 91, 92)';
        }
    });
});