// Module ID: 16402
// Function ID: 16403
// Name: CurrencyDigits
// Dependencies: [16380]
// Exports: CurrencyDigits

// Module 16402 (CurrencyDigits)
import ToString from "ToString" /* 16380 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
