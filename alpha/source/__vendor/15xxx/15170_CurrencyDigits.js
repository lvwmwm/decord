// Module ID: 15170
// Function ID: 15171
// Name: CurrencyDigits
// Dependencies: [15148]
// Exports: CurrencyDigits

// Module 15170 (CurrencyDigits)
import _mod15148 from "module_15148" /* 15148 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15148.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
