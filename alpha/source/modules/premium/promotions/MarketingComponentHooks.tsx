// Module ID: 10419
// Function ID: 10420
// Name: MarketingComponentHooks
// Dependencies: [4855, 4797, 504, 4568, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 10419 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import useThemeDefault from "useTheme" /* 4797 */;
import AccessibilityStore from "AccessibilityStore" /* 4855 */;

const themes = tmp3(4568);
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
