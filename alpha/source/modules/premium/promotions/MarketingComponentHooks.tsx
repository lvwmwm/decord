// Module ID: 11095
// Function ID: 11096
// Name: MarketingComponentHooks
// Dependencies: [4819, 4761, 504, 4531, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 11095 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import useThemeDefault from "useTheme" /* 4761 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;

const themes = tmp3(4531);
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
