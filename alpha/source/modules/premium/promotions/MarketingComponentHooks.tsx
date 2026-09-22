// Module ID: 11019
// Function ID: 11020
// Name: MarketingComponentHooks
// Dependencies: [4749, 4691, 504, 4465, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 11019 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import useThemeDefault from "useTheme" /* 4691 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;

const themes = tmp3(4465);
require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export const useThemeAndReducedMotionAwareAssetUrl = function useThemeAndReducedMotionAwareAssetUrl(asset, arg1) {
  const tmp2 = useThemeDefault();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (null == asset) {
    return null;
  } else {
    const tmp3Result = themes;
  }
};
