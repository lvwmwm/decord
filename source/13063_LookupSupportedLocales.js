// Module ID: 13063
// Function ID: 99355
// Name: LookupSupportedLocales
// Dependencies: [13084, 13085]

// Module 13063 (LookupSupportedLocales)
arg5.LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let tmp = arg1;
    let tmp2 = arg6;
    let replaced = str.replace(arg1(arg6[0]).UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = arg1(arg6[1]).BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
