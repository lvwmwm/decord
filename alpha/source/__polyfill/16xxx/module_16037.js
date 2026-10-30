// Module ID: 16037
// Function ID: 16038
// Dependencies: [16027, 16030]
// Exports: LookupSupportedLocales

// Module 16037
import _mod16027 from "module_16027" /* 16027 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16030 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16027.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
