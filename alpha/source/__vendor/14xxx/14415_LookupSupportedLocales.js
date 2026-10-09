// Module ID: 14415
// Function ID: 14416
// Name: LookupSupportedLocales
// Dependencies: [14416, 14427, 14428]
// Exports: match

// Module 14415 (LookupSupportedLocales)
import _mod14427 from "module_14427" /* 14427 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod14427.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_14428").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
