// Module ID: 14813
// Function ID: 14814
// Name: LookupSupportedLocales
// Dependencies: [14814, 14825, 14826]
// Exports: match

// Module 14813 (LookupSupportedLocales)
import _mod14825 from "module_14825" /* 14825 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod14825.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_14826").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
