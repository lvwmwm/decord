// Module ID: 13718
// Function ID: 13719
// Name: CurrencyDigits
// Dependencies: [13696]
// Exports: CurrencyDigits

// Module 13718 (CurrencyDigits)
import _mod13696 from "module_13696" /* 13696 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod13696.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
