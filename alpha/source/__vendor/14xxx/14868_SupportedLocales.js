// Module ID: 14868
// Function ID: 14869
// Name: SupportedLocales
// Dependencies: [14817, 14824, 14851]
// Exports: SupportedLocales

// Module 14868 (SupportedLocales)
import _mod14817 from "module_14817" /* 14817 */;
import GetOption from "GetOption" /* 14824 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14851 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod14817.ToObject(arg2);
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
