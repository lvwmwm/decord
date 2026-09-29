// Module ID: 13886
// Function ID: 13887
// Name: CurrencyDigits
// Dependencies: [13864]
// Exports: CurrencyDigits

// Module 13886 (CurrencyDigits)
import _mod13864 from "module_13864" /* 13864 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod13864.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
