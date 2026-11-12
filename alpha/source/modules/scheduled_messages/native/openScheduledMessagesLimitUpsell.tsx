// Module ID: 8967
// Function ID: 8968
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [8968, 8970, 2]
// Exports: default

// Module 8967 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8968 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8970 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
