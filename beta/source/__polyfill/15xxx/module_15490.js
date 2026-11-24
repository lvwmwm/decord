// Module ID: 15490
// Function ID: 15491
// Dependencies: [15480, 15483]
// Exports: LookupSupportedLocales

// Module 15490
import _mod15480 from "module_15480" /* 15480 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15483 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15480.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
