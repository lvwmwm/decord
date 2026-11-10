// Module ID: 14861
// Function ID: 14862
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9889, 9892, 2]
// Exports: default

// Module 14861 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9889 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9892 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
