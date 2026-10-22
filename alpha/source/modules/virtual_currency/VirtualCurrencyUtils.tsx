// Module ID: 9553
// Function ID: 9554
// Name: VirtualCurrencyUtils
// Dependencies: [1087, 1089, 4818, 1394, 4994, 4805, 2]
// Exports: dismissOrbsOnboardingExperience, get1PShopApplicationIdForSKU

// Module 9553 (VirtualCurrencyUtils)
import Constants from "Constants" /* 1087 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1089 */;
import PremiumConstants from "PremiumConstants" /* 1394 */;
import dismissible_content from "dismissible_content" /* 4805 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4994 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4818 */;
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
    const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(4805).DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, obj2);
    const obj3 = { dismissAction: hasOwnProperty.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const tmpResult3 = DismissibleContentUnsafeUtils;
    const result1 = tmpResult3.UNSAFE_markDismissibleContentAsDismissed(tmp(4805).DismissibleContent.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, obj3);
    const obj4 = { dismissAction: hasOwnProperty.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const tmpResult4 = DismissibleContentUnsafeUtils;
    const result2 = tmpResult4.UNSAFE_markDismissibleContentAsDismissed(tmp(4805).DismissibleContent.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, obj4);
  }
};
