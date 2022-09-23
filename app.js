// body   
let body = document.body;
// input  
let input = document.querySelector('#input');   
// API URL
const API = ` https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    
fetch(API)
.then(function(response){
    return response.json();  
})
.then(function(data){
 displayCoins(data);
    
       input.addEventListener('keyup',function(){
       let inputValue = input.value;
       let filterCurrency = data.filter(function(data){
           return data.name.toLowerCase().includes(inputValue);
       })
       displayCoins(filterCurrency);
   }) 
}) 
// display coins
function displayCoins (coins) {
    let currencys = document.querySelector('#curnnceys');
    let list=""; 
    for (let i = 0; i < coins.length; i++) {
        list += `<div class="container border border-3 mb-2 border-dark  d-flex justify-content-evenly align-items-end ">
        <img class="col-2" src="${coins[i].image}" alt="" style="width:40px">
        <p class="col-2 text-black" >${coins[i].name}</p>
        <p class="col-2 text-black" >${coins[i].symbol}</p>
        <p class="col-2 text-black" >${coins[i].current_price}</p>
        <p class="col-2 text-black" >${coins[i].total_volume}</p>
        <p class="col-1 text-black" >${coins[i].price_change_percentage_24h}</p>
        <p class="col-1 text-black" >${coins[i].market_cap}</p>
    </div>`  
    }
    currencys.innerHTML = list;
}    