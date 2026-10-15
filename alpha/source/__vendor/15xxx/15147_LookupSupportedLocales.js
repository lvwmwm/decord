// Module ID: 15147
// Function ID: 15148
// Name: LookupSupportedLocales
// Dependencies: [15148, 15159, 15160]
// Exports: match

// Module 15147 (LookupSupportedLocales)
import _mod15159 from "module_15159" /* 15159 */;

const require = globalThis.__r;


export const match = function match(arg0, arg1, arg2, algorithm) {
  let closure_0 = arg2;
  const ResolveLocale = require("ResolveLocale").ResolveLocale;
  const result = _mod15159.CanonicalizeLocaleList(arg0);
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
export const LookupSupportedLocales = require("module_15160").LookupSupportedLocales;
export const ResolveLocale = require("ResolveLocale").ResolveLocale;
