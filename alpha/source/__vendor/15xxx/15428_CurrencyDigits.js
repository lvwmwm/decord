// Module ID: 15428
// Function ID: 15429
// Name: CurrencyDigits
// Dependencies: [15406]
// Exports: CurrencyDigits

// Module 15428 (CurrencyDigits)
import _mod15406 from "module_15406" /* 15406 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15406.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
