// Module ID: 15195
// Function ID: 15196
// Dependencies: [15185, 15188]
// Exports: LookupSupportedLocales

// Module 15195
import _mod15185 from "module_15185" /* 15185 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15188 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15185.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
