// Module ID: 16082
// Function ID: 16083
// Dependencies: [16072, 16075]
// Exports: LookupSupportedLocales

// Module 16082
import _mod16072 from "module_16072" /* 16072 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16075 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16072.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
