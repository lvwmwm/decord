// Module ID: 10885
// Function ID: 10886
// Name: MarketingComponentHooks
// Dependencies: [4628, 4571, 504, 4345, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 10885 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import useThemeDefault from "useTheme" /* 4571 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

const themes = tmp3(4345);
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
