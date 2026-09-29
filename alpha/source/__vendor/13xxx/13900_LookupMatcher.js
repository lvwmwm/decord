// Module ID: 13900
// Function ID: 13901
// Name: LookupMatcher
// Dependencies: [13901, 13904]
// Exports: LookupMatcher

// Module 13900 (LookupMatcher)
import _mod13901 from "module_13901" /* 13901 */;
import BestAvailableLocale from "BestAvailableLocale" /* 13904 */;

require = arg1;
const dependencyMap = arg6;

export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: "" };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod13901.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
