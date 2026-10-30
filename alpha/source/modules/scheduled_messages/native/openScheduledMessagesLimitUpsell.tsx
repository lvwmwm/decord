// Module ID: 14547
// Function ID: 14548
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9772, 5068, 2]
// Exports: default

// Module 14547 (openScheduledMessagesLimitUpsell)
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 5068 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9772 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
