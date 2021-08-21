function updateProduct(product, price){
    document.getElementById('extra-'+product+'-cost').innerText = price;
    calculateTotal();
}
document.getElementById('8gb-memory').addEventListener('click', function(){
    updateProduct('memory', 0);
});
document.getElementById('16gb-memory').addEventListener('click', function(){
    updateProduct('memory', 180);
});
document.getElementById('256gb-storage').addEventListener('click', function(){
    updateProduct('storage', 0);
});
document.getElementById('512gb-storage').addEventListener('click', function(){
    updateProduct('storage', 100);
});
document.getElementById('1tb-storage').addEventListener('click', function(){
    updateProduct('storage', 180);
});
document.getElementById('free-delivery').addEventListener('click',function(){
    updateProduct('delivery', 0);
});
document.getElementById('fast-delivery').addEventListener('click',function(){
    updateProduct('delivery', 20);
});
    const memoryCost= document.getElementById('extra-memory-cost');
    const storageCost = document.getElementById('extra-storage-cost');
    const deliveryCost = document.getElementById('extra-delivery-cost');
    const bestCost = document.getElementById('best-price');
    
function calculateTotal(){
    const bestPrice = parseFloat(bestCost.innerText);
    const memoryPrice = parseFloat(memoryCost.innerText);
    const storagePrice = parseFloat(storageCost.innerText);
    const deliveryPrice = parseFloat(deliveryCost.innerText);
    const totalPrice = document.getElementById('total-price')
    totalPrice.innerText = bestPrice + memoryPrice + storagePrice + deliveryPrice ;
    document.getElementById('final-total').innerText = +totalPrice.innerText;
}
document.getElementById('button-promocode').addEventListener('click', function(){
        const inputValue = document.getElementById('promo-code');
        const promoCode = inputValue.value;
        if(promoCode == 'stevekaku'){
            let bestPrice = +document.getElementById('total-price').innerText;
            document.getElementById('final-total').innerText = bestPrice - bestPrice * 20/100;
            inputValue.value = '';
        }});
// // Update Memory Price
// function updateMemoryPrice(memoryPrice) {
//     const memoryCost = document.getElementById('memory-cost');
//     memoryCost.innerText = memoryPrice;
//     updateTotal();
// };
// document.getElementById('memory-price8gb').addEventListener('click', function () {
//     updateMemoryPrice(0);
// });
// document.getElementById('memory-price16gb').addEventListener('click', function () {
//     updateMemoryPrice(180);

// });
// // Update Storage price
// function updateStoragePrice(storagePrice) {
//     const storageCost = document.getElementById('storage-cost');
//     storageCost.innerText = storagePrice;
//     updateTotal();
// };
// document.getElementById('storage-price256gb').addEventListener('click', function () {
//     updateStoragePrice(0)

// });
// document.getElementById('storage-price512gb').addEventListener('click', function () {
//     updateStoragePrice(100)

// });
// document.getElementById('storage-price1tb').addEventListener('click', function () {
//     updateStoragePrice(180)
// });
// // Updated Shipping Cost
// function updateDeliveryCost(deliveryCost) {
//     const deliveryCharge = document.getElementById('delivery-cost');
//     deliveryCharge.innerText = deliveryCost;
//     updateTotal();
// };
// document.getElementById('delivery-cost25').addEventListener('click', function () {
//     updateDeliveryCost(0);
// });
// document.getElementById('delivery-cost21').addEventListener('click', function () {
//     updateDeliveryCost(20);
// });
// // Updated Total Price
// const bestPrice = document.getElementById('best-price');
// const memoryCost = document.getElementById('memory-cost');
// const storageCost = document.getElementById('storage-cost');
// const deliveryCharge = document.getElementById('delivery-cost');

// function updateTotal() {
//     const discountPrice = document.getElementById('discount-total');
//     const totalPrice = document.getElementById('total-price');
//     const bestPriceText = bestPrice.innerText;
//     const parseBestPrice = parseFloat(bestPriceText);
//     const memoryCostText = memoryCost.innerText;
//     const parseMemoryCost = parseFloat(memoryCostText);
//     const storageCostText = storageCost.innerText;
//     const parseStorageCost = parseFloat(storageCostText);
//     const deliveryCostText = deliveryCharge.innerText;
//     const parseDeliveryCost = parseFloat(deliveryCostText);
//     totalPrice.innerText = parseBestPrice + parseMemoryCost + parseStorageCost + parseDeliveryCost;
//     discountPrice.innerText = parseBestPrice + parseMemoryCost + parseStorageCost + parseDeliveryCost;
//     return parseFloat(totalPrice.innerText);
// };
// // Update Promo code
//

//     const grandTotal = updateTotal();
//     const discountTotal = document.getElementById('discount-total')
//     if (inputValue == 'stevekaku') {
//         const discountPrice = (grandTotal / 100) * 20;
//         discountTotal.innerText = grandTotal - discountPrice;
//     }
//     inputNumber.value = '';
// });






// document.getElementById('8gb-memory').addEventListener('click', function(){
//     const memoryValue = document.getElementById('extra-memory-cost').innerText = '0';
//     const memoryCost = parseFloat(memoryValue);
//     totalPrice(memoryCost);
// });
// document.getElementById('16gb-memory').addEventListener('click', function(){
//     const memoryValue = document.getElementById('extra-memory-cost').innerText = '180';
//     const memoryCost = parseFloat(memoryValue);
//     totalPrice(memoryCost);
// });
// document.getElementById('256gb-storage').addEventListener('click', function(){
//     const storageValue = document.getElementById('extra-storage-cost').innerText = '0';
//     const storageCost = parseFloat(storageValue);
//     totalPrice(storageCost);
// });
// document.getElementById('512gb-storage').addEventListener('click', function(){
//     const storageValue = document.getElementById('extra-storage-cost').innerText = '100';
//     const storageCost = parseFloat(storageValue);
//     totalPrice(storageCost);
// });
// document.getElementById('1tb-storage').addEventListener('click', function(){
//     const storageValue = document.getElementById('extra-storage-cost').innerText = '180';
//     const storageCost = parseFloat(storageValue);
//     totalPrice(storageCost);
// });
// document.getElementById('free-delivery').addEventListener('click', function(){
//     const deliveryValue = document.getElementById('extra-delivery-cost').innerText = '0';
//     const deliveryCost = parseFloat(deliveryValue);
//     totalPrice(deliveryCost);
// });
// document.getElementById('fast-delivery').addEventListener('click', function(){
//     const deliveryValue = document.getElementById('extra-delivery-cost').innerText = '20';
//     const deliveryCost = parseFloat(deliveryValue);
//     totalPrice(deliveryCost);
// });


// function totalPrice(){
//     let totalCost= 1299;
//     totalCost= totalCost + ;
//     const price= document.getElementById('total-price').innerText = totalCost;
// };

// document.getElementById('promo-code').addEventListener