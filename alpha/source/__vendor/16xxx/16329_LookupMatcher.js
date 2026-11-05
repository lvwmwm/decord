// Module ID: 16329
// Function ID: 16330
// Name: LookupMatcher
// Dependencies: [16330, 16333]
// Exports: LookupMatcher

// Module 16329 (LookupMatcher)
import _mod16330 from "module_16330" /* 16330 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16333 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod16330.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    const BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    while (!BestAvailableLocaleResult) {
      num = num + 1;
    }
    obj.locale = BestAvailableLocaleResult;
    if (arg1[num] !== replaced) {
      obj.extension = arg1[num].slice(replaced.length, arg1[num].length);
    }
    return obj;
  }
  return obj;
}
