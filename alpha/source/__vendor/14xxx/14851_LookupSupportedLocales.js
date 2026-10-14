// Module ID: 14851
// Function ID: 14852
// Name: LookupSupportedLocales
// Dependencies: [14852, 14863, 14864]
// Exports: match

// Module 14851 (LookupSupportedLocales)
import _mod14863 from "module_14863" /* 14863 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod14863.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_14864").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
