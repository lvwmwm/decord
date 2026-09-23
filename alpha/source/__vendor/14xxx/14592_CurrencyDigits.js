// Module ID: 14592
// Function ID: 14593
// Name: CurrencyDigits
// Dependencies: [14570]
// Exports: CurrencyDigits

// Module 14592 (CurrencyDigits)
import _mod14570 from "module_14570" /* 14570 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14570.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
