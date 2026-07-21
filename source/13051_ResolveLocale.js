// Module ID: 13051
// Function ID: 99316
// Name: ResolveLocale
// Dependencies: []

// Module 13051 (ResolveLocale)
arg5.ResolveLocale = function ResolveLocale(arg0, arg1, localeMatcher) {
  let length;
  arg1 = localeMatcher;
  if ("lookup" === localeMatcher.localeMatcher) {
    const _Array2 = Array;
    let LookupMatcherResult = arg1(arg6[0]).LookupMatcher(Array.from(arg0), arg1, arg5);
  } else {
    const _Array = Array;
    LookupMatcherResult = arg1(arg6[1]).BestFitMatcher(Array.from(arg0), arg1, arg5);
  }
  if (null == LookupMatcherResult) {
    let obj = { locale: arg5(), extension: "" };
    LookupMatcherResult = obj;
  }
  const locale = LookupMatcherResult.locale;
  let closure_3 = arg4[locale];
  obj = { locale: "en", dataLocale: locale };
  if (LookupMatcherResult.extension) {
    let keywords = arg1(arg6[2]).UnicodeExtensionComponents(LookupMatcherResult.extension).keywords;
  } else {
    keywords = [];
  }
  const items = [];
  let num4 = 0;
  if (0 < arg3.length) {
    do {
      let tmp10Result = tmp10(arg3[num4]);
      num4 = num4 + 1;
      length = arg3.length;
    } while (num4 < length);
  }
  let result = locale;
  if (items.length > 0) {
    result = arg1(arg6[5]).InsertUnicodeExtensionAndCanonicalize(locale, [], items);
  }
  obj.locale = result;
  return obj;
};
