// Module ID: 11078
// Function ID: 11079
// Name: openForLaterLimitUpsell
// Dependencies: [7274, 7277, 7278, 2]
// Exports: default

// Module 11078 (openForLaterLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7274 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7277 */;
import PremiumUpsellSubfeatureNames2 from "PremiumUpsellSubfeatureNames" /* 7278 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/openForLaterLimitUpsell.tsx");

export default function openForLaterLimitUpsell(arg0, arg1) {
  const tmp = openPremiumUpsellActionSheetDefault;
  const SAVED_MESSAGES = EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES;
  const PremiumUpsellSubfeatureNames = PremiumUpsellSubfeatureNames2.PremiumUpsellSubfeatureNames;
  tmp(SAVED_MESSAGES, arg0 ? PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT : PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT, arg1);
};
