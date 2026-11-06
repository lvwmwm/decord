// Module ID: 14801
// Function ID: 14802
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9899, 9902, 2]
// Exports: default

// Module 14801 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9899 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9902 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
