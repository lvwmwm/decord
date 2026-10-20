// Module ID: 15328
// Function ID: 15329
// Name: SupportedLocales
// Dependencies: [15277, 15284, 15311]
// Exports: SupportedLocales

// Module 15328 (SupportedLocales)
import _mod15277 from "module_15277" /* 15277 */;
import GetOption from "GetOption" /* 15284 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15311 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod15277.ToObject(arg2);
    str = GetOption.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return LookupSupportedLocales.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return LookupSupportedLocales.LookupSupportedLocales(Array.from(arg0), arg1);
  }
};
