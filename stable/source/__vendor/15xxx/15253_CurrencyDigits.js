// Module ID: 15253
// Function ID: 15254
// Name: CurrencyDigits
// Dependencies: [15231]
// Exports: CurrencyDigits

// Module 15253 (CurrencyDigits)
import _mod15231 from "module_15231" /* 15231 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15231.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
