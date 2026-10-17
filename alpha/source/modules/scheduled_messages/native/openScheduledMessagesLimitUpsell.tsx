// Module ID: 13814
// Function ID: 13815
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9579, 9582, 2]
// Exports: default

// Module 13814 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9579 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9582 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
