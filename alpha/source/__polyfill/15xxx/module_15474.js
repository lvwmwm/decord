// Module ID: 15474
// Function ID: 15475
// Dependencies: [15464, 15467]
// Exports: LookupSupportedLocales

// Module 15474
import _mod15464 from "module_15464" /* 15464 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15467 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15464.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
