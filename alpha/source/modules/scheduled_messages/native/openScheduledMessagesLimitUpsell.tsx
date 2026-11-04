// Module ID: 14811
// Function ID: 14812
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9943, 5200, 2]
// Exports: default

// Module 14811 (openScheduledMessagesLimitUpsell)
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 5200 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9943 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
