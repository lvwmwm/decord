// Module ID: 15249
// Function ID: 15250
// Name: CurrencyDigits
// Dependencies: [15227]
// Exports: CurrencyDigits

// Module 15249 (CurrencyDigits)
import _mod15227 from "module_15227" /* 15227 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15227.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
