
let totalIncome = 0;
let totalExpense = 0;
let totalBalance = 0;

function addIncome() {
    let amount = Number(document.getElementById("incomeInput").value);

    if (amount > 0) {
        totalIncome = totalIncome + amount;
        updateBalance();

        document.getElementById("incomeInput").value = "";
    } else {
        alert("Please enter a valid income!");
    }
}

function addExpense() {
    let amount = Number(document.getElementById("expenseInput").value);

    if (amount > 0) {
        totalExpense = totalExpense + amount;
        updateBalance();

        document.getElementById("expenseInput").value = "";
    } else {
        alert("Please enter a valid expense!");
    }
}

function updateBalance() {
    totalBalance = totalIncome - totalExpense;

    document.getElementById("income").innerText =
        "Rs " + totalIncome;

    document.getElementById("expense").innerText =
        "Rs " + totalExpense;

    document.getElementById("balance").innerText =
        "Rs " + totalBalance;
}
