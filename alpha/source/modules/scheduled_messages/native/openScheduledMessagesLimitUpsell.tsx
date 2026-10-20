// Module ID: 13852
// Function ID: 13853
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9594, 9597, 2]
// Exports: default

// Module 13852 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9594 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9597 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
