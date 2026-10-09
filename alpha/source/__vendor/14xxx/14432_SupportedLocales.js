// Module ID: 14432
// Function ID: 14433
// Name: SupportedLocales
// Dependencies: [14381, 14388, 14415]
// Exports: SupportedLocales

// Module 14432 (SupportedLocales)
import _mod14381 from "module_14381" /* 14381 */;
import GetOption from "GetOption" /* 14388 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14415 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod14381.ToObject(arg2);
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
