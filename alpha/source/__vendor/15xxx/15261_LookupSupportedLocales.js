// Module ID: 15261
// Function ID: 15262
// Name: LookupSupportedLocales
// Dependencies: [15262, 15273, 15274]
// Exports: match

// Module 15261 (LookupSupportedLocales)
import _mod15273 from "module_15273" /* 15273 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15273.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15274").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
