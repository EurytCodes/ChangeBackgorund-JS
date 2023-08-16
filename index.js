const body = document.getElementById('body');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(button){
    button.addEventListener('click', (e) => {
        if(button.innerText == 'Tan'){
            body.style.backgroundColor = 'Tan';
        }
        else if(button.innerText == 'Teal'){
            body.style.backgroundColor = 'Teal';
        }
        else if(button.innerText == 'Beige'){
            body.style.backgroundColor = 'Beige';
        }
        else if(button.innerText == 'Orange'){
            body.style.backgroundColor = 'Orange';
        }
        else if(button.innerText == 'Wheat'){
            body.style.backgroundColor = 'Wheat';
        }
        else if(button.innerText == 'Tomato'){
            body.style.backgroundColor = 'Tomato';
        }
    })
})