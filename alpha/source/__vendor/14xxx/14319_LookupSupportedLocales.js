// Module ID: 14319
// Function ID: 14320
// Name: LookupSupportedLocales
// Dependencies: [14320, 14331, 14332]
// Exports: match

// Module 14319 (LookupSupportedLocales)
import _mod14331 from "module_14331" /* 14331 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod14331.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_14332").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
