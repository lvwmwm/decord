// Module ID: 15496
// Function ID: 15497
// Name: SupportedLocales
// Dependencies: [15445, 15452, 15479]
// Exports: SupportedLocales

// Module 15496 (SupportedLocales)
import ToString from "ToString" /* 15445 */;
import GetOption from "GetOption" /* 15452 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15479 */;


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
