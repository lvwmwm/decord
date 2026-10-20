// Module ID: 15311
// Function ID: 15312
// Name: LookupSupportedLocales
// Dependencies: [15312, 15323, 15324]
// Exports: match

// Module 15311 (LookupSupportedLocales)
import _mod15323 from "module_15323" /* 15323 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15323.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15324").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
