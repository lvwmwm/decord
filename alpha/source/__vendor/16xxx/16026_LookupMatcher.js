// Module ID: 16026
// Function ID: 16027
// Name: LookupMatcher
// Dependencies: [16027, 16030]
// Exports: LookupMatcher

// Module 16026 (LookupMatcher)
import _mod16027 from "module_16027" /* 16027 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16030 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod16027.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
