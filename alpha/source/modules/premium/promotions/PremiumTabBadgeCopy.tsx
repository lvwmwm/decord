// Module ID: 16284
// Function ID: 16285
// Name: PremiumTabBadgeCopy
// Dependencies: [1112, 9199, 2]
// Exports: getPremiumTabBadgeCopy, hasVisiblePremiumTabBadgeCopy

// Module 16284 (PremiumTabBadgeCopy)
import intl from "intl" /* 1112 */;
import MarketingStringFormat from "MarketingStringFormat" /* 9199 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/promotions/PremiumTabBadgeCopy.tsx");

export function getPremiumTabBadgeCopy(promotionMarketingSurface) {
  if ("premiumTab" !== promotionMarketingSurface.properties.properties.oneofKind) {
    return null;
  } else {
    const premiumTab = promotionMarketingSurface.properties.properties.premiumTab;
    const formatVariableValues = promotionMarketingSurface.getFormatVariableValues(intl.intl.currentLocale);
    const obj3 = MarketingStringFormat;
    const result = obj3.formatMarketingPlainString(premiumTab.badgeLabel, formatVariableValues);
    const tmp5 = require;
    if (result.ok) {
      const tmp5Result = tmp5(9199);
      const result1 = tmp5Result.formatMarketingPlainString(premiumTab.acknowledgedBadgeLabel, formatVariableValues);
      let tmp3 = null;
      if (result1.ok) {
        tmp3 = { badgeCopy: result.content, acknowledgedBadgeCopy: result1.content };
        const obj = { badgeCopy: result.content, acknowledgedBadgeCopy: result1.content };
      }
      return tmp3;
    } else {
      return null;
    }
  }
}
export function hasVisiblePremiumTabBadgeCopy(premiumTabBadgeCopy, arg1) {
  const str = arg1 ? premiumTabBadgeCopy.acknowledgedBadgeCopy : premiumTabBadgeCopy.badgeCopy;
  return "" !== str.trim();
}
