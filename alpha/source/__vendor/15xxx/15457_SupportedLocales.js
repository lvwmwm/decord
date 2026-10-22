// Module ID: 15457
// Function ID: 15458
// Name: SupportedLocales
// Dependencies: [15406, 15413, 15440]
// Exports: SupportedLocales

// Module 15457 (SupportedLocales)
import _mod15406 from "module_15406" /* 15406 */;
import GetOption from "GetOption" /* 15413 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15440 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod15406.ToObject(arg2);
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
