// Module ID: 14013
// Function ID: 14014
// Dependencies: [14003, 14006]
// Exports: LookupSupportedLocales

// Module 14013
import _mod14003 from "module_14003" /* 14003 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14006 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod14003.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
