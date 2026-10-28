// Module ID: 15750
// Function ID: 15751
// Name: LookupMatcher
// Dependencies: [15751, 15754]
// Exports: LookupMatcher

// Module 15750 (LookupMatcher)
import _mod15751 from "module_15751" /* 15751 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15754 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15751.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
