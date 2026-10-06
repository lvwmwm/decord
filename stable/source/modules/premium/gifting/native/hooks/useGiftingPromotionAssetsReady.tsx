// Module ID: 16782
// Function ID: 16783
// Name: useGiftingPromotionAssetsReady
// Dependencies: [558, 576, 10256, 16783, 2]

// Module 16782 (useGiftingPromotionAssetsReady)
import react from "react" /* 576 */;
import MarketingComponentHooks from "MarketingComponentHooks" /* 10256 */;
import usePreloadedAssetDefault from "usePreloadedAsset" /* 16783 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let asset;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((asset, asset2) => {
  let tmp11;
  let tmp13;
  const obj = react;
  const cResult = obj.c(7);
  asset = undefined;
  const useThemeAndReducedMotionAwareAssetUrl = MarketingComponentHooks.useThemeAndReducedMotionAwareAssetUrl;
  MarketingComponentHooks;
  if (asset != null) {
    asset = asset.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = useThemeAndReducedMotionAwareAssetUrl(asset);
  const status = usePreloadedAssetDefault(themeAndReducedMotionAwareAssetUrl).status;
  let asset1;
  const useThemeAndReducedMotionAwareAssetUrl2 = tmp(10256).useThemeAndReducedMotionAwareAssetUrl;
  MarketingComponentHooks;
  if (asset2 != null) {
    asset1 = asset2.asset;
  }
  const themeAndReducedMotionAwareAssetUrl2 = useThemeAndReducedMotionAwareAssetUrl2(asset1);
  const status2 = usePreloadedAssetDefault(themeAndReducedMotionAwareAssetUrl2).status;
  if (cResult[0] !== status) {
    cResult[0] = status;
    cResult[1] = "skipped" === status || "preloaded" === status;
    tmp11 = tmp12;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== status2) {
    cResult[2] = status2;
    cResult[3] = "skipped" === status2 || "preloaded" === status2;
    tmp13 = tmp14;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === tmp11) {
    let tmp15;
    if (cResult[5] === tmp13) {
      tmp15 = cResult[6];
    }
    return tmp15;
  }
  const obj2 = { isGiftCoachmarkAssetReady: tmp11, isGiftReminderAssetReady: tmp13 };
  cResult[4] = tmp11;
  cResult[5] = tmp13;
  cResult[6] = obj2;
  tmp15 = obj2;
}) : ((asset, asset2) => {
  asset = undefined;
  const useThemeAndReducedMotionAwareAssetUrl = MarketingComponentHooks.useThemeAndReducedMotionAwareAssetUrl;
  MarketingComponentHooks;
  if (asset != null) {
    asset = asset.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = useThemeAndReducedMotionAwareAssetUrl(asset);
  const status = usePreloadedAssetDefault(themeAndReducedMotionAwareAssetUrl).status;
  let asset1;
  const useThemeAndReducedMotionAwareAssetUrl2 = tmp(10256).useThemeAndReducedMotionAwareAssetUrl;
  MarketingComponentHooks;
  if (asset2 != null) {
    asset1 = asset2.asset;
  }
  const themeAndReducedMotionAwareAssetUrl2 = useThemeAndReducedMotionAwareAssetUrl2(asset1);
  const status2 = usePreloadedAssetDefault(themeAndReducedMotionAwareAssetUrl2).status;
  const obj = { isGiftCoachmarkAssetReady: "skipped" === status || "preloaded" === status, isGiftReminderAssetReady: tmp11 };
  return obj;
});
const result = size.fileFinishedImporting("modules/premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx");

export default tmp2;
