// Module ID: 14074
// Function ID: 14075
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9712, 5062, 2]
// Exports: default

// Module 14074 (openScheduledMessagesLimitUpsell)
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 5062 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9712 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
