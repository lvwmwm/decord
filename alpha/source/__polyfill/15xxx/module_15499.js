// Module ID: 15499
// Function ID: 15500
// Dependencies: [15489, 15492]
// Exports: LookupSupportedLocales

// Module 15499
import _mod15489 from "module_15489" /* 15489 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15492 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15489.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
