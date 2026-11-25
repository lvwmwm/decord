// Module ID: 15635
// Function ID: 15636
// Dependencies: [15625, 15628]
// Exports: LookupSupportedLocales

// Module 15635
import _mod15625 from "module_15625" /* 15625 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15628 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15625.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
