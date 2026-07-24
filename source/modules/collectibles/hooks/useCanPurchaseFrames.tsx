// Module ID: 8744
// Function ID: 69140
// Name: isUserPaidTier2
// Dependencies: [1849, 1851, 8296, 8745, 1872, 1867, 566, 2]
// Exports: default, useCanViewProfileFramesInCollectiblesShop, useIsProfileFramesEarlyAccessPhase

// Module 8744 (isUserPaidTier2)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
function isUserPaidTier2(currentUser) {
  let isPremiumExactlyResult = require(1872) /* isPremiumAtLeast */.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
  if (isPremiumExactlyResult) {
    let premiumState;
    if (null != currentUser) {
      premiumState = currentUser.premiumState;
    }
    isPremiumExactlyResult = null != premiumState;
  }
  if (isPremiumExactlyResult) {
    isPremiumExactlyResult = currentUser.premiumState.premiumSubscriptionType === require(1867) /* _callSuper */.PremiumSubscriptionType.TIER_2;
  }
  return isPremiumExactlyResult;
}
const result = require("apexExperiment").fileFinishedImporting("modules/collectibles/hooks/useCanPurchaseFrames.tsx");

export default function useCanPurchaseFrames(location) {
  let obj = require(8296) /* apexExperiment */;
  let isProfileFramesEnabled = obj.useIsProfileFramesEnabled(location);
  obj = { location };
  const bucket = importDefault(8745).useConfig(obj).bucket;
  const obj2 = importDefault(8745);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_5(outer1_3.getCurrentUser()));
  let tmp3 = bucket === require(8745) /* apexExperiment */.ProfileFramesPurchaseBucket.OPEN_PURCHASE;
  if (!tmp3) {
    tmp3 = bucket === require(8745) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY && stateFromStores;
    const tmp6 = bucket === require(8745) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY && stateFromStores;
  }
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp3;
  }
  return isProfileFramesEnabled;
};
export const useCanViewProfileFramesInCollectiblesShop = function useCanViewProfileFramesInCollectiblesShop(UserProfileFrameEditButton) {
  let isProfileFramesEnabled = require(8296) /* apexExperiment */.useIsProfileFramesEnabled(UserProfileFrameEditButton);
  importDefault(8745);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp3 !== require(8745) /* apexExperiment */.ProfileFramesPurchaseBucket.CONTROL;
  }
  return isProfileFramesEnabled;
};
export const useIsProfileFramesEarlyAccessPhase = function useIsProfileFramesEarlyAccessPhase(CollectiblesShopCardCardDetailsV2) {
  let isProfileFramesEnabled = require(8296) /* apexExperiment */.useIsProfileFramesEnabled(CollectiblesShopCardCardDetailsV2);
  importDefault(8745);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp3 === require(8745) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
export { isUserPaidTier2 };
