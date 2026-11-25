// Module ID: 15622
// Function ID: 15623
// Name: LookupSupportedLocales
// Dependencies: [15623, 15634, 15635]
// Exports: match

// Module 15622 (LookupSupportedLocales)
import _mod15634 from "module_15634" /* 15634 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15634.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15635").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
