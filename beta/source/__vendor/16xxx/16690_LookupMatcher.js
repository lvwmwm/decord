// Module ID: 16690
// Function ID: 16691
// Name: LookupMatcher
// Dependencies: [16691, 16694]
// Exports: LookupMatcher

// Module 16690 (LookupMatcher)
import _mod16691 from "module_16691" /* 16691 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16694 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod16691.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
