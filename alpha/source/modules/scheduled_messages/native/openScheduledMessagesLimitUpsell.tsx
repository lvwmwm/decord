// Module ID: 14043
// Function ID: 14044
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9680, 5030, 2]
// Exports: default

// Module 14043 (openScheduledMessagesLimitUpsell)
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 5030 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9680 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
