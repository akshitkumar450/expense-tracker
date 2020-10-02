let text = document.querySelector('#addtext')
let amount = document.querySelector('#addamnt')
let addtrans = document.querySelector('#addtrans')
let remtrans = document.querySelector('#remtrans')
let income_amnt = document.querySelector('#income-amnt')
let expense_amnt = document.querySelector('#expense-amnt')
let thing = document.querySelector('#thing')
let total_balnc = document.querySelector('#total-balnc')


function update() {
    let textval = (text.value);
    let amntval = parseFloat(amount.value);
    if (amntval > 0) {
        income_amnt.textContent = parseFloat(income_amnt.textContent) + amntval;
        let div = document.createElement('div');
        div.innerHTML = `<h2 class="plus" >${textval} <span>+${amntval} $</span> </h2>`;
        thing.append(div);
    } else if (amntval < 0) {
        expense_amnt.textContent = parseFloat(expense_amnt.textContent) + amntval
        let div = document.createElement('div');
        div.innerHTML = `<h2 class="minus" >${textval}<span> ${amntval} $</span> </h2>`;
        thing.append(div);
    } else {
        alert('please enter amount')
    }
    total_balnc.textContent = parseFloat(income_amnt.textContent) + parseFloat(expense_amnt.textContent)
    text.value = ''
    amount.value = ''
}

addtrans.addEventListener('click', update)
remtrans.addEventListener('click', remove)