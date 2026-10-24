// Module ID: 15483
// Function ID: 15484
// Name: LookupMatcher
// Dependencies: [15484, 15487]
// Exports: LookupMatcher

// Module 15483 (LookupMatcher)
import _mod15484 from "module_15484" /* 15484 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15487 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15484.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
