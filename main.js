class BankAccount {
    constructor (accountNumber, owner, transactions = []) {
        this.accountNumber = accountNumber
        this.owner = owner
        this.transactions = transactions
    }

    balance() {
        let balance = 0;
        for (let i = 0; this.transactions.length > i; i++) {
            balance += this.transactions[i].amount
        }
        console.log(balance)
        return balance
    }
    deposit(amt) {
        this.amt = amt
        if (amt <= 0) {
            console.log("Please enter a positive number with a minimum value of $0.01")
        } else {
            transactions.push(this)
        }
    }

    charge(payee, amt) {
        // let transactionSum = amt
        if (amt > balance) {
            console("Transaction amount is greater than current balance. Insufficient Funds")
        } else {
            transactions.push(amt)
        }
    }
}

class Transaction{
    constructor(amount, payee){
        this.date = new Date()
        this.amount = amount
        this.payee = payee
    }
}

let peytonTransaction = new secretTransaction("peytonpassword", 1000, "peyton");
let alayshaTransaction = new Transaction( 100000, "alaysha");
let bankAccount = new BankAccount(1234, "Andrew Hemry", [alayshaTransaction])
bankAccount.balance();

console.log("password", peytonTransaction.password)
console.log("amount", peytonTransaction.amount)
console.log("payee", peytonTransaction.payee)

console.log("amount", alayshaTransaction.amount)
console.log("payee", alayshaTransaction.payee)


