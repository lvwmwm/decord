// Module ID: 13444
// Function ID: 13445
// Name: __exportStarResult31
// Dependencies: [13393, 13400, 13427]

// Module 13444 (__exportStarResult31)
const require = arg1;
const dependencyMap = arg6;
arg5.SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = require(13393) /* __exportStarResult32 */.ToObject(arg2);
    str = require(13400) /* __exportStarResult4 */.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return require(13427) /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return require(13427) /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  }
};
