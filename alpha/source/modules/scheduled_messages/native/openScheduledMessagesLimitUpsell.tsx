// Module ID: 13413
// Function ID: 13414
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9287, 9290, 2]
// Exports: default

// Module 13413 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9287 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9290 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
