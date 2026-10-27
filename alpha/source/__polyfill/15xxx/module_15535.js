// Module ID: 15535
// Function ID: 15536
// Dependencies: [15525, 15528]
// Exports: LookupSupportedLocales

// Module 15535
import _mod15525 from "module_15525" /* 15525 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15528 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15525.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
