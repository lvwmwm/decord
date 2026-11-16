// Module ID: 16688
// Function ID: 16689
// Name: LookupSupportedLocales
// Dependencies: [16689, 16700, 16701]
// Exports: match

// Module 16688 (LookupSupportedLocales)
import _mod16700 from "module_16700" /* 16700 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16700.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  const obj = { localeMatcher: str };
  return ResolveLocale(arg1, result, obj, [], {}, () => closure_0).locale;
}
export const LookupSupportedLocales = require("module_16701").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
