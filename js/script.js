// getting the elements
const priceTotal = document.getElementById('priceTotal');
const orderTotal = document.getElementById('orderTotal');
const discount = document.getElementById("discount");
const fullList = document.getElementById("productList");
const discountInputText = document.getElementById("voucher");
const apply = document.getElementById("applyBtn");
const makePurchase = document.getElementById("makeIt");

// initial total
let totalPrice = 0;
let voucherActive = false;

// if voucher added
function orderCalculate(){
    const discountTotal = (totalPrice * 20) / 100;
    const subTotal = totalPrice - discountTotal;
    discount.innerText = discountTotal.toFixed(2);
    orderTotal.innerText = subTotal.toFixed(2);
}

// product adding to cart
function itemAdder(itemNameId, itemPriceId) {
    // getting items name and price
    const itemName = document.getElementById(itemNameId).innerText;
    const itemPrice = document.getElementById(itemPriceId).innerText;
    // setting items name 
    const li = document.createElement('li');
    li.innerText = itemName;
    fullList.appendChild(li);
    // updating totalPrice
    const itemPriceValue = parseFloat(itemPrice);
    totalPrice += itemPriceValue;
    // setting total Price
    priceTotal.innerText = totalPrice.toFixed(2);
    orderTotal.innerText = totalPrice.toFixed(2);
    // activating Make purchase button & apply button
    if (totalPrice > 0) {
        makePurchase.removeAttribute("disabled", false);
        if (totalPrice >= 200) {
            apply.removeAttribute("disabled", false);
        }
    }
    // if voucher activated
    if (voucherActive) {
        orderCalculate();
    }
}

// voucher apply button
apply.addEventListener("click", function () {
    const discountInput = discountInputText.value;
    if (discountInput === 'SELL200') {
        orderCalculate();
        voucherActive = true;
    } else {
        alert("Invalid Voucher!");
    }
    discountInputText.value = "";
})


// Go home button from modal
function goHome() {
    fullList.innerHTML = '';
    orderTotal.innerText = '00.00';
    priceTotal.innerText = '00.00';
    discount.innerText = '00.00';
    apply.setAttribute("disabled", true);
    makePurchase.setAttribute("disabled", true);
    voucherActive = false;
}