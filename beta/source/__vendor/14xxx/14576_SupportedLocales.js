// Module ID: 14576
// Function ID: 14577
// Name: SupportedLocales
// Dependencies: [14525, 14532, 14559]
// Exports: SupportedLocales

// Module 14576 (SupportedLocales)
import _mod14525 from "module_14525" /* 14525 */;
import GetOption from "GetOption" /* 14532 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14559 */;

require = arg1;
const dependencyMap = arg6;

export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod14525.ToObject(arg2);
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
