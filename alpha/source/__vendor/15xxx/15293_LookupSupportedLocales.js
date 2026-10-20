// Module ID: 15293
// Function ID: 15294
// Name: LookupSupportedLocales
// Dependencies: [15294, 15305, 15306]
// Exports: match

// Module 15293 (LookupSupportedLocales)
import _mod15305 from "module_15305" /* 15305 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15305.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15306").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
