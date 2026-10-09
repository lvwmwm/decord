// Module ID: 12833
// Function ID: 12834
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9250, 9253, 2]
// Exports: default

// Module 12833 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9250 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
