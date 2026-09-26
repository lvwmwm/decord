// Module ID: 11049
// Function ID: 11050
// Name: MarketingComponentHooks
// Dependencies: [4780, 4722, 504, 4496, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 11049 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import useThemeDefault from "useTheme" /* 4722 */;
import AccessibilityStore from "AccessibilityStore" /* 4780 */;

const themes = tmp3(4496);
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
