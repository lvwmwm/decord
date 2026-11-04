// Module ID: 16321
// Function ID: 16322
// Name: BestFitMatcher
// Dependencies: [16317]
// Exports: BestFitMatcher

// Module 16321 (BestFitMatcher)
import _mod16317 from "module_16317" /* 16317 */;


export function BestFitMatcher(arg0, arr, fn) {
  let tmp4;
  const items = [];
  const reduced = arr.reduce((acc, item) => {
    const replaced = item.replace(_mod16317.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    items.push(replaced);
    acc[replaced] = item;
    return acc;
  }, {});
  const findBestMatchResult = items(16317).findBestMatch(items, arg0);
  let tmp5;
  const tmp3 = findBestMatchResult.matchedSupportedLocale && findBestMatchResult.matchedDesiredLocale;
  if (tmp3) {
    const matchedSupportedLocale = findBestMatchResult.matchedSupportedLocale;
    tmp5 = matchedSupportedLocale;
    const arr2 = reduced[findBestMatchResult.matchedDesiredLocale];
    tmp4 = arr2.slice(findBestMatchResult.matchedDesiredLocale.length) || undefined;
  }
  if (tmp5) {
    return { locale: tmp5, extension: tmp4 };
  } else {
    const obj = { locale: fn() };
    return obj;
  }
}
