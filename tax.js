let basic_salary = number(prompt("Enter your basic salary:"));
let benefits = number(prompt("Enter your benefits:"));

function calculateGrossSalary(basic_salary, benefits) {
    return basic_salary + benefits;
}

let gross_salary = calculateGrossSalary(basic_salary, benefits);
console.log("Gross Salary: " + gross_salary);

function calculatenhif(gross_salary) {
    let nhif;
    if (gross_salary >0 && gross_salary <= 5999) {
        nhif = 150;

    }else if (gross_salary <= 7999) {
        nhif = 300;
    }else if (gross_salary <= 11999) {
        nhif = 400;
    }
    return nhif;
}

let nhif = calculatenhif(gross_salary);
console.log("NHIF Deduction: " + nhif);





