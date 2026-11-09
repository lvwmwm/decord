// Module ID: 14835
// Function ID: 14836
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9883, 9886, 2]
// Exports: default

// Module 14835 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9883 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9886 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
