// Module ID: 10601
// Function ID: 10602
// Name: VirtualCurrencyUtils
// Dependencies: [1078, 1080, 2042, 1378, 4611, 2031, 2]
// Exports: dismissOrbsOnboardingExperience, get1PShopApplicationIdForSKU

// Module 10601 (VirtualCurrencyUtils)
import Constants from "Constants" /* 1078 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1080 */;
import PremiumConstants from "PremiumConstants" /* 1378 */;
import dismissible_content from "dismissible_content" /* 2031 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
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
    const result = tmp(4611).UNSAFE_markDismissibleContentAsDismissed(tmp(2031).DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, obj2);
    const tmpResult = tmp(4611);
    const obj3 = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result1 = tmp(4611).UNSAFE_markDismissibleContentAsDismissed(tmp(2031).DismissibleContent.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, obj3);
    const tmpResult3 = tmp(4611);
    const obj4 = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result2 = tmp(4611).UNSAFE_markDismissibleContentAsDismissed(tmp(2031).DismissibleContent.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, obj4);
    const tmpResult4 = tmp(4611);
  }
};
