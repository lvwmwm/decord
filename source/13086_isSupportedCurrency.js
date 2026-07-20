// Module ID: 13086
// Function ID: 99394
// Name: isSupportedCurrency
// Dependencies: [0, 0]

// Module 13086 (isSupportedCurrency)
function isSupportedCurrency(currency) {
  let str = arg1;
  if (undefined === arg1) {
    str = "en";
  }
  const obj = { 0: null, 0: null, currency };
  const memoizedNumberFormat = arg1(arg6[0]).createMemoizedNumberFormat(str, obj);
  const str2 = memoizedNumberFormat.format(123);
  if (str2.substring(0, 3) !== currency) {
    if (str3.substring(str3.length - 3) !== currency) {
      return true;
    }
  }
}
arg5.getSupportedCurrencies = function getSupportedCurrencies(locale) {
  const items = [];
  const currencies = arg1(arg6[1]).currencies;
  let num = 0;
  if (0 < currencies.length) {
    do {
      let arr3 = currencies[num];
      if (3 === arr3.length) {
        let tmp11 = closure_2;
        let tmp10 = tmp;
        let tmp9 = tmp2;
        let tmp8 = tmp3;
        if (closure_2(arr3, locale)) {
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
                let tmp5 = closure_2;
                if (closure_2(sum, locale)) {
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
      let tmp = tmp10;
      let tmp2 = tmp9;
      let tmp3 = tmp8;
    } while (num < currencies.length);
  }
  return items;
};
