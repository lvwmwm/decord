// Module ID: 14280
// Function ID: 14281
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9714, 5063, 2]
// Exports: default

// Module 14280 (openScheduledMessagesLimitUpsell)
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 5063 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9714 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
