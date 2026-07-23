// Module ID: 13172
// Function ID: 101505
// Name: ResolveLocale
// Dependencies: [13173, 13178, 13179, 13174, 13180, 13181]

// Module 13172 (ResolveLocale)
const require = arg1;
const dependencyMap = arg6;
arg5.ResolveLocale = function ResolveLocale(arg0, arg1, localeMatcher) {
  let length;
  const _require = localeMatcher;
  if ("lookup" === localeMatcher.localeMatcher) {
    const _Array2 = Array;
    let LookupMatcherResult = _require(13173).LookupMatcher(Array.from(arg0), arg1, arg5);
  } else {
    let _Array = Array;
    LookupMatcherResult = _require(13178).BestFitMatcher(Array.from(arg0), arg1, arg5);
  }
  if (null == LookupMatcherResult) {
    let obj = { locale: arg5(), extension: "" };
    LookupMatcherResult = obj;
  }
  const locale = LookupMatcherResult.locale;
  let closure_3 = arg4[locale];
  obj = { locale: "en", dataLocale: locale };
  if (LookupMatcherResult.extension) {
    let keywords = _require(13179).UnicodeExtensionComponents(LookupMatcherResult.extension).keywords;
  } else {
    keywords = [];
  }
  let items = [];
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
    result = _require(13181).InsertUnicodeExtensionAndCanonicalize(locale, [], items);
  }
  obj.locale = result;
  return obj;
};
