// Module ID: 13051
// Function ID: 99304
// Name: InsertUnicodeExtensionAndCanonicalize
// Dependencies: []

// Module 13051 (InsertUnicodeExtensionAndCanonicalize)
arg5.InsertUnicodeExtensionAndCanonicalize = function InsertUnicodeExtensionAndCanonicalize(locale, arg1, items) {
  let length;
  arg1(arg6[0]).invariant(-1 === locale.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
  let str = "-u";
  let num = 0;
  let str2 = "-u";
  if (0 < arg1.length) {
    do {
      let concat = "-".concat;
      str = `-u${"-".concat(arg1[num])}`;
      num = num + 1;
      str2 = str;
      length = arg1.length;
    } while (num < length);
  }
  let tmp2 = str2;
  let num2 = 0;
  let tmp3 = str2;
  if (0 < items.length) {
    do {
      let iter = items[num2];
      let value = iter.value;
      let concat2 = "-".concat;
      let sum = tmp2 + "-".concat(iter.key);
      let sum1 = sum;
      if ("" !== value) {
        let concat3 = "-".concat;
        sum1 = sum + "-".concat(value);
      }
      num2 = num2 + 1;
      tmp2 = sum1;
      tmp3 = sum1;
    } while (num2 < items.length);
  }
  if ("-u" === tmp3) {
    return arg1(arg6[1]).CanonicalizeUnicodeLocaleId(locale);
  } else {
    const index = locale.indexOf("-x-");
    if (-1 === index) {
      let sum2 = locale + tmp3;
    } else {
      const sum3 = locale.slice(0, index) + tmp3;
      sum2 = sum3 + locale.slice(index);
    }
    return arg1(arg6[1]).CanonicalizeUnicodeLocaleId(sum2);
  }
};
