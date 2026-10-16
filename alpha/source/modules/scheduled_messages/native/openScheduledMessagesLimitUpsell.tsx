// Module ID: 13746
// Function ID: 13747
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9515, 9518, 2]
// Exports: default

// Module 13746 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9515 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9518 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
