// Module ID: 14457
// Function ID: 14458
// Name: CurrencyDigits
// Dependencies: [14435]
// Exports: CurrencyDigits

// Module 14457 (CurrencyDigits)
import _mod14435 from "module_14435" /* 14435 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14435.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
