// Module ID: 8425
// Function ID: 8426
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [8426, 8428, 2]
// Exports: default

// Module 8425 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8426 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8428 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
