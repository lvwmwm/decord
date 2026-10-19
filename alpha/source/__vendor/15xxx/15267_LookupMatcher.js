// Module ID: 15267
// Function ID: 15268
// Name: LookupMatcher
// Dependencies: [15268, 15271]
// Exports: LookupMatcher

// Module 15267 (LookupMatcher)
import _mod15268 from "module_15268" /* 15268 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15271 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15268.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
