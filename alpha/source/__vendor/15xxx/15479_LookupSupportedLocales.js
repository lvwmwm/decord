// Module ID: 15479
// Function ID: 15480
// Name: LookupSupportedLocales
// Dependencies: [15480, 15491, 15492]
// Exports: match

// Module 15479 (LookupSupportedLocales)
import _mod15491 from "module_15491" /* 15491 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15491.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15492").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
