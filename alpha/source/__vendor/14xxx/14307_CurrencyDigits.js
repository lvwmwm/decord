// Module ID: 14307
// Function ID: 14308
// Name: CurrencyDigits
// Dependencies: [14285]
// Exports: CurrencyDigits

// Module 14307 (CurrencyDigits)
import _mod14285 from "module_14285" /* 14285 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14285.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
