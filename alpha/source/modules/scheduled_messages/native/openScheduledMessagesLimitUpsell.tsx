// Module ID: 8456
// Function ID: 8457
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [8457, 8459, 2]
// Exports: default

// Module 8456 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8457 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8459 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
