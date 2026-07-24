// Module ID: 8733
// Function ID: 69098
// Name: useSlayerStorefrontDevOverrideStore
// Dependencies: [621, 2]

// Module 8733 (useSlayerStorefrontDevOverrideStore)
import keys from "keys";

const tmp2 = keys.create()((arg0) => {
  let closure_0 = arg0;
  let obj = {
    overrideApplicationId: null,
    setOverrideApplicationId(overrideApplicationId) {
      return callback({ overrideApplicationId });
    },
    showSelfActivity: false,
    setShowSelfActivity(showSelfActivity) {
      return callback({ showSelfActivity });
    },
    recommendationApplicationIds: null,
    setRecommendationApplicationIds(str) {
      const obj = {};
      let parts = null;
      if (null != str) {
        parts = str.split(",");
      }
      obj.recommendationApplicationIds = parts;
      return closure_0(obj);
    },
    overrideNitroEligibilityForSocialLayerStorefront: false,
    setOverrideNitroEligibilityForSocialLayerStorefront(overrideNitroEligibilityForSocialLayerStorefront) {
      return callback({ overrideNitroEligibilityForSocialLayerStorefront });
    },
    isNitroEligibleForSocialLayerStorefront: false,
    setIsNitroEligibleForSocialLayerStorefront(isNitroEligibleForSocialLayerStorefront) {
      return callback({ isNitroEligibleForSocialLayerStorefront });
    }
  };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevOverrideStore.tsx");

export const useSlayerStorefrontDevOverrideStore = tmp2;
