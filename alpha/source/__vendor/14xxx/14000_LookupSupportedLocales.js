// Module ID: 14000
// Function ID: 14001
// Name: LookupSupportedLocales
// Dependencies: [14001, 14012, 14013]
// Exports: match

// Module 14000 (LookupSupportedLocales)
import _mod14012 from "module_14012" /* 14012 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod14012.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_14013").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
