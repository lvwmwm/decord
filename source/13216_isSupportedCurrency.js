// Module ID: 13216
// Function ID: 101628
// Name: isSupportedCurrency
// Dependencies: [13133, 13217]

// Module 13216 (isSupportedCurrency)
const require = arg1;
const dependencyMap = arg6;
function isSupportedCurrency(arr3, locale) {
  let str = locale;
  if (undefined === locale) {
    str = "en";
  }
  const obj = { style: "currency", currencyDisplay: "name", currency: arr3 };
  const memoizedNumberFormat = require(13133) /* _formatToParts */.createMemoizedNumberFormat(str, obj);
  const str2 = memoizedNumberFormat.format(123);
  if (str2.substring(0, 3) !== arr3) {
    if (str3.substring(str3.length - 3) !== arr3) {
      return true;
    }
  }
}
arg5.getSupportedCurrencies = function getSupportedCurrencies(locale) {
  const items = [];
  const currencies = require(13217).currencies;
  let num = 0;
  if (0 < currencies.length) {
    do {
      let arr3 = currencies[num];
      if (3 === arr3.length) {
        let tmp11 = isSupportedCurrency;
        let tmp10 = tmp;
        let tmp9 = tmp2;
        let tmp8 = tmp3;
        if (isSupportedCurrency(arr3, locale)) {
          let arr = items.push(arr3);
          tmp10 = tmp;
          tmp9 = tmp2;
          tmp8 = tmp3;
        }
      } else {
        tmp10 = tmp;
        tmp9 = tmp2;
        tmp8 = tmp3;
        if (5 === arr3.length) {
          tmp10 = tmp;
          tmp9 = tmp2;
          tmp8 = tmp3;
          if ("~" === arr3[3]) {
            let indexOf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf;
            let index = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(arr3[2]);
            let indexOf2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf;
            let index1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(arr3[4]);
            let sum1 = index;
            tmp10 = index1;
            tmp8 = tmp3;
            tmp9 = index;
            if (index <= index1) {
              do {
                let sum = arr3.substring(0, 2) + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[sum1];
                let tmp5 = isSupportedCurrency;
                if (isSupportedCurrency(sum, locale)) {
                  arr = items.push(sum);
                }
                sum1 = sum1 + 1;
                tmp8 = sum;
                tmp9 = sum1;
                tmp10 = index1;
              } while (sum1 <= index1);
            }
          }
        }
      }
      num = num + 1;
      tmp = tmp10;
      tmp2 = tmp9;
      tmp3 = tmp8;
    } while (num < currencies.length);
  }
  return items;
};
