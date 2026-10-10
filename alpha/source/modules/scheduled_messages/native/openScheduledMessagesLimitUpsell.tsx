// Module ID: 12880
// Function ID: 12881
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9277, 9280, 2]
// Exports: default

// Module 12880 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9277 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9280 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
