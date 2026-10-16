// Module ID: 15182
// Function ID: 15183
// Name: LookupSupportedLocales
// Dependencies: [15183, 15194, 15195]
// Exports: match

// Module 15182 (LookupSupportedLocales)
import _mod15194 from "module_15194" /* 15194 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15194.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15195").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
