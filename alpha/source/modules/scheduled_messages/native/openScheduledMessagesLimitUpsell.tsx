// Module ID: 8968
// Function ID: 8969
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [8969, 8971, 2]
// Exports: default

// Module 8968 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8969 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8971 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
