// Module ID: 13065
// Function ID: 99341
// Name: SupportedLocales
// Dependencies: [0, 4294967295, 0]

// Module 13065 (SupportedLocales)
arg5.SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = arg1(arg6[0]).ToObject(arg2);
    str = arg1(arg6[1]).GetOption(ToObjectResult, "localeMatcher", "string", [-1806852539, 688836880], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return arg1(arg6[2]).LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return arg1(arg6[2]).LookupSupportedLocales(Array.from(arg0), arg1);
  }
};
