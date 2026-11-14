// Module ID: 11684
// Function ID: 11685
// Name: MarketingComponentHooks
// Dependencies: [5307, 5547, 504, 5328, 2]
// Exports: getThemeAndReducedMotionAwareAssetUrl, useThemeAndReducedMotionAwareAssetUrl

// Module 11684 (MarketingComponentHooks)
import get_initialized from "get initialized" /* 504 */;
import themes from "themes" /* 5328 */;
import useThemeDefault from "useTheme" /* 5547 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export function useThemeAndReducedMotionAwareAssetUrl(asset, arg1) {
  let useReducedMotion;
  const items = [AccessibilityStore];
  const tmp = useThemeDefault();
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = themes;
  let tmp5 = null;
  const isThemeDarkResult = obj2.isThemeDark(tmp) || true === arg1;
  if (null != asset) {
    let tmp6;
    if (isThemeDarkResult) {
      tmp6 = stateFromStores ? asset.darkStaticUrl : asset.darkUrl;
    } else {
      tmp6 = stateFromStores ? asset.lightStaticUrl : asset.lightUrl;
    }
    tmp5 = tmp6;
  }
  return tmp5;
}
export function getThemeAndReducedMotionAwareAssetUrl(darkStaticUrl, arg1, arg2) {
  let tmp = null;
  if (null != darkStaticUrl) {
    let tmp4;
    if (arg1) {
      tmp4 = arg2 ? darkStaticUrl.darkStaticUrl : darkStaticUrl.darkUrl;
    } else {
      tmp4 = arg2 ? darkStaticUrl.lightStaticUrl : darkStaticUrl.lightUrl;
    }
    tmp = tmp4;
  }
  return tmp;
}
