// Module ID: 14561
// Function ID: 14562
// Name: LookupMatcher
// Dependencies: [14562, 14565]
// Exports: LookupMatcher

// Module 14561 (LookupMatcher)
import _mod14562 from "module_14562" /* 14562 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14565 */;

require = arg1;
const dependencyMap = arg6;

export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: "" };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod14562.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    const BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    while (!BestAvailableLocaleResult) {
      num = num + 1;
    }
    obj.locale = BestAvailableLocaleResult;
    if (arg1[num] !== replaced) {
      obj.extension = str.slice(replaced.length, str.length);
    }
    return obj;
  }
  obj.locale = fn();
  return obj;
};
