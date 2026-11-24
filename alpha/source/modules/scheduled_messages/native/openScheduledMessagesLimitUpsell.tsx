// Module ID: 9501
// Function ID: 9502
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9453, 9456, 2]
// Exports: default

// Module 9501 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9453 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9456 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
