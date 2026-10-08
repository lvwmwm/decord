// Module ID: 14332
// Function ID: 14333
// Dependencies: [14322, 14325]
// Exports: LookupSupportedLocales

// Module 14332
import _mod14322 from "module_14322" /* 14322 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14325 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod14322.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
