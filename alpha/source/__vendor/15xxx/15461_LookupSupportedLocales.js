// Module ID: 15461
// Function ID: 15462
// Name: LookupSupportedLocales
// Dependencies: [15462, 15473, 15474]
// Exports: match

// Module 15461 (LookupSupportedLocales)
import _mod15473 from "module_15473" /* 15473 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15473.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15474").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
