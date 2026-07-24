// Module ID: 9488
// Function ID: 73863
// Name: get1PShopApplicationIdForSKU
// Dependencies: [653, 655, 1345, 1851, 3946, 1334, 2]
// Exports: dismissOrbsOnboardingExperience, get1PShopApplicationIdForSKU

// Module 9488 (get1PShopApplicationIdForSKU)
import { COLLECTIBLES_APPLICATION_ID as closure_2 } from "ME";
import { EXTERNAL_PRODUCT_SKU_IDS } from "items";
import ContentDismissActionType from "ContentDismissActionType";
import { PREMIUM_SUBSCRIPTION_APPLICATION as closure_6 } from "GuildFeatures";

let closure_4;
let closure_5;
({ DismissibleContentGroupName: closure_4, ContentDismissActionType: closure_5 } = ContentDismissActionType);
let result = require("ContentDismissActionType").fileFinishedImporting("modules/virtual_currency/VirtualCurrencyUtils.tsx");

export const get1PShopApplicationIdForSKU = function get1PShopApplicationIdForSKU(skuId) {
  return skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM ? closure_6 : closure_2;
};
export const dismissOrbsOnboardingExperience = function dismissOrbsOnboardingExperience() {
  let obj = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
  if (!obj.UNSAFE_isDismissibleContentDismissed(require(1334) /* DismissibleContent */.DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL)) {
    let obj1 = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
    obj = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result = obj1.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, obj);
    obj = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result1 = require(3946) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, obj);
    const obj4 = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
    obj1 = { dismissAction: constants2.INDIRECT_ACTION, groupName: constants.VIRTUAL_CURRENCY_ONBOARDING };
    const result2 = require(3946) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, obj1);
    const obj6 = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
  }
};
