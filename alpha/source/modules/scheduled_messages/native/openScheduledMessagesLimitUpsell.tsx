// Module ID: 13709
// Function ID: 13710
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9498, 9501, 2]
// Exports: default

// Module 13709 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9498 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9501 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
