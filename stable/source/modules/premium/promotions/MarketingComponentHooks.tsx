// Module ID: 10774
// Function ID: 10775
// Name: MarketingComponentHooks
// Dependencies: [5171, 5401, 504, 5192, 2]
// Exports: useThemeAndReducedMotionAwareAssetUrl

// Module 10774 (MarketingComponentHooks)
import get_initialized from "get initialized" /* 504 */;
import useThemeDefault from "useTheme" /* 5401 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import size from "module_2" /* 2 */;

let tmp3;
const themes = tmp3(5192);
const result = size.fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export function useThemeAndReducedMotionAwareAssetUrl(asset, arg1) {
  let useReducedMotion;
  const items = [AccessibilityStore];
  const tmp2 = useThemeDefault();
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp5 = null;
  if (null != asset) {
    const tmp3Result = themes;
    if (!tmp3Result.isThemeDark(tmp2)) {
      let tmp7;
      const tmp6 = arg1;
      if (!tmp6) {
        tmp7 = stateFromStores ? asset.lightStaticUrl : asset.lightUrl;
      }
      tmp5 = tmp7;
    }
    tmp7 = stateFromStores ? asset.darkStaticUrl : asset.darkUrl;
  }
  return tmp5;
}
