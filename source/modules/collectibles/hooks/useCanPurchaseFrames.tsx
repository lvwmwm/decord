// Module ID: 9321
// Function ID: 9322
// Name: useCanPurchaseFrames
// Dependencies: [1903, 1905, 8731, 9322, 1926, 1921, 589, 2]
// Exports: default, isUserPaidTier2, useCanViewProfileFramesInCollectiblesShop, useIsProfileFramesEarlyAccessPhase

// Module 9321 (useCanPurchaseFrames)
import mergeGuildAvatar from "mergeGuildAvatar";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("apexExperiment").fileFinishedImporting("modules/collectibles/hooks/useCanPurchaseFrames.tsx");

export default function useCanPurchaseFrames(location) {
  let obj = require(8731) /* apexExperiment */;
  let isProfileFramesEnabled = obj.useIsProfileFramesEnabled(location);
  obj = { location };
  const bucket = importDefault(9322).useConfig(obj).bucket;
  const obj2 = importDefault(9322);
  const tmp = require;
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let isPremiumExactlyResult = callback(table[4]).isPremiumExactly(currentUser, TIER_2.TIER_2);
    if (isPremiumExactlyResult) {
      let premiumState;
      if (currentUser != null) {
        premiumState = currentUser.premiumState;
      }
      isPremiumExactlyResult = null != premiumState;
    }
    if (isPremiumExactlyResult) {
      isPremiumExactlyResult = currentUser.premiumState.premiumSubscriptionType === callback(table[5]).PremiumSubscriptionType.TIER_2;
    }
    return isPremiumExactlyResult;
  });
  let tmp5 = bucket === require(9322) /* apexExperiment */.ProfileFramesPurchaseBucket.OPEN_PURCHASE;
  if (!tmp5) {
    tmp5 = bucket === tmp(9322).ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY && stateFromStores;
    const tmp6 = bucket === tmp(9322).ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY && stateFromStores;
  }
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5;
  }
  return isProfileFramesEnabled;
};
export const useCanViewProfileFramesInCollectiblesShop = function useCanViewProfileFramesInCollectiblesShop(UserProfileFrameEditButton) {
  let isProfileFramesEnabled = require(8731) /* apexExperiment */.useIsProfileFramesEnabled(UserProfileFrameEditButton);
  importDefault(9322);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 !== require(9322) /* apexExperiment */.ProfileFramesPurchaseBucket.CONTROL;
  }
  return isProfileFramesEnabled;
};
export const useIsProfileFramesEarlyAccessPhase = function useIsProfileFramesEarlyAccessPhase(CollectiblesShopCardCardDetailsV2) {
  let isProfileFramesEnabled = require(8731) /* apexExperiment */.useIsProfileFramesEnabled(CollectiblesShopCardCardDetailsV2);
  importDefault(9322);
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === require(9322) /* apexExperiment */.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
export const isUserPaidTier2 = function isUserPaidTier2(currentUser) {
  let isPremiumExactlyResult = require(1926) /* isPremiumAtLeast */.isPremiumExactly(currentUser, PremiumTypes.TIER_2);
  if (isPremiumExactlyResult) {
    let premiumState;
    if (currentUser != null) {
      premiumState = currentUser.premiumState;
    }
    isPremiumExactlyResult = null != premiumState;
  }
  if (isPremiumExactlyResult) {
    isPremiumExactlyResult = currentUser.premiumState.premiumSubscriptionType === require(1921) /* create */.PremiumSubscriptionType.TIER_2;
  }
  return isPremiumExactlyResult;
};
