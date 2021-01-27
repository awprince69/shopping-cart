//1st plus button
const plusBtn = document.getElementById('plus');
plusBtn.addEventListener('click', function () {
    // const currentValue = document.getElementById('currentValue').value;
    // const quantity =parseInt(currentValue) + 1;
    // document.getElementById('currentValue').value = quantity;
    const total = quantityPlus("currentValue");
    const cost = 1219;
    const currentPrice = document.getElementById('currentPrice').innerText;
    const currentPriceNumber = parseInt(currentPrice);
    const totalPrice = currentPriceNumber + cost;


    const phoneCase = document.getElementById('currentPrice2').innerText;
    const phoneCaseNumber = parseInt(phoneCase);
    const subAmount = totalPrice + phoneCaseNumber;

    const subTotalPrice = document.getElementById('subtotal').innerText;
    const subTotalNumber = parseInt(subTotalPrice);
    const price = subAmount;
    document.getElementById('subtotal').innerText = price;
    document.getElementById('currentPrice').innerText = totalPrice;

    const totalAmount = document.getElementById("total").innerText;
    const totalAmountNumber = parseInt(totalAmount);
    const amount = price;
    document.getElementById("total").innerText = amount;

})

// 1st minus button
const minusBtn = document.getElementById('minus');
minusBtn.addEventListener('click', function () {
    // const minusValue= document.getElementById('currentValue').value
    // const minusValueNumber = parseInt(minusValue) -1;
    // document.getElementById('currentValue').value= minusValueNumber; 
    
    quantityMinus("currentValue");//calling function

    const cost = 1219;
    const minusPrice = document.getElementById('currentPrice').innerText;
    const minusPriceNumber = parseInt(minusPrice);
    if (minusPriceNumber > 1) {
        const total = minusPriceNumber - cost;
        document.getElementById('currentPrice').innerText = total;
        const phoneCase = document.getElementById('currentPrice2').innerText;
        const phoneCaseNumber = parseInt(phoneCase);
        const subAmount = total + phoneCaseNumber;

        const subTotalPrice = document.getElementById('subtotal').innerText;
        const subTotalNumber = parseInt(subTotalPrice);
        const price = subAmount;
        document.getElementById('subtotal').innerText = price;

        const totalAmount = document.getElementById("total").innerText;
        const totalAmountNumber = parseInt(totalAmount);
        const amount = price;
        document.getElementById("total").innerText = amount;
    }
})


//2nd phone plus button
const plusBtn2 = document.getElementById('plus2');
plusBtn2.addEventListener('click', function () {
    const total2 = quantityPlus("currentValue2");//calling function
   
    const cost = 59;
    const currentPrice = document.getElementById('currentPrice2').innerText;
    const currentPriceNumber = parseInt(currentPrice);
    const totalPrice2 = currentPriceNumber + cost;
    document.getElementById('currentPrice2').innerText = totalPrice2;

    const currentPrice1 = document.getElementById('currentPrice').innerText;
    const currentPriceNumber1 = parseInt(currentPrice1);
    const totalPrice = currentPriceNumber1 + totalPrice2;

    const subTotalPrice = document.getElementById('subtotal').innerText;
    const subTotalNumber = parseInt(subTotalPrice);
    const sub2 = totalPrice;
    document.getElementById('subtotal').innerText = sub2;

    const totalAmount = document.getElementById("total").innerText;
    const totalAmountNumber = parseInt(totalAmount);
    const amount = sub2;
    document.getElementById("total").innerText = amount;
})

//2nd minus button
const minusBtn2 = document.getElementById('minus2');
minusBtn2.addEventListener('click', function () {
    quantityMinus('currentValue2');

    const cost = 59;
    const minusPrice = document.getElementById('currentPrice2').innerText;
    const minusPriceNumber = parseInt(minusPrice);
    if (minusPriceNumber > 1) {
        const total = minusPriceNumber - cost;
        document.getElementById('currentPrice2').innerText = total;

        const minusPrice1 = document.getElementById('currentPrice').innerText;
        const minusPriceNumber1 = parseInt(minusPrice1);
        const totalPrice1 = minusPriceNumber1 + total;

        const subTotalPrice = document.getElementById('subtotal').innerText;
        const subTotalNumbers = parseInt(subTotalPrice);
        const sub2 = totalPrice1;
        document.getElementById('subtotal').innerText = sub2;

        const totalAmount = document.getElementById("total").innerText;
        const totalAmountNumber = parseInt(totalAmount);
        const amount = sub2;
        document.getElementById("total").innerText = amount;
    }
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

