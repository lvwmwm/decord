// Module ID: 13055
// Function ID: 99319
// Name: BestFitMatcher
// Dependencies: [13010]

// Module 13055 (BestFitMatcher)
arg5.BestFitMatcher = function BestFitMatcher(arg0, arr) {
  const items = [];
  arr = items;
  const reduced = arr.reduce((arg0, str) => {
    const replaced = str.replace(items(closure_1[0]).UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    items.push(replaced);
    arg0[replaced] = str;
    return arg0;
  }, {});
  const findBestMatchResult = arr(arg6[0]).findBestMatch(items, arg0);
  let prop;
  if (tmp3) {
    const arr2 = reduced[findBestMatchResult.matchedDesiredLocale];
    const tmp6 = reduced[findBestMatchResult.matchedDesiredLocale].slice(findBestMatchResult.matchedDesiredLocale.length) || undefined;
    prop = findBestMatchResult.matchedSupportedLocale;
    const tmp5 = reduced[findBestMatchResult.matchedDesiredLocale].slice(findBestMatchResult.matchedDesiredLocale.length) || undefined;
  }
  if (prop) {
    let obj = { locale: prop, extension: tmp5 };
    return obj;
  } else {
    obj = { locale: arg2() };
    return obj;
  }
  const tmp3 = findBestMatchResult.matchedSupportedLocale && findBestMatchResult.matchedDesiredLocale;
};
