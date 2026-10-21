// Module ID: 15396
// Function ID: 15397
// Dependencies: [15386, 15389]
// Exports: LookupSupportedLocales

// Module 15396
import _mod15386 from "module_15386" /* 15386 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15389 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15386.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
