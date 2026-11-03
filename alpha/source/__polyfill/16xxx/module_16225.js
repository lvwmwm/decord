// Module ID: 16225
// Function ID: 16226
// Dependencies: [16215, 16218]
// Exports: LookupSupportedLocales

// Module 16225
import _mod16215 from "module_16215" /* 16215 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16218 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16215.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
