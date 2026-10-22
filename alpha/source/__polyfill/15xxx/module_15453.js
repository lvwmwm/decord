// Module ID: 15453
// Function ID: 15454
// Dependencies: [15443, 15446]
// Exports: LookupSupportedLocales

// Module 15453
import _mod15443 from "module_15443" /* 15443 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15446 */;


export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15443.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
