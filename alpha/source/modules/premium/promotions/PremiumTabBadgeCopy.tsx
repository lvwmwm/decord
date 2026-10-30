// Module ID: 16835
// Function ID: 16836
// Name: PremiumTabBadgeCopy
// Dependencies: [1114, 16836, 2]
// Exports: getPremiumTabBadgeCopy

// Module 16835 (PremiumTabBadgeCopy)
import intl from "intl" /* 1114 */;
import MarketingStringFormat from "MarketingStringFormat" /* 16836 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/promotions/PremiumTabBadgeCopy.tsx");

export function getPremiumTabBadgeCopy(promotionMarketingComponent) {
  if ("premiumTab" !== promotionMarketingComponent.properties.properties.oneofKind) {
    return null;
  } else {
    const premiumTab = promotionMarketingComponent.properties.properties.premiumTab;
    const formatVariableValues = promotionMarketingComponent.getFormatVariableValues(intl.intl.currentLocale);
    const obj3 = MarketingStringFormat;
    const result = obj3.formatMarketingPlainString(premiumTab.badgeLabel, formatVariableValues);
    const tmp5 = require;
    if (result.ok) {
      const tmp5Result = tmp5(16836);
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
