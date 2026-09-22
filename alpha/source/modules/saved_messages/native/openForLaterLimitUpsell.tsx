// Module ID: 11963
// Function ID: 11964
// Name: openForLaterLimitUpsell
// Dependencies: [8096, 8099, 8100, 2]
// Exports: default

// Module 11963 (openForLaterLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8096 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8099 */;
import PremiumUpsellSubfeatureNames2 from "PremiumUpsellSubfeatureNames" /* 8100 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/openForLaterLimitUpsell.tsx");

export default function openForLaterLimitUpsell(arg0, arg1) {
  const PremiumUpsellSubfeatureNames = PremiumUpsellSubfeatureNames2.PremiumUpsellSubfeatureNames;
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES, arg0 ? PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT : PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT, arg1);
};
