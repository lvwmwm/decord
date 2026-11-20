// Module ID: 16707
// Function ID: 16708
// Name: SupportedLocales
// Dependencies: [16656, 16663, 16690]
// Exports: SupportedLocales

// Module 16707 (SupportedLocales)
import ToString from "ToString" /* 16656 */;
import GetOption from "GetOption" /* 16663 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16690 */;


export function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = ToString.ToObject(arg2);
    str = GetOption.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return LookupSupportedLocales.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return LookupSupportedLocales.LookupSupportedLocales(Array.from(arg0), arg1);
  }
}
