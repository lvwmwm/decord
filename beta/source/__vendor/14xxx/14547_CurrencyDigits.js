// Module ID: 14547
// Function ID: 14548
// Name: CurrencyDigits
// Dependencies: [14525]
// Exports: CurrencyDigits

// Module 14547 (CurrencyDigits)
import _mod14525 from "module_14525" /* 14525 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14525.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
