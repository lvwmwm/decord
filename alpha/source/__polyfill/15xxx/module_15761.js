// Module ID: 15761
// Function ID: 15762
// Dependencies: [15751, 15754]
// Exports: LookupSupportedLocales

// Module 15761
import _mod15751 from "module_15751" /* 15751 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15754 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15751.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
