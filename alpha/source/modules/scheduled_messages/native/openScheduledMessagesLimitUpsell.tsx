// Module ID: 9045
// Function ID: 9046
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9046, 9048, 2]
// Exports: default

// Module 9045 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9046 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9048 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
