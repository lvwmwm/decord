// Module ID: 16384
// Function ID: 16385
// Name: LookupMatcher
// Dependencies: [16385, 16388]
// Exports: LookupMatcher

// Module 16384 (LookupMatcher)
import _mod16385 from "module_16385" /* 16385 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16388 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod16385.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
