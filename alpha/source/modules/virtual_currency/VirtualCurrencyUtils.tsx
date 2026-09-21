// Module ID: 11543
// Function ID: 11544
// Name: VirtualCurrencyUtils
// Dependencies: [1074, 1076, 2038, 1374, 4576, 2027, 2]
// Exports: dismissOrbsOnboardingExperience, get1PShopApplicationIdForSKU

// Module 11543 (VirtualCurrencyUtils)
import Constants from "Constants" /* 1074 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import dismissible_content from "dismissible_content" /* 2027 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2038 */;
import size from "module_2" /* 2 */;

let closure_2 = Constants.COLLECTIBLES_APPLICATION_ID;
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
({ DismissibleContentGroupName: closure_4, ContentDismissActionType: hasOwnProperty } = DismissibleContentConstants);
let closure_6 = PremiumConstants.PREMIUM_SUBSCRIPTION_APPLICATION;
let result = size.fileFinishedImporting("modules/virtual_currency/VirtualCurrencyUtils.tsx");

export const get1PShopApplicationIdForSKU = function get1PShopApplicationIdForSKU(skuId) {
  return skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM ? closure_6 : closure_2;
};
export const dismissOrbsOnboardingExperience = function dismissOrbsOnboardingExperience() {
  if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL)) {
    const obj2 = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result = tmp(4576).UNSAFE_markDismissibleContentAsDismissed(tmp(2027).DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, obj2);
    const tmpResult = tmp(4576);
    const obj3 = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result1 = tmp(4576).UNSAFE_markDismissibleContentAsDismissed(tmp(2027).DismissibleContent.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, obj3);
    const tmpResult3 = tmp(4576);
    const obj4 = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result2 = tmp(4576).UNSAFE_markDismissibleContentAsDismissed(tmp(2027).DismissibleContent.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, obj4);
    const tmpResult4 = tmp(4576);
  }
};
