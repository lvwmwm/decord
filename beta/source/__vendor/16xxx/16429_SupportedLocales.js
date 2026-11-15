// Module ID: 16429
// Function ID: 16430
// Name: SupportedLocales
// Dependencies: [16378, 16385, 16412]
// Exports: SupportedLocales

// Module 16429 (SupportedLocales)
import ToString from "ToString" /* 16378 */;
import GetOption from "GetOption" /* 16385 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 16412 */;


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
