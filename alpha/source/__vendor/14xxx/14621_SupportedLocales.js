// Module ID: 14621
// Function ID: 14622
// Name: SupportedLocales
// Dependencies: [14570, 14577, 14604]
// Exports: SupportedLocales

// Module 14621 (SupportedLocales)
import _mod14570 from "module_14570" /* 14570 */;
import GetOption from "GetOption" /* 14577 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14604 */;

require = arg1;
const dependencyMap = arg6;

export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod14570.ToObject(arg2);
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
