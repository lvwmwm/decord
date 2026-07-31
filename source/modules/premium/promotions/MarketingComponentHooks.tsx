// Module ID: 9722
// Function ID: 9723
// Name: useThemeAndReducedMotionAwareAssetUrl
// Dependencies: [4185, 4129, 589, 3903, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 9722 (useThemeAndReducedMotionAwareAssetUrl)
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export const useThemeAndReducedMotionAwareAssetUrl = function useThemeAndReducedMotionAwareAssetUrl(asset, arg1) {
  const tmp2 = importDefault(4129)();
  const tmp3 = require;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (null == asset) {
    return null;
  } else {
    const tmp3Result = tmp3(3903);
  }
};
