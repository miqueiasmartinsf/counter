//buttons 
let increaseButton = document.getElementById('increase');
let resetButton = document.getElementById('reset');
let decreaseButton = document.getElementById('decrease');


let spanValue = document.getElementById('value');

let spanValueVar = 0;

let newValue = 0;

increaseButton.addEventListener("click",function(){  
    newValue = spanValueVar + 1;
    spanValue.innerText = newValue;
    if(spanValueVar < 0){
        spanValue.style.color = 'red';
    }else{
        spanValue.style.color = 'green';
    }
    return spanValueVar++
});
decreaseButton.addEventListener("click", function(){
    newValue = spanValueVar - 1;
    spanValue.innerText = newValue;
    spanValueVar = spanValueVar - 1; 
    if(spanValueVar < 0){
        spanValue.style.color = 'red';
    }else{
        spanValue.style.color = 'green';
    }
    return spanValueVar
})

resetButton.addEventListener("click", function(){
    spanValue.innerText = '0';
    spanValueVar = 0;
    spanValue.style.color = 'green';
    return spanValueVar;
})