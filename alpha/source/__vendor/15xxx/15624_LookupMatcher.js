// Module ID: 15624
// Function ID: 15625
// Name: LookupMatcher
// Dependencies: [15625, 15628]
// Exports: LookupMatcher

// Module 15624 (LookupMatcher)
import _mod15625 from "module_15625" /* 15625 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15628 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15625.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
