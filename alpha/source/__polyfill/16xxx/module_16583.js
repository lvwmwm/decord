// Module ID: 16583
// Function ID: 16584
// Dependencies: [16573, 16576]
// Exports: LookupSupportedLocales

// Module 16583
import _mod16573 from "module_16573" /* 16573 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16576 */;


export function LookupSupportedLocales(arg0, arg1) {
  let num;
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod16573.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
}
