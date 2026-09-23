// Module ID: 14604
// Function ID: 14605
// Name: LookupSupportedLocales
// Dependencies: [14605, 14616, 14617]
// Exports: match

// Module 14604 (LookupSupportedLocales)
import _mod14616 from "module_14616" /* 14616 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export const match = function match(arg0, arg1, arg2, algorithm) {
  closure_0 = arg2;
  const result = _mod14616.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  return require("ResolveLocale").ResolveLocale(arg1, result, { localeMatcher: str }, [], {}, () => closure_0).locale;
};
export const LookupSupportedLocales = require("module_14617").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
