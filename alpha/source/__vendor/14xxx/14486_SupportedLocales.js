// Module ID: 14486
// Function ID: 14487
// Name: SupportedLocales
// Dependencies: [14435, 14442, 14469]
// Exports: SupportedLocales

// Module 14486 (SupportedLocales)
import _mod14435 from "module_14435" /* 14435 */;
import GetOption from "GetOption" /* 14442 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14469 */;


export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod14435.ToObject(arg2);
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
