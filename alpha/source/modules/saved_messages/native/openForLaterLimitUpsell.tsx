// Module ID: 11349
// Function ID: 11350
// Name: openForLaterLimitUpsell
// Dependencies: [7491, 7494, 7495, 2]
// Exports: default

// Module 11349 (openForLaterLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7491 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7494 */;
import PremiumUpsellSubfeatureNames2 from "PremiumUpsellSubfeatureNames" /* 7495 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/openForLaterLimitUpsell.tsx");

export default function openForLaterLimitUpsell(arg0, arg1) {
  const tmp = openPremiumUpsellActionSheetDefault;
  const SAVED_MESSAGES = EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES;
  const PremiumUpsellSubfeatureNames = PremiumUpsellSubfeatureNames2.PremiumUpsellSubfeatureNames;
  tmp(SAVED_MESSAGES, arg0 ? PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT : PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT, arg1);
};
