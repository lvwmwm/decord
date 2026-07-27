// Module ID: 13253
// Function ID: 102011
// Name: __exportStarResult31
// Dependencies: [13202, 13209, 13236]

// Module 13253 (__exportStarResult31)
const require = arg1;
const dependencyMap = arg6;
arg5.SupportedLocales = function SupportedLocales(arg0, arg1, arg2) {
  let str = "best fit";
  if (undefined !== arg2) {
    const ToObjectResult = require(13202) /* __exportStarResult32 */.ToObject(arg2);
    str = require(13209) /* __exportStarResult4 */.GetOption(ToObjectResult, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
  }
  if ("best fit" === str) {
    const _Array2 = Array;
    return require(13236) /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  } else {
    const _Array = Array;
    return require(13236) /* match */.LookupSupportedLocales(Array.from(arg0), arg1);
  }
};
