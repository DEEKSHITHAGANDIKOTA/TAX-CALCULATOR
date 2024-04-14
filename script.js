function calculateTax() {
    const age = parseInt(document.getElementById('age').value);
    const income = parseInt(document.getElementById('income').value);
    const extraincome =  parseInt(document.getElementById('extraincome').value);
    const deductions = parseInt(document.getElementById('deductions').value);

    let tax = 0;

    if (income + extraincome +  deductions <= 800000) {
        tax = 0;
    } else if (income + extraincome + deductions > 800000 && income +extraincome + deductions <= 900000) {
        tax = 0.3 * (income +extraincome + deductions - 800000);
    } else {
        if (age < 40) {
            tax = 0.3 * (income +extraincome +deductions - 800000);
        } else if (age >= 40 && age < 60) {
            tax = 0.4 * (income +extraincome + deductions- 800000);
        } else {
            tax = 0.1 * (income +extraincome + deductions - 800000);
        }
    }
  let  overalincome=(income+extraincome+deductions)-tax;
  alert("your total tax is "+tax+
    " your overall income is  "+overalincome+
     " after tax deductions ");


    document.getElementById('result').innerText =` Tax:${tax} Lakhs`;
}