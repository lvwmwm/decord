// Module ID: 13870
// Function ID: 13871
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9607, 9610, 2]
// Exports: default

// Module 13870 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9607 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9610 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
