// Module ID: 14867
// Function ID: 14868
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9916, 9919, 2]
// Exports: default

// Module 14867 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9916 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9919 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
