// Module ID: 10099
// Function ID: 10100
// Name: useThemeAndReducedMotionAwareAssetUrl
// Dependencies: [4334, 4278, 589, 1364, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 10099 (useThemeAndReducedMotionAwareAssetUrl)
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export const useThemeAndReducedMotionAwareAssetUrl = function useThemeAndReducedMotionAwareAssetUrl(asset, arg1) {
  const tmp2 = importDefault(4278)();
  const tmp3 = require;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (null == asset) {
    return null;
  } else {
    const tmp3Result = tmp3(1364);
  }
};
