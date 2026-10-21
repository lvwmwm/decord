// Module ID: 15371
// Function ID: 15372
// Name: CurrencyDigits
// Dependencies: [15349]
// Exports: CurrencyDigits

// Module 15371 (CurrencyDigits)
import _mod15349 from "module_15349" /* 15349 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15349.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
