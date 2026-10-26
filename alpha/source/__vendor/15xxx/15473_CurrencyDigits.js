// Module ID: 15473
// Function ID: 15474
// Name: CurrencyDigits
// Dependencies: [15451]
// Exports: CurrencyDigits

// Module 15473 (CurrencyDigits)
import _mod15451 from "module_15451" /* 15451 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15451.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
