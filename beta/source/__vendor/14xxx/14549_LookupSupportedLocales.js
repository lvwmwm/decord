// Module ID: 14549
// Function ID: 14550
// Name: LookupSupportedLocales
// Dependencies: [14550, 14561, 14562]
// Exports: match

// Module 14549 (LookupSupportedLocales)
import _mod14561 from "module_14561" /* 14561 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod14561.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_14562").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
