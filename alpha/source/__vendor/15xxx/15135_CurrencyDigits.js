// Module ID: 15135
// Function ID: 15136
// Name: CurrencyDigits
// Dependencies: [15113]
// Exports: CurrencyDigits

// Module 15135 (CurrencyDigits)
import _mod15113 from "module_15113" /* 15113 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod15113.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
