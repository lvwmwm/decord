// Module ID: 15474
// Function ID: 15475
// Name: CurrencyDigits
// Dependencies: [15452]
// Exports: CurrencyDigits

// Module 15474 (CurrencyDigits)
import _mod15452 from "module_15452" /* 15452 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15452.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
