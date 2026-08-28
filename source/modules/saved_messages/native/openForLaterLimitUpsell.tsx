// Module ID: 11223
// Function ID: 11224
// Name: openForLaterLimitUpsell
// Dependencies: [7541, 7544, 7545, 2]
// Exports: default

// Module 11223 (openForLaterLimitUpsell)
import set from "set" /* 2 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7541 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7544 */;
import PremiumUpsellSubfeatureNames2 from "PremiumUpsellSubfeatureNames" /* 7545 */;

const result = set.fileFinishedImporting("modules/saved_messages/native/openForLaterLimitUpsell.tsx");

export default function openForLaterLimitUpsell(arg0, arg1) {
  const PremiumUpsellSubfeatureNames = PremiumUpsellSubfeatureNames2.PremiumUpsellSubfeatureNames;
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES, arg0 ? PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT : PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT, arg1);
};
