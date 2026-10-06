// Module ID: 7273
// Function ID: 7274
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [7274, 7277, 2]
// Exports: default

// Module 7273 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7274 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7277 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
