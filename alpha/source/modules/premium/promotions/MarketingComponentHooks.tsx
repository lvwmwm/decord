// Module ID: 10411
// Function ID: 10412
// Name: MarketingComponentHooks
// Dependencies: [4834, 4776, 504, 4567, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 10411 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import useThemeDefault from "useTheme" /* 4776 */;
import AccessibilityStore from "AccessibilityStore" /* 4834 */;

const themes = tmp3(4567);
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
