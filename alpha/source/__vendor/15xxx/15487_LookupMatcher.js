// Module ID: 15487
// Function ID: 15488
// Name: LookupMatcher
// Dependencies: [15488, 15491]
// Exports: LookupMatcher

// Module 15487 (LookupMatcher)
import _mod15488 from "module_15488" /* 15488 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15491 */;


export const LookupMatcher = function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15488.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
