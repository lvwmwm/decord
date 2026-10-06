// Module ID: 7490
// Function ID: 7491
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [7491, 7494, 2]
// Exports: default

// Module 7490 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7491 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7494 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
