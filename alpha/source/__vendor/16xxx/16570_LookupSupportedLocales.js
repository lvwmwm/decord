// Module ID: 16570
// Function ID: 16571
// Name: LookupSupportedLocales
// Dependencies: [16571, 16582, 16583]
// Exports: match

// Module 16570 (LookupSupportedLocales)
import _mod16582 from "module_16582" /* 16582 */;

const require = globalThis.__r;


export function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod16582.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_16583").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
