// Module ID: 14499
// Function ID: 14500
// Name: LookupMatcher
// Dependencies: [14500, 14503]
// Exports: LookupMatcher

// Module 14499 (LookupMatcher)
import _mod14500 from "module_14500" /* 14500 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14503 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod14500.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
