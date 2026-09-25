// Module ID: 13762
// Function ID: 13763
// Name: CurrencyDigits
// Dependencies: [13740]
// Exports: CurrencyDigits

// Module 13762 (CurrencyDigits)
import _mod13740 from "module_13740" /* 13740 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod13740.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
