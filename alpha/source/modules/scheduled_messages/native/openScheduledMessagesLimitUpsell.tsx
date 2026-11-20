// Module ID: 8424
// Function ID: 8425
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [8425, 8427, 2]
// Exports: default

// Module 8424 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8425 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8427 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
