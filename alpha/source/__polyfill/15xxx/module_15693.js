// Module ID: 15693
// Function ID: 15694
// Dependencies: [15683, 15686]
// Exports: LookupSupportedLocales

// Module 15693
import _mod15683 from "module_15683" /* 15683 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15686 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod15683.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
