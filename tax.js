document.getElementById('tax_form').addEventListener('submit',function(event){
event.preventDefault();

    let basic_salary = Number(document.getElementById('basic').value);
let benefits = Number(document.getElementById('benefits').value);

function calculateGrossSalary(basic_salary, benefits) {
    return basic_salary + benefits;
}

let gross_salary = calculateGrossSalary(basic_salary, benefits);
document.getElementById('gross_salary').innerHTML = gross_salary;

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
document.getElementById('nhif').innerHTML = nhif;



/* ---------- TASK 16: NSSF ---------- */
// 6% of gross, but only a maximum of 18,000 of the gross is used.
function getNSSF(gross) {
  const pensionableGross = Math.min(gross, 18000);
  return pensionableGross * 0.06;
}
 
/* ---------- TASK 17: NHDF (Housing Levy) ---------- */
function getNHDF(gross) {
  return gross * 0.015;
}
 
/* ---------- TASK 18: Taxable income ---------- */
function getTaxableIncome(gross, nssf, nhdf, nhif) {
  return gross - (nssf + nhdf + nhif);
}
 
/* ---------- TASK 19: PAYE ---------- */
// Finance Act 2023 marginal bands, less 2,400 personal relief.
function getPAYE(taxableIncome) {
  let tax = 0;
 
  if (taxableIncome <= 24000) {
    tax = taxableIncome * 0.10;
  } else if (taxableIncome <= 32333) {
    tax = 24000 * 0.10 + (taxableIncome - 24000) * 0.25;
  } else if (taxableIncome <= 500000) {
    tax = 24000 * 0.10 + 8333 * 0.25 + (taxableIncome - 32333) * 0.30;
  } else if (taxableIncome <= 800000) {
    tax =
      24000 * 0.10 +
      8333 * 0.25 +
      467667 * 0.30 +
      (taxableIncome - 500000) * 0.325;
  } else {
    tax =
      24000 * 0.10 +
      8333 * 0.25 +
      467667 * 0.30 +
      300000 * 0.325 +
      (taxableIncome - 800000) * 0.35;
  }
 
  const personalRelief = 2400;
  const paye = tax - personalRelief;
  return paye > 0 ? paye : 0; // PAYE can never be negative
}
 
/* ---------- TASK 20: Net salary ---------- */
function getNetSalary(gross, nhif, nhdf, nssf, paye) {
  return gross - (nhif + nhdf + nssf + paye);
}
 
/* ---------- Put it all together ---------- */
 
function processPayroll(basicSalary, benefits) {
  const gross = getGrossSalary(basicSalary, benefits);
  const nhif = getNHIF(gross);
  const nssf = getNSSF(gross);
  const nhdf = getNHDF(gross);
  const taxableIncome = getTaxableIncome(gross, nssf, nhdf, nhif);
  const paye = getPAYE(taxableIncome);
  const netSalary = getNetSalary(gross, nhif, nhdf, nssf, paye);
 
  const money = (n) => n.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
 
  console.log("\n========== PAYSLIP ==========");
  console.log("Basic Salary   : KES " + money(basicSalary));
  console.log("Benefits       : KES " + money(benefits));
  console.log("-----------------------------");
  console.log("Gross Salary   : KES " + money(gross));
  console.log("NHIF           : KES " + money(nhif));
  console.log("NSSF           : KES " + money(nssf));
  console.log("NHDF (1.5%)    : KES " + money(nhdf));
  console.log("Taxable Income : KES " + money(taxableIncome));
  console.log("PAYE           : KES " + money(paye));
  console.log("-----------------------------");
  console.log("NET SALARY     : KES " + money(netSalary));
  console.log("=============================\n");
}
 
/* ---------- Read input from the user ---------- */
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
rl.question("Enter basic salary: ", (basicInput) => {
  rl.question("Enter benefits: ", (benefitsInput) => {
    const basicSalary = parseFloat(basicInput) || 0;
    const benefits = parseFloat(benefitsInput) || 0;
    processPayroll(basicSalary, benefits);
    rl.close();
  });
});







    
});




