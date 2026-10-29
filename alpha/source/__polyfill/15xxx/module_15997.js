// Module ID: 15997
// Function ID: 15998
// Dependencies: [15987, 15990]
// Exports: LookupSupportedLocales

// Module 15997
import _mod15987 from "module_15987" /* 15987 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15990 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15987.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
