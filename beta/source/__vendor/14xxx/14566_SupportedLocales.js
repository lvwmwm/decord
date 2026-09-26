// Module ID: 14566
// Function ID: 14567
// Name: SupportedLocales
// Dependencies: [14515, 14522, 14549]
// Exports: SupportedLocales

// Module 14566 (SupportedLocales)
import _mod14515 from "module_14515" /* 14515 */;
import GetOption from "GetOption" /* 14522 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14549 */;

require = arg1;
const dependencyMap = arg6;

export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod14515.ToObject(arg2);
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
