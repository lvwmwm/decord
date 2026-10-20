// Module ID: 15310
// Function ID: 15311
// Name: SupportedLocales
// Dependencies: [15259, 15266, 15293]
// Exports: SupportedLocales

// Module 15310 (SupportedLocales)
import _mod15259 from "module_15259" /* 15259 */;
import GetOption from "GetOption" /* 15266 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15293 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod15259.ToObject(arg2);
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
