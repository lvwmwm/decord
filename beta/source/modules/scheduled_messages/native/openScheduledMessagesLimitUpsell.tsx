// Module ID: 9034
// Function ID: 9035
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9035, 9037, 2]
// Exports: default

// Module 9034 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9035 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
