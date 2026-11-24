// Module ID: 15502
// Function ID: 15503
// Name: LookupMatcher
// Dependencies: [15503, 15506]
// Exports: LookupMatcher

// Module 15502 (LookupMatcher)
import _mod15503 from "module_15503" /* 15503 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15506 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15503.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
