// Module ID: 9668
// Function ID: 9669
// Name: VirtualCurrencyUtils
// Dependencies: [1072, 1074, 4855, 1386, 7401, 5039, 4842, 2]
// Exports: dismissOrbsOnboardingExperience, get1PShopApplicationIdForSKU

// Module 9668 (VirtualCurrencyUtils)
import Constants from "Constants" /* 1072 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5039 */;
import SocialLayerStorefrontConstants from "SocialLayerStorefrontConstants" /* 7401 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let closure_2 = Constants.COLLECTIBLES_APPLICATION_ID;
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
({ DismissibleContentGroupName: closure_4, ContentDismissActionType: hasOwnProperty } = DismissibleContentConstants);
let closure_6 = PremiumConstants.PREMIUM_SUBSCRIPTION_APPLICATION;
SocialLayerStorefrontConstants.BLOONS_TD6_SPLIT_TENDER_COUPON_SKU_IDS;
let result = size.fileFinishedImporting("modules/virtual_currency/VirtualCurrencyUtils.tsx");

export function get1PShopApplicationIdForSKU(skuId) {
  let tmp3;
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM) {
    tmp3 = closure_6;
  } else {
    tmp3 = closure_2;
  }
  return tmp3;
}
export function dismissOrbsOnboardingExperience() {
  const obj = DismissibleContentUnsafeUtils;
  if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL)) {
    const obj2 = { dismissAction: hasOwnProperty.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const tmpResult = DismissibleContentUnsafeUtils;
    const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(4842).DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, obj2);
    const obj3 = { dismissAction: hasOwnProperty.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const tmpResult3 = DismissibleContentUnsafeUtils;
    const result1 = tmpResult3.UNSAFE_markDismissibleContentAsDismissed(tmp(4842).DismissibleContent.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, obj3);
    const obj4 = { dismissAction: hasOwnProperty.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const tmpResult4 = DismissibleContentUnsafeUtils;
    const result2 = tmpResult4.UNSAFE_markDismissibleContentAsDismissed(tmp(4842).DismissibleContent.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, obj4);
  }
}
