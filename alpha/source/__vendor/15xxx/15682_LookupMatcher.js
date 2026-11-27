// Module ID: 15682
// Function ID: 15683
// Name: LookupMatcher
// Dependencies: [15683, 15686]
// Exports: LookupMatcher

// Module 15682 (LookupMatcher)
import _mod15683 from "module_15683" /* 15683 */;
import BestAvailableLocale from "BestAvailableLocale" /* 15686 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod15683.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
