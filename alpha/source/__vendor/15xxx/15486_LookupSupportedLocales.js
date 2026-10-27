// Module ID: 15486
// Function ID: 15487
// Name: LookupSupportedLocales
// Dependencies: [15487, 15498, 15499]
// Exports: match

// Module 15486 (LookupSupportedLocales)
import _mod15498 from "module_15498" /* 15498 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15498.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15499").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
