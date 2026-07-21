// Module ID: 8684
// Function ID: 68828
// Name: useSlayerStorefrontDevOverrideStore
// Dependencies: []

// Module 8684 (useSlayerStorefrontDevOverrideStore)
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevOverrideStore.tsx");

export const useSlayerStorefrontDevOverrideStore = _module.create()((arg0) => ({
  setOverrideApplicationId(overrideApplicationId) {
    return overrideApplicationId({ overrideApplicationId });
  },
  setShowSelfActivity(showSelfActivity) {
    return showSelfActivity({ showSelfActivity });
  },
  setRecommendationApplicationIds(str) {
    const obj = {};
    let parts = null;
    if (null != str) {
      parts = str.split(",");
    }
    obj.recommendationApplicationIds = parts;
    return str(obj);
  },
  setOverrideNitroEligibilityForSocialLayerStorefront(overrideNitroEligibilityForSocialLayerStorefront) {
    return overrideNitroEligibilityForSocialLayerStorefront({ overrideNitroEligibilityForSocialLayerStorefront });
  },
  isNitroEligibleForSocialLayerStorefront: false,
  setIsNitroEligibleForSocialLayerStorefront(isNitroEligibleForSocialLayerStorefront) {
    return isNitroEligibleForSocialLayerStorefront({ isNitroEligibleForSocialLayerStorefront });
  }
}));
