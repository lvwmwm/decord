// Module ID: 13281
// Function ID: 102137
// Name: ResolveLocale
// Dependencies: [13282, 13287, 13288, 13283, 13289, 13290]

// Module 13281 (ResolveLocale)
const require = arg1;
const dependencyMap = arg6;
arg5.ResolveLocale = function ResolveLocale(arg0, arg1, localeMatcher) {
  let length;
  const _require = localeMatcher;
  if ("lookup" === localeMatcher.localeMatcher) {
    const _Array2 = Array;
    let LookupMatcherResult = _require(13282).LookupMatcher(Array.from(arg0), arg1, arg5);
  } else {
    let _Array = Array;
    LookupMatcherResult = _require(13287).BestFitMatcher(Array.from(arg0), arg1, arg5);
  }
  if (null == LookupMatcherResult) {
    let obj = { locale: arg5(), extension: "" };
    LookupMatcherResult = obj;
  }
  const locale = LookupMatcherResult.locale;
  let closure_3 = arg4[locale];
  obj = { locale: "en", dataLocale: locale };
  if (LookupMatcherResult.extension) {
    let keywords = _require(13288).UnicodeExtensionComponents(LookupMatcherResult.extension).keywords;
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
    result = _require(13290).InsertUnicodeExtensionAndCanonicalize(locale, [], items);
  }
  obj.locale = result;
  return obj;
};
