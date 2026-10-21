// Module ID: 13945
// Function ID: 13946
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9637, 9640, 2]
// Exports: default

// Module 13945 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9637 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9640 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
