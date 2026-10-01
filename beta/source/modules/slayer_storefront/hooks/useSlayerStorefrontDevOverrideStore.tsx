// Module ID: 8256
// Function ID: 8257
// Name: useSlayerStorefrontDevOverrideStore
// Dependencies: [560, 2]

// Module 8256 (useSlayerStorefrontDevOverrideStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const tmp2 = module_560.create()((arg0) => {
  let closure_0 = arg0;
  let obj = {
    overrideApplicationId: null,
    setOverrideApplicationId(overrideApplicationId) {
      const obj = { overrideApplicationId };
      return closure_0(obj);
    },
    showSelfActivity: false,
    setShowSelfActivity(showSelfActivity) {
      const obj = { showSelfActivity };
      return closure_0(obj);
    },
    recommendationApplicationIds: null,
    setRecommendationApplicationIds(str) {
      let recommendationApplicationIds = null;
      const tmp = closure_0;
      if (null != str) {
        recommendationApplicationIds = str.split(",");
      }
      return tmp({ recommendationApplicationIds });
    },
    overrideNitroEligibilityForSocialLayerStorefront: false,
    setOverrideNitroEligibilityForSocialLayerStorefront(overrideNitroEligibilityForSocialLayerStorefront) {
      const obj = { overrideNitroEligibilityForSocialLayerStorefront };
      return closure_0(obj);
    },
    isNitroEligibleForSocialLayerStorefront: false,
    setIsNitroEligibleForSocialLayerStorefront(isNitroEligibleForSocialLayerStorefront) {
      const obj = { isNitroEligibleForSocialLayerStorefront };
      return closure_0(obj);
    },
    overrideCurrentPremiumPlanId: false,
    setOverrideCurrentPremiumPlanId(overrideCurrentPremiumPlanId) {
      const obj = { overrideCurrentPremiumPlanId };
      return closure_0(obj);
    },
    currentPremiumPlanId: null,
    setCurrentPremiumPlanId(currentPremiumPlanId) {
      const obj = { currentPremiumPlanId };
      return closure_0(obj);
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevOverrideStore.tsx");

export const useSlayerStorefrontDevOverrideStore = tmp2;
