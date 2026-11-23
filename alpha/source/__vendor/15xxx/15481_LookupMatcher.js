// Module ID: 15481
// Function ID: 15482
// Name: LookupMatcher
// Dependencies: [15482, 15485]
// Exports: LookupMatcher

// Module 15481 (LookupMatcher)
import _mod15482 from "module_15482" /* 15482 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15485 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15482.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
