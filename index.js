const myCheckBox  = document.getElementById('myCheckBox');
const myButton1 = document.getElementById('myButton1');
const visaBtn1  = document.getElementById('visaBtn1');
const TwintBtn1  = document.getElementById('TwintBtn1');
const payPalBtn1 = document.getElementById('payPalBtn1');
const paymentResult1 = document.getElementById('paymentResult1');
const mySize1 = document.getElementById('mySize1');
const size1 = document.getElementById('size1');
const size2 = document.getElementById('size2');
const size3 = document.getElementById('size3');
const size4 = document.getElementById('size4');
const sizeResult1 = document.getElementById('sizeResult1');

myButton1.onclick = function() {
    if (visaBtn1.checked) {
        paymentResult1.textContent = `You are paying with Visa.`;
    } else if (TwintBtn1.checked) {
        paymentResult1.textContent = `You are paying with Twint.`;
    } else if (payPalBtn1.checked) {
        paymentResult1.textContent = `You are paying with PayPal.`;
    } else {
        paymentResult1.textContent = `You must select a payment type!`;
    }
}

mySize1.onclick = function() {
    if (size1.checked) {
        sizeResult1.textContent = 'size: S';
    } else if (size2.checked) {
        sizeResult1.textContent = 'Size M is sold out!';
    } else if (size3.checked) {
        sizeResult1.textContent = 'size: L';
    } else if (size4.checked) {
        sizeResult1.textContent = 'Size XL is sold out!';
    } else {
        sizeResult1.textContent = 'You must select a size!';
    }
}

const myButton2 = document.getElementById('myButton2');
const visaBtn2  = document.getElementById('visaBtn2');
const TwintBtn2  = document.getElementById('TwintBtn2');
const payPalBtn2 = document.getElementById('payPalBtn2');
const paymentResult2 = document.getElementById('paymentResult2');
const mySize2 = document.getElementById('mySize2');
const size5 = document.getElementById('size5');
const size6 = document.getElementById('size6');
const size7 = document.getElementById('size7');
const size8 = document.getElementById('size8');
const sizeResult2 = document.getElementById('sizeResult2');

myButton2.onclick = function() {
    if (visaBtn2.checked) {
        paymentResult2.textContent = `You are paying with Visa.`;
    } else if (TwintBtn2.checked) {
        paymentResult2.textContent = `You are paying with Twint.`;
    } else if (payPalBtn2.checked) {
        paymentResult2.textContent = `You are paying with PayPal.`;
    } else {
        paymentResult2.textContent = `You must select a payment type!`;
    }
}

mySize2.onclick = function() {
    if (size5.checked) {
        sizeResult2.textContent = 'size: S';
    } else if (size6.checked) {
        sizeResult2.textContent = 'Size M is sold out!';
    } else if (size7.checked) {
        sizeResult2.textContent = 'size: L';
    } else if (size8.checked) {
        sizeResult2.textContent = 'Size XL is sold out!';
    } else {
        sizeResult2.textContent = 'You must select a size!';
    }
}

const myButton3 = document.getElementById('myButton3');
const visaBtn3  = document.getElementById('visaBtn3');
const TwintBtn3  = document.getElementById('TwintBtn3');
const payPalBtn3 = document.getElementById('payPalBtn3');
const paymentResult3 = document.getElementById('paymentResult3');
const mySize3 = document.getElementById('mySize3');
const size9 = document.getElementById('size9');
const size10 = document.getElementById('size10');
const size11 = document.getElementById('size11');
const size12 = document.getElementById('size12');
const sizeResult3 = document.getElementById('sizeResult3');

myButton3.onclick = function() {
    if (visaBtn3.checked) {
        paymentResult3.textContent = `You are paying with Visa.`;
    } else if (TwintBtn3.checked) {
        paymentResult3.textContent = `You are paying with Twint.`;
    } else if (payPalBtn3.checked) {
        paymentResult3.textContent = `You are paying with PayPal.`;
    } else {
        paymentResult3.textContent = `You must select a payment type!`;
    }
}

mySize3.onclick = function() {
    if (size9.checked) {
        sizeResult3.textContent = 'size: S';
    } else if (size10.checked) {
        sizeResult3.textContent = 'Size M is sold out!';
    } else if (size11.checked) {
        sizeResult3.textContent = 'size: L';
    } else if (size12.checked) {
        sizeResult3.textContent = 'Size XL is sold out!';
    } else {
        sizeResult3.textContent = 'You must select a size!';
    }
}

const myButton4 = document.getElementById('myButton4');
const visaBtn4  = document.getElementById('visaBtn4');
const TwintBtn4  = document.getElementById('TwintBtn4');
const payPalBtn4 = document.getElementById('payPalBtn4');
const paymentResult4 = document.getElementById('paymentResult4');
const mySize4 = document.getElementById('mySize4');
const size13 = document.getElementById('size13');
const size14 = document.getElementById('size14');
const size15 = document.getElementById('size15');
const size16 = document.getElementById('size16');
const sizeResult4 = document.getElementById('sizeResult4');

myButton4.onclick = function() {
    if (visaBtn4.checked) {
        paymentResult4.textContent = `You are paying with Visa.`;
    } else if (TwintBtn4.checked) {
        paymentResult4.textContent = `You are paying with Twint.`;
    } else if (payPalBtn4.checked) {
        paymentResult4.textContent = `You are paying with PayPal.`;
    } else {
        paymentResult4.textContent = `You must select a payment type!`;
    }
}

mySize4.onclick = function() {
    if (size13.checked) {
        sizeResult4.textContent = 'size: S';
    } else if (size14.checked) {
        sizeResult4.textContent = 'Size M is sold out!';
    } else if (size15.checked) {
        sizeResult4.textContent = 'size: L';
    } else if (size16.checked) {
        sizeResult4.textContent = 'Size XL is sold out!';
    } else {
        sizeResult4.textContent = 'You must select a size!';
    }
}