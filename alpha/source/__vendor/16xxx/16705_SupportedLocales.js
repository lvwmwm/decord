// Module ID: 16705
// Function ID: 16706
// Name: SupportedLocales
// Dependencies: [16654, 16661, 16688]
// Exports: SupportedLocales

// Module 16705 (SupportedLocales)
import ToString from "ToString" /* 16654 */;
import GetOption from "GetOption" /* 16661 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16688 */;


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
