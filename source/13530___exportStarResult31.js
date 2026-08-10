// Module ID: 13530
// Function ID: 13531
// Name: __exportStarResult31
// Dependencies: [13479, 13486, 13513]

// Module 13530 (__exportStarResult31)
const require = arg1;
const dependencyMap = arg6;
arg5.SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = require(13479) /* __exportStarResult32 */.ToObject(arg2);
    str = require(13486) /* __exportStarResult4 */.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return require(13513) /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return require(13513) /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  }
};
