// Module ID: 16558
// Function ID: 16559
// Name: CurrencyDigits
// Dependencies: [16536]
// Exports: CurrencyDigits

// Module 16558 (CurrencyDigits)
import ToString from "ToString" /* 16536 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
