// Module ID: 13735
// Function ID: 13736
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9514, 9517, 2]
// Exports: default

// Module 13735 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9514 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9517 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
