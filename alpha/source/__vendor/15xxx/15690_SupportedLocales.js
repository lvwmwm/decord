// Module ID: 15690
// Function ID: 15691
// Name: SupportedLocales
// Dependencies: [15639, 15646, 15673]
// Exports: SupportedLocales

// Module 15690 (SupportedLocales)
import ToString from "ToString" /* 15639 */;
import GetOption from "GetOption" /* 15646 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15673 */;


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
