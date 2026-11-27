// Module ID: 15687
// Function ID: 15688
// Name: BestFitMatcher
// Dependencies: [15683]
// Exports: BestFitMatcher

// Module 15687 (BestFitMatcher)
import _mod15683 from "module_15683" /* 15683 */;


export function BestFitMatcher(arg0, arr, fn) {
  let tmp4;
  const items = [];
  const reduced = arr.reduce((acc, item) => {
    const replaced = item.replace(_mod15683.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    items.push(replaced);
    acc[replaced] = item;
    return acc;
  }, {});
  const findBestMatchResult = items(15683).findBestMatch(items, arg0);
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
