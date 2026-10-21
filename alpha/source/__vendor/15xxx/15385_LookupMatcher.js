// Module ID: 15385
// Function ID: 15386
// Name: LookupMatcher
// Dependencies: [15386, 15389]
// Exports: LookupMatcher

// Module 15385 (LookupMatcher)
import _mod15386 from "module_15386" /* 15386 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15389 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15386.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
