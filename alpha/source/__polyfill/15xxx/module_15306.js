// Module ID: 15306
// Function ID: 15307
// Dependencies: [15296, 15299]
// Exports: LookupSupportedLocales

// Module 15306
import _mod15296 from "module_15296" /* 15296 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15299 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15296.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
