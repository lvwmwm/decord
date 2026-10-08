// Module ID: 12866
// Function ID: 12867
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9216, 9219, 2]
// Exports: default

// Module 12866 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9216 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9219 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
