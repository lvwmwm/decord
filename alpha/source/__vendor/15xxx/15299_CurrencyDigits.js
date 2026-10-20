// Module ID: 15299
// Function ID: 15300
// Name: CurrencyDigits
// Dependencies: [15277]
// Exports: CurrencyDigits

// Module 15299 (CurrencyDigits)
import _mod15277 from "module_15277" /* 15277 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15277.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
