// Module ID: 14514
// Function ID: 14515
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9746, 5064, 2]
// Exports: default

// Module 14514 (openScheduledMessagesLimitUpsell)
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 5064 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9746 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
