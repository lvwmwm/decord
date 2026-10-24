// Module ID: 15494
// Function ID: 15495
// Dependencies: [15484, 15487]
// Exports: LookupSupportedLocales

// Module 15494
import _mod15484 from "module_15484" /* 15484 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15487 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15484.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
