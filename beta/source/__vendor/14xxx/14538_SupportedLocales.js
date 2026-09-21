// Module ID: 14538
// Function ID: 14539
// Name: SupportedLocales
// Dependencies: [14487, 14494, 14521]
// Exports: SupportedLocales

// Module 14538 (SupportedLocales)
import _mod14487 from "module_14487" /* 14487 */;
import GetOption from "GetOption" /* 14494 */;
import LookupSupportedLocales from "LookupSupportedLocales" /* 14521 */;

require = arg1;
const dependencyMap = arg6;

export const SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = _mod14487.ToObject(arg2);
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
