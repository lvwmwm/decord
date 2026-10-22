// Module ID: 15427
// Function ID: 15428
// Name: LookupSupportedLocales
// Dependencies: [15428, 15439, 15440]
// Exports: match

// Module 15427 (LookupSupportedLocales)
import _mod15439 from "module_15439" /* 15439 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15439.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  const obj = { localeMatcher: str };
  return ResolveLocale(arg1, result, obj, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_15440").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
