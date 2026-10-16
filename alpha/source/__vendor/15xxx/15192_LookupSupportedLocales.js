// Module ID: 15192
// Function ID: 15193
// Name: LookupSupportedLocales
// Dependencies: [15193, 15204, 15205]
// Exports: match

// Module 15192 (LookupSupportedLocales)
import _mod15204 from "module_15204" /* 15204 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15204.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15205").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
