// Module ID: 15265
// Function ID: 15266
// Name: LookupSupportedLocales
// Dependencies: [15266, 15277, 15278]
// Exports: match

// Module 15265 (LookupSupportedLocales)
import _mod15277 from "module_15277" /* 15277 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15277.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15278").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
