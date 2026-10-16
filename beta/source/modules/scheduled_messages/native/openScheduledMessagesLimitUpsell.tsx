// Module ID: 12882
// Function ID: 12883
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9273, 9276, 2]
// Exports: default

// Module 12882 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9273 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9276 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
