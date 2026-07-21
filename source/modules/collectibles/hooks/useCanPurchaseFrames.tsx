// Module ID: 8695
// Function ID: 68870
// Name: isUserPaidTier2
// Dependencies: []
// Exports: default, useCanViewProfileFramesInCollectiblesShop, useIsProfileFramesEarlyAccessPhase

// Module 8695 (isUserPaidTier2)
function isUserPaidTier2(currentUser) {
  let isPremiumExactlyResult = arg1(dependencyMap[4]).isPremiumExactly(currentUser, PremiumTypes.TIER_2);
  if (isPremiumExactlyResult) {
    let premiumState;
    if (null != currentUser) {
      premiumState = currentUser.premiumState;
    }
    isPremiumExactlyResult = null != premiumState;
  }
  if (isPremiumExactlyResult) {
    isPremiumExactlyResult = currentUser.premiumState.premiumSubscriptionType === arg1(dependencyMap[5]).PremiumSubscriptionType.TIER_2;
  }
  return isPremiumExactlyResult;
}
let closure_3 = importDefault(dependencyMap[0]);
const PremiumTypes = arg1(dependencyMap[1]).PremiumTypes;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/collectibles/hooks/useCanPurchaseFrames.tsx");

export default function useCanPurchaseFrames(location) {
  let obj = arg1(dependencyMap[2]);
  let isProfileFramesEnabled = obj.useIsProfileFramesEnabled(location);
  obj = { location };
  const bucket = importDefault(dependencyMap[3]).useConfig(obj).bucket;
  const obj2 = importDefault(dependencyMap[3]);
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => callback(currentUser.getCurrentUser()));
  let tmp3 = bucket === arg1(dependencyMap[3]).ProfileFramesPurchaseBucket.OPEN_PURCHASE;
  if (!tmp3) {
    tmp3 = bucket === arg1(dependencyMap[3]).ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY && stateFromStores;
    const tmp6 = bucket === arg1(dependencyMap[3]).ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY && stateFromStores;
  }
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp3;
  }
  return isProfileFramesEnabled;
};
export const useCanViewProfileFramesInCollectiblesShop = function useCanViewProfileFramesInCollectiblesShop(UserProfileFrameEditButton) {
  let isProfileFramesEnabled = arg1(dependencyMap[2]).useIsProfileFramesEnabled(UserProfileFrameEditButton);
  importDefault(dependencyMap[3]);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp3 !== arg1(dependencyMap[3]).ProfileFramesPurchaseBucket.CONTROL;
  }
  return isProfileFramesEnabled;
};
export const useIsProfileFramesEarlyAccessPhase = function useIsProfileFramesEarlyAccessPhase(CollectiblesShopCardCardDetailsV2) {
  let isProfileFramesEnabled = arg1(dependencyMap[2]).useIsProfileFramesEnabled(CollectiblesShopCardCardDetailsV2);
  importDefault(dependencyMap[3]);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp3 === arg1(dependencyMap[3]).ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
export { isUserPaidTier2 };
