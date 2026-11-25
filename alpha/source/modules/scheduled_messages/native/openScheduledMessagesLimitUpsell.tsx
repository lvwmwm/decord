// Module ID: 9600
// Function ID: 9601
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9552, 9555, 2]
// Exports: default

// Module 9600 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9552 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9555 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
