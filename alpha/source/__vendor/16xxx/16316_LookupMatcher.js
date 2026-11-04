// Module ID: 16316
// Function ID: 16317
// Name: LookupMatcher
// Dependencies: [16317, 16320]
// Exports: LookupMatcher

// Module 16316 (LookupMatcher)
import _mod16317 from "module_16317" /* 16317 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16320 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod16317.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
}
