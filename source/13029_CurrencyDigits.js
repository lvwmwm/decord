// Module ID: 13029
// Function ID: 99234
// Name: CurrencyDigits
// Dependencies: []

// Module 13029 (CurrencyDigits)
arg5.CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (currencyDigitsData(arg6[0]).HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
