// Module ID: 14801
// Function ID: 14802
// Name: CurrencyDigits
// Dependencies: [14779]
// Exports: CurrencyDigits

// Module 14801 (CurrencyDigits)
import _mod14779 from "module_14779" /* 14779 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14779.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
