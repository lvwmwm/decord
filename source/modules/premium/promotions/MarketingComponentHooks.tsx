// Module ID: 9958
// Function ID: 9959
// Name: useThemeAndReducedMotionAwareAssetUrl
// Dependencies: [4277, 4221, 589, 3995, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 9958 (useThemeAndReducedMotionAwareAssetUrl)
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export const useThemeAndReducedMotionAwareAssetUrl = function useThemeAndReducedMotionAwareAssetUrl(asset, arg1) {
  const tmp2 = importDefault(4221)();
  const tmp3 = require;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (null == asset) {
    return null;
  } else {
    const tmp3Result = tmp3(3995);
  }
};
