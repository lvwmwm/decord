// Module ID: 16740
// Function ID: 16741
// Name: SupportedLocales
// Dependencies: [16689, 16696, 16723]
// Exports: SupportedLocales

// Module 16740 (SupportedLocales)
import ToString from "ToString" /* 16689 */;
import GetOption from "GetOption" /* 16696 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16723 */;


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
