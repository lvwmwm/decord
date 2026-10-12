// Module ID: 14480
// Function ID: 14481
// Name: CurrencyDigits
// Dependencies: [14458]
// Exports: CurrencyDigits

// Module 14480 (CurrencyDigits)
import _mod14458 from "module_14458" /* 14458 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14458.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
