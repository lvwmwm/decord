// Module ID: 11101
// Function ID: 11102
// Name: MarketingComponentHooks
// Dependencies: [4821, 4763, 504, 4533, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 11101 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import useThemeDefault from "useTheme" /* 4763 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;

const themes = tmp3(4533);
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
