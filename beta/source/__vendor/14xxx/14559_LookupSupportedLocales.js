// Module ID: 14559
// Function ID: 14560
// Name: LookupSupportedLocales
// Dependencies: [14560, 14571, 14572]
// Exports: match

// Module 14559 (LookupSupportedLocales)
import _mod14571 from "module_14571" /* 14571 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod14571.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_14572").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
