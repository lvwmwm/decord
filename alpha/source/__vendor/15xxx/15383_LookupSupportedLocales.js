// Module ID: 15383
// Function ID: 15384
// Name: LookupSupportedLocales
// Dependencies: [15384, 15395, 15396]
// Exports: match

// Module 15383 (LookupSupportedLocales)
import _mod15395 from "module_15395" /* 15395 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15395.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15396").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
