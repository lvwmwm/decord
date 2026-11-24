// Module ID: 15513
// Function ID: 15514
// Dependencies: [15503, 15506]
// Exports: LookupSupportedLocales

// Module 15513
import _mod15503 from "module_15503" /* 15503 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15506 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15503.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
