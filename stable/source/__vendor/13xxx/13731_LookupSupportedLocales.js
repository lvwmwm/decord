// Module ID: 13731
// Function ID: 13732
// Name: LookupSupportedLocales
// Dependencies: [13732, 13743, 13744]
// Exports: match

// Module 13731 (LookupSupportedLocales)
import _mod13743 from "module_13743" /* 13743 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod13743.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_13744").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
