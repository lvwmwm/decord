// Module ID: 14524
// Function ID: 14525
// Name: LookupSupportedLocales
// Dependencies: [14525, 14536, 14537]
// Exports: match

// Module 14524 (LookupSupportedLocales)
import _mod14536 from "module_14536" /* 14536 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod14536.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_14537").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
