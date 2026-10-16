// Module ID: 15199
// Function ID: 15200
// Name: SupportedLocales
// Dependencies: [15148, 15155, 15182]
// Exports: SupportedLocales

// Module 15199 (SupportedLocales)
import _mod15148 from "module_15148" /* 15148 */;
import GetOption from "GetOption" /* 15155 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15182 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod15148.ToObject(arg2);
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
