// Module ID: 15164
// Function ID: 15165
// Name: SupportedLocales
// Dependencies: [15113, 15120, 15147]
// Exports: SupportedLocales

// Module 15164 (SupportedLocales)
import _mod15113 from "module_15113" /* 15113 */;
import GetOption from "GetOption" /* 15120 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15147 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod15113.ToObject(arg2);
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
