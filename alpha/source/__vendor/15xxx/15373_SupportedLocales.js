// Module ID: 15373
// Function ID: 15374
// Name: SupportedLocales
// Dependencies: [15322, 15329, 15356]
// Exports: SupportedLocales

// Module 15373 (SupportedLocales)
import ToString from "ToString" /* 15322 */;
import GetOption from "GetOption" /* 15329 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 15356 */;


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
