// Module ID: 16327
// Function ID: 16328
// Dependencies: [16317, 16320]
// Exports: LookupSupportedLocales

// Module 16327
import _mod16317 from "module_16317" /* 16317 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16320 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16317.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
