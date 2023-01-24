// fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(function(data){
//     return data.json();
// }).then(function(data){
//     console.log(data);
// }) //потребление fetch через цепочку then
//запускаем промис внутри функции и получаем результат его работы 
// const usdTextBox = document.querySelector('.main__usd-value');
// const eurTextBox = document.querySelector('.main__eur-value');
// let USD = 0;
// let EUR = 0;
// async function getData(){
//     const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
//     const response = await fetch(url);
//     const data = await response.json();
//     USD = data.Valute.USD.Value.toFixed(2);//оставляет 2 значения после запятой 
//     EUR = data.Valute.EUR.Value.toFixed(2);
//     console.log(USD);
//     console.log(EUR);
//     usdTextBox.innerText = USD;
//     eurTextBox.innerText = EUR;
// }
// getData();
const usdBox = document.querySelector('.main__usd-value');
const eurBox = document.querySelector('.main__eur-value');

async function getData(){
    try{
        const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
        const response = await fetch(url);
        const data = await response.json();
        const usdValue = data.Valute.USD.Value.toFixed(2);
        const eurValue = data.Valute.EUR.Value.toFixed(2);
        // outData();
        usdBox.innerText = usdValue;
        eurBox.innerText = eurValue;
    }
    catch{
        console.log('eror');
    }

}
function outData(){
    usdBox.innerText = usdValue;
    eurBox.innerText = eurValue;
}
getData();
