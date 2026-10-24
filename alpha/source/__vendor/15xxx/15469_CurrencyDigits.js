// Module ID: 15469
// Function ID: 15470
// Name: CurrencyDigits
// Dependencies: [15447]
// Exports: CurrencyDigits

// Module 15469 (CurrencyDigits)
import _mod15447 from "module_15447" /* 15447 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15447.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
