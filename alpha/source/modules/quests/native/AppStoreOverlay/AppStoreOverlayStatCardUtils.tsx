// Module ID: 14584
// Function ID: 14585
// Name: AppStoreOverlayStatCardUtils
// Dependencies: [2]
// Exports: formatAppStoreChartRank, formatAppStoreRatingCount, formatAppStoreRatingValue, getAppStoreStarFillAmounts

// Module 14584 (AppStoreOverlayStatCardUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStatCardUtils.tsx");

export function formatAppStoreRatingValue(rating, currentLocale) {
  const numberFormat = new Intl.NumberFormat(currentLocale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  return numberFormat.format(rating);
}
export function formatAppStoreRatingCount(ratingCount, currentLocale) {
  const numberFormat = new Intl.NumberFormat(currentLocale, { notation: "compact", compactDisplay: "short" });
  return numberFormat.format(ratingCount);
}
export function getAppStoreStarFillAmounts(rating, stat) {
  let num = stat;
  if (stat === undefined) {
    num = 5;
  }
  const length = Math.max(1, num);
  let closure_0 = Math.max(0, Math.min(rating, length));
  return Array.from({ length }, (arg0, arg1) => Math.min(1, Math.max(0, closure_0 - arg1)));
}
export function formatAppStoreChartRank(rank) {
  return "#" + rank;
}
