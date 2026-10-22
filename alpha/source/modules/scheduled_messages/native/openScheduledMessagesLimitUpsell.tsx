// Module ID: 13981
// Function ID: 13982
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9649, 9652, 2]
// Exports: default

// Module 13981 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9649 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9652 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
