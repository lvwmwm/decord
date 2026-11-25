// Module ID: 15475
// Function ID: 15476
// Name: CurrencyDigits
// Dependencies: [15453]
// Exports: CurrencyDigits

// Module 15475 (CurrencyDigits)
import ToString from "ToString" /* 15453 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
