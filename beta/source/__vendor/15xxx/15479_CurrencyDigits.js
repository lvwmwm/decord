// Module ID: 15479
// Function ID: 15480
// Name: CurrencyDigits
// Dependencies: [15457]
// Exports: CurrencyDigits

// Module 15479 (CurrencyDigits)
import ToString from "ToString" /* 15457 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
