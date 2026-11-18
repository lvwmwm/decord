// Module ID: 15406
// Function ID: 15407
// Name: LookupSupportedLocales
// Dependencies: [15407, 15418, 15419]
// Exports: match

// Module 15406 (LookupSupportedLocales)
import _mod15418 from "module_15418" /* 15418 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15418.CanonicalizeLocaleList(arg0);
  let str;
  if (null != algorithm) {
    str = algorithm.algorithm;
  }
  if (!str) {
    str = "best fit";
  }
  const obj = { localeMatcher: str };
  return ResolveLocale(arg1, result, obj, [], {}, () => closure_0).locale;
}
export const LookupSupportedLocales = require("module_15419").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
