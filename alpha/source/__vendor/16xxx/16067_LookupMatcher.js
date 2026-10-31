// Module ID: 16067
// Function ID: 16068
// Name: LookupMatcher
// Dependencies: [16068, 16071]
// Exports: LookupMatcher

// Module 16067 (LookupMatcher)
import _mod16068 from "module_16068" /* 16068 */;
import BestAvailableLocale from "BestAvailableLocale" /* 16071 */;


export function LookupMatcher(arg0, arg1, fn) {
  const obj = { locale: fn() };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(_mod16068.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
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
