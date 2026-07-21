// Module ID: 13036
// Function ID: 99257
// Name: CurrencyDigits
// Dependencies: []

// Module 13036 (CurrencyDigits)
arg5.CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (currencyDigitsData(arg6[0]).HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
