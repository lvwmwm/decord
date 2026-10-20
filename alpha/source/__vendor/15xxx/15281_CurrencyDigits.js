// Module ID: 15281
// Function ID: 15282
// Name: CurrencyDigits
// Dependencies: [15259]
// Exports: CurrencyDigits

// Module 15281 (CurrencyDigits)
import _mod15259 from "module_15259" /* 15259 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15259.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
