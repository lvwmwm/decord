// Module ID: 15440
// Function ID: 15441
// Dependencies: [15430, 15433]
// Exports: LookupSupportedLocales

// Module 15440
import _mod15430 from "module_15430" /* 15430 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15433 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15430.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
