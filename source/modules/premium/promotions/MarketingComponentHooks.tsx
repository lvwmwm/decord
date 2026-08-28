// Module ID: 10462
// Function ID: 10463
// Name: useThemeAndReducedMotionAwareAssetUrl
// Dependencies: [4438, 4381, 589, 1364, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 10462 (useThemeAndReducedMotionAwareAssetUrl)
import initialize from "initialize" /* 589 */;
import isThemeLight from "isThemeLight" /* 1364 */;
import useThemeDefault from "useTheme" /* 4381 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4438 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export const useThemeAndReducedMotionAwareAssetUrl = function useThemeAndReducedMotionAwareAssetUrl(asset, arg1) {
  const tmp2 = useThemeDefault();
  const tmp3 = require;
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (null == asset) {
    return null;
  } else {
    const tmp3Result = isThemeLight;
  }
};
