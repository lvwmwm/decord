// Module ID: 15263
// Function ID: 15264
// Name: LookupMatcher
// Dependencies: [15264, 15267]
// Exports: LookupMatcher

// Module 15263 (LookupMatcher)
import _mod15264 from "module_15264" /* 15264 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15267 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15264.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
