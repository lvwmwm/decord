// Module ID: 9440
// Function ID: 73575
// Name: get1PShopApplicationIdForSKU
// Dependencies: []
// Exports: dismissOrbsOnboardingExperience, get1PShopApplicationIdForSKU

// Module 9440 (get1PShopApplicationIdForSKU)
let closure_2 = require(dependencyMap[0]).COLLECTIBLES_APPLICATION_ID;
const EXTERNAL_PRODUCT_SKU_IDS = require(dependencyMap[1]).EXTERNAL_PRODUCT_SKU_IDS;
const _module = require(dependencyMap[2]);
({ DismissibleContentGroupName: closure_4, ContentDismissActionType: closure_5 } = _module);
let closure_6 = require(dependencyMap[3]).PREMIUM_SUBSCRIPTION_APPLICATION;
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/virtual_currency/VirtualCurrencyUtils.tsx");

export const get1PShopApplicationIdForSKU = function get1PShopApplicationIdForSKU(skuId) {
  return skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM ? closure_6 : closure_2;
};
export const dismissOrbsOnboardingExperience = function dismissOrbsOnboardingExperience() {
  let obj = require(dependencyMap[4]);
  if (!obj.UNSAFE_isDismissibleContentDismissed(require(dependencyMap[5]).DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL)) {
    let obj1 = require(dependencyMap[4]);
    obj = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result = obj1.UNSAFE_markDismissibleContentAsDismissed(require(dependencyMap[5]).DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, obj);
    obj = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result1 = require(dependencyMap[4]).UNSAFE_markDismissibleContentAsDismissed(require(dependencyMap[5]).DismissibleContent.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, obj);
    const obj4 = require(dependencyMap[4]);
    obj1 = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result2 = require(dependencyMap[4]).UNSAFE_markDismissibleContentAsDismissed(require(dependencyMap[5]).DismissibleContent.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, obj1);
    const obj6 = require(dependencyMap[4]);
  }
};
