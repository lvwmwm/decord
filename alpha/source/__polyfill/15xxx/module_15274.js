// Module ID: 15274
// Function ID: 15275
// Dependencies: [15264, 15267]
// Exports: LookupSupportedLocales

// Module 15274
import _mod15264 from "module_15264" /* 15264 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15267 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15264.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
