document.getElementById("tax_form").addEventListener("submit", function (event) {
  event.preventDefault();

  /* ---------- Inputs ---------- */
  const basic_salary = Number(document.getElementById('basic').value);
  const benefits = Number(document.getElementById('benefits').value);

  /* ---------- Gross salary ---------- */
  function calculateGrossSalary(basic_salary, benefits) {
    return basic_salary + benefits;
  }
  const gross_salary = calculateGrossSalary(basic_salary, benefits);
  document.getElementById('gross').innerHTML = gross_salary;

  /* ---------- NHIF ---------- */
  function calculateNHIF(gross_salary) {
    let nhif = 0;
    if (gross_salary > 0 && gross_salary <= 5999) {
      nhif = 150;
    } else if (gross_salary <= 7999) {
      nhif = 300;
    } else if (gross_salary <= 11999) {
      nhif = 400;
    } else {
      nhif = 500; // fallback so it never returns undefined — replace with the full band table
    }
    return nhif;
  }
  const nhif = calculateNHIF(gross_salary);
  document.getElementById('nhif').innerHTML = nhif;

  /* ---------- NSSF (6% of gross, only the first 18,000 is pensionable) ---------- */
  function calculateNSSF(gross) {
    const pensionableGross = Math.min(gross, 18000);
    return pensionableGross * 0.06;
  }
  const nssf = calculateNSSF(gross_salary);
  document.getElementById('nssf').innerHTML = nssf;

  /* ---------- NHDF / Housing Levy (1.5% of gross) ---------- */
  function calculateNHDF(gross) {
    return gross * 0.015;
  }
  const nhdf = calculateNHDF(gross_salary);
  document.getElementById('nhdf').innerHTML = nhdf;

  /* ---------- Taxable income ---------- */
  function calculateTaxableIncome(gross, nssf, nhdf, nhif) {
    return gross - (nssf + nhdf + nhif);
  }
  const taxable_income = calculateTaxableIncome(gross_salary, nssf, nhdf, nhif);
  document.getElementById('taxable_income').innerHTML = taxable_income;

  /* ---------- PAYE (marginal bands, less 2,400 personal relief) ---------- */
  function calculatePAYEE(taxableIncome) {
    let tax = 0;
    if (taxableIncome <= 24000) {
      tax = taxableIncome * 0.10;
    } else if (taxableIncome <= 32333) {
      tax = 24000 * 0.10 + (taxableIncome - 24000) * 0.25;
    } else if (taxableIncome <= 500000) {
      tax = 24000 * 0.10 + 8333 * 0.25 + (taxableIncome - 32333) * 0.30;
    } else if (taxableIncome <= 800000) {
      tax = 24000 * 0.10 + 8333 * 0.25 + 467667 * 0.30 + (taxableIncome - 500000) * 0.325;
    } else {
      tax = 24000 * 0.10 + 8333 * 0.25 + 467667 * 0.30 + 300000 * 0.325 + (taxableIncome - 800000) * 0.35;
    }
    const personalRelief = 2400;
    const payee = tax - personalRelief;
    return payee > 0 ? payee : 0; // PAYE can never be negative
  }
  const payee = calculatePAYEE(taxable_income);
  document.getElementById('payee').innerHTML = payee;

  /*  Net salary */
  function calculateNetSalary(gross, nhif, nhdf, nssf, payee) {
    return gross - (nhif + nhdf + nssf + payee);
  }
  const net_salary = calculateNetSalary(gross_salary, nhif, nhdf, nssf, payee);
  document.getElementById('net_salary').innerHTML = net_salary;
});




