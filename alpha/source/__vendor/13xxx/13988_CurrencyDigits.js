// Module ID: 13988
// Function ID: 13989
// Name: CurrencyDigits
// Dependencies: [13966]
// Exports: CurrencyDigits

// Module 13988 (CurrencyDigits)
import _mod13966 from "module_13966" /* 13966 */;


export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod13966.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
