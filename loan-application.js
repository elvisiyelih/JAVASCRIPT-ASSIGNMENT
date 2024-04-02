let Income = 90000;
let CreditScore = 760;
let OutstandingDebts = 0;

if (Income > 80000 && CreditScore > 750 && OutstandingDebts === 0){
    console.log("Approved: Full loan amount")
}
else if (Income >= 50000 && Income <= 80000 && CreditScore > 700 && OutstandingDebts <= 1){
    console.log("Approved: Reduced interest rate")
}
else if (Income > 30000 && Income < 50000 && CreditScore > 650 && OutstandingDebts < 3){
    console.log("Considered for approval")
}
else{
    console.log("Rejected: Not eligible for loan")
}