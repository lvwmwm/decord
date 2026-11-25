// Module ID: 15500
// Function ID: 15501
// Dependencies: [15490, 15493]
// Exports: LookupSupportedLocales

// Module 15500
import _mod15490 from "module_15490" /* 15490 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15493 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15490.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
