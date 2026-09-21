// Module ID: 17422
// Function ID: 17423
// Name: useGiftingPromotionAssetsReady
// Dependencies: [558, 568, 11050, 17423, 2]

// Module 17422 (useGiftingPromotionAssetsReady)
import c from "c" /* 568 */;
import MarketingComponentHooks from "MarketingComponentHooks" /* 11050 */;
import usePreloadedAssetDefault from "usePreloadedAsset" /* 17423 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((asset, asset2) => {
  const cResult = c.c(7);
  asset = undefined;
  if (asset != null) {
    asset = asset.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = MarketingComponentHooks.useThemeAndReducedMotionAwareAssetUrl(asset);
  const status = usePreloadedAssetDefault(themeAndReducedMotionAwareAssetUrl).status;
  let asset1;
  if (asset2 != null) {
    asset1 = asset2.asset;
  }
  const themeAndReducedMotionAwareAssetUrl1 = MarketingComponentHooks.useThemeAndReducedMotionAwareAssetUrl(asset1);
  const status2 = usePreloadedAssetDefault(themeAndReducedMotionAwareAssetUrl1).status;
  if (cResult[0] !== status) {
    let tmp10 = "skipped" === status;
    if (!tmp10) {
      tmp10 = "preloaded" === status;
    }
    cResult[0] = status;
    cResult[1] = tmp10;
    let tmp9 = tmp10;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== status2) {
    let tmp12 = "skipped" === status2;
    if (!tmp12) {
      tmp12 = "preloaded" === status2;
    }
    cResult[2] = status2;
    cResult[3] = tmp12;
    let tmp11 = tmp12;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === tmp9) {
    if (cResult[5] === tmp11) {
      let tmp13 = cResult[6];
    }
    return tmp13;
  }
  const obj3 = { isGiftCoachmarkAssetReady: tmp9, isGiftReminderAssetReady: tmp11 };
  cResult[4] = tmp9;
  cResult[5] = tmp11;
  cResult[6] = obj3;
  tmp13 = obj3;
}) : ((asset, asset2) => {
  asset = undefined;
  if (asset != null) {
    asset = asset.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = MarketingComponentHooks.useThemeAndReducedMotionAwareAssetUrl(asset);
  const status = usePreloadedAssetDefault(themeAndReducedMotionAwareAssetUrl).status;
  let asset1;
  if (asset2 != null) {
    asset1 = asset2.asset;
  }
  const themeAndReducedMotionAwareAssetUrl1 = MarketingComponentHooks.useThemeAndReducedMotionAwareAssetUrl(asset1);
  const status2 = usePreloadedAssetDefault(themeAndReducedMotionAwareAssetUrl1).status;
  let tmp8 = "skipped" === status;
  if (!tmp8) {
    tmp8 = "preloaded" === status;
  }
  const obj2 = { isGiftCoachmarkAssetReady: tmp8, isGiftReminderAssetReady: null };
  let tmp9 = "skipped" === status2;
  if (!tmp9) {
    tmp9 = "preloaded" === status2;
  }
  obj2.isGiftReminderAssetReady = tmp9;
  return obj2;
});
