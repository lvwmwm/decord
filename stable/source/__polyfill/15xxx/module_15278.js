// Module ID: 15278
// Function ID: 15279
// Dependencies: [15268, 15271]
// Exports: LookupSupportedLocales

// Module 15278
import _mod15268 from "module_15268" /* 15268 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15271 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15268.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
