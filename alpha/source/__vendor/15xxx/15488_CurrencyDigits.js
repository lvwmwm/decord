// Module ID: 15488
// Function ID: 15489
// Name: CurrencyDigits
// Dependencies: [15466]
// Exports: CurrencyDigits

// Module 15488 (CurrencyDigits)
import ToString from "ToString" /* 15466 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
