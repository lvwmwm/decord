// Module ID: 15413
// Function ID: 15414
// Name: BestFitMatcher
// Dependencies: [15409]
// Exports: BestFitMatcher

// Module 15413 (BestFitMatcher)
import _mod15409 from "module_15409" /* 15409 */;


export function BestFitMatcher(arg0, arr, fn) {
  let tmp4;
  const items = [];
  const reduced = arr.reduce((acc, item) => {
    const replaced = item.replace(_mod15409.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    items.push(replaced);
    acc[replaced] = item;
    return acc;
  }, {});
  const findBestMatchResult = items(15409).findBestMatch(items, arg0);
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
