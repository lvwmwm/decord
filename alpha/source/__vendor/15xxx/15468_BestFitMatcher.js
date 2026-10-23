// Module ID: 15468
// Function ID: 15469
// Name: BestFitMatcher
// Dependencies: [15464]
// Exports: BestFitMatcher

// Module 15468 (BestFitMatcher)
import _mod15464 from "module_15464" /* 15464 */;


export const BestFitMatcher = function BestFitMatcher(arg0, arr, fn) {
  let tmp4;
  const items = [];
  const reduced = arr.reduce((acc, item) => {
    const replaced = item.replace(_mod15464.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    items.push(replaced);
    acc[replaced] = item;
    return acc;
  }, {});
  const findBestMatchResult = items(15464).findBestMatch(items, arg0);
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
};
