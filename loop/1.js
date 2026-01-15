let arr= [];

function onEnterKey(){
    let number = document.querySelector('.js-input').value;
    arr.push(Number(number));
    document.querySelector('.js-input').value = '';
    console.log(arr);

}


function addFunction(){
    let sum=0;
    for(let i=0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    document.querySelector('.js-sum-print').innerHTML = `The sum of your given numbers is=${sum}`

}