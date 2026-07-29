// Module ID: 13305
// Function ID: 13306
// Name: LookupMatcher
// Dependencies: [13306, 13309]

// Module 13305 (LookupMatcher)
const require = arg1;
const dependencyMap = arg6;
arg5.LookupMatcher = function LookupMatcher(arg0, arg1, arg2) {
  const obj = { locale: "" };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(require(13306) /* isMatched */.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    const BestAvailableLocaleResult = require(13309) /* BestAvailableLocale */.BestAvailableLocale(arg0, replaced);
    while (!BestAvailableLocaleResult) {
      num = num + 1;
    }
    obj.locale = BestAvailableLocaleResult;
    if (arg1[num] !== replaced) {
      obj.extension = str.slice(replaced.length, str.length);
    }
    return obj;
  }
  obj.locale = arg2();
  return obj;
};
