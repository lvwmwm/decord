// Module ID: 11013
// Function ID: 11014
// Name: MarketingComponentHooks
// Dependencies: [4748, 4690, 504, 4464, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 11013 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import useThemeDefault from "useTheme" /* 4690 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;

const themes = tmp3(4464);
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
