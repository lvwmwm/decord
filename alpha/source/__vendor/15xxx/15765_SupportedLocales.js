// Module ID: 15765
// Function ID: 15766
// Name: SupportedLocales
// Dependencies: [15714, 15721, 15748]
// Exports: SupportedLocales

// Module 15765 (SupportedLocales)
import _mod15714 from "module_15714" /* 15714 */;
import GetOption from "GetOption" /* 15721 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15748 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod15714.ToObject(arg2);
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
