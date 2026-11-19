// Module ID: 15405
// Function ID: 15406
// Dependencies: [15395, 15398]
// Exports: LookupSupportedLocales

// Module 15405
import _mod15395 from "module_15395" /* 15395 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15398 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15395.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
