// Module ID: 15429
// Function ID: 15430
// Name: LookupMatcher
// Dependencies: [15430, 15433]
// Exports: LookupMatcher

// Module 15429 (LookupMatcher)
import _mod15430 from "module_15430" /* 15430 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15433 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15430.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
};
