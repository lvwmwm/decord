// Module ID: 10218
// Function ID: 10219
// Name: MarketingComponentHooks
// Dependencies: [4825, 4767, 504, 4538, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 10218 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import useThemeDefault from "useTheme" /* 4767 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;

const themes = tmp3(4538);
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
