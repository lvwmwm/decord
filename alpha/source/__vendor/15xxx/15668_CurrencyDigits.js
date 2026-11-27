// Module ID: 15668
// Function ID: 15669
// Name: CurrencyDigits
// Dependencies: [15646]
// Exports: CurrencyDigits

// Module 15668 (CurrencyDigits)
import ToString from "ToString" /* 15646 */;


export function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (ToString.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
}
