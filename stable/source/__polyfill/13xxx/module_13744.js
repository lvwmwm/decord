// Module ID: 13744
// Function ID: 13745
// Dependencies: [13734, 13737]
// Exports: LookupSupportedLocales

// Module 13744
import _mod13734 from "module_13734" /* 13734 */;
import BestAvailableLocale from "BestAvailableLocale" /* 13737 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod13734.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
