var atm = document.getElementById("atm")
var body = document.querySelector("body");

var balance = 10000;

function switchon() {
    atm.style.background = "#ffffffff";
    atm.innerHTML = `
    <h2 class='animate__animated animate__fadeIn animate__slower'>Welcome to ATM</h2>
    <div style="margin-top:20px; text-align:center;">
        <img src="load.gif" alt="Loading..." style="width:80px; margin-top : 30px;">
    </div>`;
    body.style.background = "#008000";

setTimeout (() => {
    showmenu();
} , 5000); 
};

function showmenu() {
  atm.innerHTML = `
    <h2>Select an Option:</h2>
    <button onclick="showdeposit()">Deposit</button>
    <button onclick="showwithdraw()">Withdraw</button>
    <button onclick="switchoff()" class="exit">Exit</button>
  `;
};

function showdeposit() {
    atm.innerHTML = `
    <h3>Enter amount to Deposit</h3>
    <input type="number" id = "amount" placeholder="Enter Amount">
    <button onclick="deposit()">Confirm</button>
    <button onclick="showmenu()">Back</button>`
};

function deposit() {
    var amount = parseInt(document.getElementById("amount").value);
    if (!amount || amount <= 0) {
        atm.innerHTML = `<p class='animate__animated animate__bounceIn' style=color:"red";>❌ Invalid Amount !</p>`;
        return;
    }
    balance = balance + amount;
    atm.innerHTML = `<p class='animate__animated animate__bounceIn'>✅ ${amount} Deposited</p>
    <p>New Balance : ${balance}</p>
    <button onclick="showmenu()">Back to Menu</button>`
};

function showwithdraw() {
    atm.innerHTML = `
    <h3>Enter amount to Widthdraw</h3>
    <input type="number" id = "amount" placeholder="Enter Amount">
    <button onclick="widthdraw()">Confirm</button>
    <button onclick="showmenu()">Back</button>`
}

function widthdraw() {
    var amount = parseInt(document.getElementById("amount").value);
    if (!amount || amount <= 0) {
        atm.innerHTML = `<p class='animate__animated animate__bounceIn' style=color:"red";>❌ Invalid Amount !</p>`;
        return;
    } else if (amount > balance) {
        atm.innerHTML = `<p style = color:"red"; >❌ Not Enough Balance </p>
        <button onclick="showmenu()">Back to Menu</button>`;
        return;
    }else 
        balance = balance - amount ;
        atm.innerHTML = `<p class='animate__animated animate__bounceIn'>✅ ${amount} Withdraw</p>
        <p>New Balance : ${balance}</p>
        <button onclick="showmenu()">Back to Menu</button>`
};

function checkbalance() {
    atm.innerHTML =`
    <div style="margin-top:20px; text-align:center;">
        <p>Checking Current Balance :
        <img src="load.gif" alt="Loading..." style="width:80px; margin-top : 50px;">
    </div>`;
    setTimeout(() => {
        atm.innerHTML = `<p style = "margin-top:70px; font-weight:bold";>Your current balance is : ${balance} </p>
        <button onclick="showmenu()">Back to Menu</button>`
    } , 3000);

};

function switchoff() {
    atm.style.background = "black";
    atm.innerHTML = `<p class= 'animate__animated animate__fadeInDown animate__slower' style="color:white; font-size:20px;">ATM is Switching Off</p>`
    body.style.background = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";

    setTimeout (() => {
        atm.innerHTML = `<p class= 'animate__animated animate__fadeOut animate__slower'><p>`;
    } , 3000);
};
