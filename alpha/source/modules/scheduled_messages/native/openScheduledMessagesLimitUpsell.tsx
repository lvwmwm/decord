// Module ID: 14057
// Function ID: 14058
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9682, 5031, 2]
// Exports: default

// Module 14057 (openScheduledMessagesLimitUpsell)
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 5031 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9682 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
