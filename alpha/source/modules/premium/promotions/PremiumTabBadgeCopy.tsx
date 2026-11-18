// Module ID: 16206
// Function ID: 16207
// Name: PremiumTabBadgeCopy
// Dependencies: [1113, 9104, 2]
// Exports: getPremiumTabBadgeCopy, hasVisiblePremiumTabBadgeCopy

// Module 16206 (PremiumTabBadgeCopy)
import intl from "intl" /* 1113 */;
import MarketingStringFormat from "MarketingStringFormat" /* 9104 */;
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
      const tmp5Result = tmp5(9104);
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
