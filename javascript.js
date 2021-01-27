//1st plus button
const plusBtn = document.getElementById('plus');
plusBtn.addEventListener('click', function () {
    // const currentValue = document.getElementById('currentValue').value;
    // const quantity =parseInt(currentValue) + 1;
    // document.getElementById('currentValue').value = quantity;
    // const total = quantityPlus("currentValue");
    // const cost = 1219;
    // const currentPrice = document.getElementById('currentPrice').innerText;
    // const currentPriceNumber = parseInt(currentPrice);
    // const totalPrice = total * cost;
    // document.getElementById('currentPrice').innerText = totalPrice;

    plusPrice("currentValue","currentPrice",1219);
})

// 1st minus button
const minusBtn = document.getElementById('minus');
minusBtn.addEventListener('click', function () {
    // const minusValue= document.getElementById('currentValue').value
    // const minusValueNumber = parseInt(minusValue) -1;
    // document.getElementById('currentValue').value= minusValueNumber; 
    quantityMinus("currentValue");//calling function
    
    // const cost = 1219;
    // const minusPrice = document.getElementById('currentPrice').innerText;
    // const minusPriceNumber = parseInt(minusPrice);
    // if (minusPriceNumber > 2) {
    //     const total = minusPriceNumber - cost;
    //     document.getElementById('currentPrice').innerText = total;
    // }
    const cost =1219;
    minusPrice("currentPrice", cost);

})



//2nd phone plus button
const plusBtn2 = document.getElementById('plus2');
plusBtn2.addEventListener('click', function () {
    // const total2 = quantityPlus("currentValue2");//calling function
    plusPrice("currentValue2","currentPrice2",59);
})

//2nd minus button
const minusBtn2 = document.getElementById('minus2');
minusBtn2.addEventListener('click', function () {
    quantityMinus('currentValue2');
    const cost = 59;
    minusPrice("currentPrice2", cost);
})




//this function for quantity plus
function quantityPlus(id) {
    const currentValue = document.getElementById(id).value;
    const quantity = parseInt(currentValue) + 1;
    document.getElementById(id).value = quantity;
    return quantity;
}

//this function for quantity minus
function quantityMinus(id) {
    const minusValue = document.getElementById(id).value
    const minusValueNumber = parseInt(minusValue);
    if (minusValue > 0) {
        const result = minusValueNumber - 1;
        document.getElementById(id).value = result;
    }
}

//increment price with quantity
function plusPrice(id1,id2,netPrince){
    const total = quantityPlus(id1);
    const cost = netPrince;
    const currentPrice = document.getElementById(id2).innerText;
    const currentPriceNumber = parseInt(currentPrice);
    const totalPrice = total * cost;
    document.getElementById(id2).innerText = totalPrice;
}



//reduce quantity with price
function minusPrice(id,netPrice){
    const cost = netPrice;
    const currentMinusPrice = document.getElementById(id).innerText;
    const minusPriceNumber = parseInt(currentMinusPrice);
    if (minusPriceNumber > 1) {
        const total = minusPriceNumber - cost;
        document.getElementById(id).innerText = total;
    }
}
