// Module ID: 14585
// Function ID: 14586
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9793, 5073, 2]
// Exports: default

// Module 14585 (openScheduledMessagesLimitUpsell)
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 5073 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9793 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
