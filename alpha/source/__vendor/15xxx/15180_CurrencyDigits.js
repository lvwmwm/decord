// Module ID: 15180
// Function ID: 15181
// Name: CurrencyDigits
// Dependencies: [15158]
// Exports: CurrencyDigits

// Module 15180 (CurrencyDigits)
import _mod15158 from "module_15158" /* 15158 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15158.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
