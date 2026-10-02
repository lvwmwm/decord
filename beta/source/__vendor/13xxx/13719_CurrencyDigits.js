// Module ID: 13719
// Function ID: 13720
// Name: CurrencyDigits
// Dependencies: [13697]
// Exports: CurrencyDigits

// Module 13719 (CurrencyDigits)
import _mod13697 from "module_13697" /* 13697 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod13697.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
