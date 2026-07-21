// Module ID: 13052
// Function ID: 99320
// Name: LookupMatcher
// Dependencies: [13084, 13085]

// Module 13052 (LookupMatcher)
arg5.LookupMatcher = function LookupMatcher(arg0, arg1, arg2) {
  const obj = { locale: "" };
  let num = 0;
  if (0 < arg1.length) {
    const replaced = str.replace(arg1(arg6[0]).UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    const BestAvailableLocaleResult = arg1(arg6[1]).BestAvailableLocale(arg0, replaced);
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
