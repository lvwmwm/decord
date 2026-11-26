// Module ID: 15504
// Function ID: 15505
// Dependencies: [15494, 15497]
// Exports: LookupSupportedLocales

// Module 15504
import _mod15494 from "module_15494" /* 15494 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15497 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15494.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
