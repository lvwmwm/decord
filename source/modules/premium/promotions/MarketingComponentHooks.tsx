// Module ID: 10043
// Function ID: 10044
// Name: useThemeAndReducedMotionAwareAssetUrl
// Dependencies: [4295, 4239, 589, 4011, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 10043 (useThemeAndReducedMotionAwareAssetUrl)
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export const useThemeAndReducedMotionAwareAssetUrl = function useThemeAndReducedMotionAwareAssetUrl(asset, arg1) {
  const tmp2 = importDefault(4239)();
  const tmp3 = require;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (null == asset) {
    return null;
  } else {
    const tmp3Result = tmp3(4011);
  }
};
