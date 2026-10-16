// Module ID: 15194
// Function ID: 15195
// Name: LookupMatcher
// Dependencies: [15195, 15198]
// Exports: LookupMatcher

// Module 15194 (LookupMatcher)
import _mod15195 from "module_15195" /* 15195 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15198 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15195.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
