// Module ID: 13729
// Function ID: 13730
// Name: LookupSupportedLocales
// Dependencies: [13730, 13741, 13742]
// Exports: match

// Module 13729 (LookupSupportedLocales)
import _mod13741 from "module_13741" /* 13741 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod13741.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_13742").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
