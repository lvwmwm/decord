// Module ID: 13915
// Function ID: 13916
// Name: SupportedLocales
// Dependencies: [13864, 13871, 13898]
// Exports: SupportedLocales

// Module 13915 (SupportedLocales)
import _mod13864 from "module_13864" /* 13864 */;
import GetOption from "GetOption" /* 13871 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 13898 */;

require = arg1;
const dependencyMap = arg6;

export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod13864.ToObject(arg2);
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
