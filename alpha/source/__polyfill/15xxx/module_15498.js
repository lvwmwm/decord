// Module ID: 15498
// Function ID: 15499
// Dependencies: [15488, 15491]
// Exports: LookupSupportedLocales

// Module 15498
import _mod15488 from "module_15488" /* 15488 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15491 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15488.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
