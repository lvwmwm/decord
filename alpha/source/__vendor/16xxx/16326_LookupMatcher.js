// Module ID: 16326
// Function ID: 16327
// Name: LookupMatcher
// Dependencies: [16327, 16330]
// Exports: LookupMatcher

// Module 16326 (LookupMatcher)
import _mod16327 from "module_16327" /* 16327 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16330 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod16327.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
