// Module ID: 13925
// Function ID: 13926
// Name: LookupSupportedLocales
// Dependencies: [13926, 13937, 13938]
// Exports: match

// Module 13925 (LookupSupportedLocales)
import _mod13937 from "module_13937" /* 13937 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod13937.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_13938").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
