// Module ID: 11271
// Function ID: 11272
// Name: openForLaterLimitUpsell
// Dependencies: [8526, 8529, 8530, 2]
// Exports: default

// Module 11271 (openForLaterLimitUpsell)
import set from "set" /* 2 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8526 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8529 */;
import PremiumUpsellSubfeatureNames2 from "PremiumUpsellSubfeatureNames" /* 8530 */;

const result = set.fileFinishedImporting("modules/saved_messages/native/openForLaterLimitUpsell.tsx");

export default function openForLaterLimitUpsell(arg0, arg1) {
  const PremiumUpsellSubfeatureNames = PremiumUpsellSubfeatureNames2.PremiumUpsellSubfeatureNames;
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES, arg0 ? PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT : PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT, arg1);
};
