// Module ID: 16214
// Function ID: 16215
// Name: LookupMatcher
// Dependencies: [16215, 16218]
// Exports: LookupMatcher

// Module 16214 (LookupMatcher)
import _mod16215 from "module_16215" /* 16215 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16218 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod16215.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
