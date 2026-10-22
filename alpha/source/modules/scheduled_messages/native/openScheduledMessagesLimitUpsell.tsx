// Module ID: 13995
// Function ID: 13996
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9656, 9659, 2]
// Exports: default

// Module 13995 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9656 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9659 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
