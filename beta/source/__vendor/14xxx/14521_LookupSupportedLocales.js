// Module ID: 14521
// Function ID: 14522
// Name: LookupSupportedLocales
// Dependencies: [14522, 14533, 14534]
// Exports: match

// Module 14521 (LookupSupportedLocales)
import _mod14533 from "module_14533" /* 14533 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod14533.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_14534").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
