// Module ID: 9151
// Function ID: 9152
// Name: VirtualCurrencyUtils
// Dependencies: [1085, 1087, 2061, 1392, 4899, 2049, 2]
// Exports: dismissOrbsOnboardingExperience, get1PShopApplicationIdForSKU

// Module 9151 (VirtualCurrencyUtils)
import Constants from "Constants" /* 1085 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4899 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2061 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let closure_2 = Constants.COLLECTIBLES_APPLICATION_ID;
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
({ DismissibleContentGroupName: closure_4, ContentDismissActionType: hasOwnProperty } = DismissibleContentConstants);
let closure_6 = PremiumConstants.PREMIUM_SUBSCRIPTION_APPLICATION;
let result = size.fileFinishedImporting("modules/virtual_currency/VirtualCurrencyUtils.tsx");

export const get1PShopApplicationIdForSKU = function get1PShopApplicationIdForSKU(skuId) {
  return skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM ? closure_6 : closure_2;
};
export const dismissOrbsOnboardingExperience = function dismissOrbsOnboardingExperience() {
  const obj = DismissibleContentUnsafeUtils;
  if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL)) {
    const obj2 = { dismissAction: hasOwnProperty.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const tmpResult = DismissibleContentUnsafeUtils;
    const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(2049).DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, obj2);
    const obj3 = { dismissAction: hasOwnProperty.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const tmpResult3 = DismissibleContentUnsafeUtils;
    const result1 = tmpResult3.UNSAFE_markDismissibleContentAsDismissed(tmp(2049).DismissibleContent.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, obj3);
    const obj4 = { dismissAction: hasOwnProperty.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const tmpResult4 = DismissibleContentUnsafeUtils;
    const result2 = tmpResult4.UNSAFE_markDismissibleContentAsDismissed(tmp(2049).DismissibleContent.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, obj4);
  }
};
