// Module ID: 15400
// Function ID: 15401
// Name: SupportedLocales
// Dependencies: [15349, 15356, 15383]
// Exports: SupportedLocales

// Module 15400 (SupportedLocales)
import _mod15349 from "module_15349" /* 15349 */;
import GetOption from "GetOption" /* 15356 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15383 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod15349.ToObject(arg2);
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
