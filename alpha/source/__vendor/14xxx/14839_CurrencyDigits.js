// Module ID: 14839
// Function ID: 14840
// Name: CurrencyDigits
// Dependencies: [14817]
// Exports: CurrencyDigits

// Module 14839 (CurrencyDigits)
import _mod14817 from "module_14817" /* 14817 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14817.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
