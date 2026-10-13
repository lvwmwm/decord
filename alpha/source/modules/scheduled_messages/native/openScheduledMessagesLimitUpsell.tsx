// Module ID: 13374
// Function ID: 13375
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9278, 9281, 2]
// Exports: default

// Module 13374 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9278 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9281 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
