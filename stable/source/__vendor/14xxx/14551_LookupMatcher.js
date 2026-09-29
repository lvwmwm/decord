// Module ID: 14551
// Function ID: 14552
// Name: LookupMatcher
// Dependencies: [14552, 14555]
// Exports: LookupMatcher

// Module 14551 (LookupMatcher)
import _mod14552 from "module_14552" /* 14552 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14555 */;

require = arg1;
const dependencyMap = arg6;

export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: "" };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod14552.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
