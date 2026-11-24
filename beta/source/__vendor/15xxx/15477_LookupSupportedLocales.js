// Module ID: 15477
// Function ID: 15478
// Name: LookupSupportedLocales
// Dependencies: [15478, 15489, 15490]
// Exports: match

// Module 15477 (LookupSupportedLocales)
import _mod15489 from "module_15489" /* 15489 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15489.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15490").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
