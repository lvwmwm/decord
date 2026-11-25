// Module ID: 15504
// Function ID: 15505
// Name: SupportedLocales
// Dependencies: [15453, 15460, 15487]
// Exports: SupportedLocales

// Module 15504 (SupportedLocales)
import ToString from "ToString" /* 15453 */;
import GetOption from "GetOption" /* 15460 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15487 */;


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
