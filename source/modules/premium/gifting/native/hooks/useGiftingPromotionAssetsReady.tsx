// Module ID: 16017
// Function ID: 16018
// Name: useGiftingPromotionAssetsReady
// Dependencies: [10042, 16018, 2]
// Exports: default

// Module 16017 (useGiftingPromotionAssetsReady)
const result = require("set").fileFinishedImporting("modules/premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx");

export default function useGiftingPromotionAssetsReady(asset, asset2) {
  let obj = require(10042) /* useThemeAndReducedMotionAwareAssetUrl */;
  asset = undefined;
  if (asset != null) {
    asset = asset.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = obj.useThemeAndReducedMotionAwareAssetUrl(asset);
  const status = importDefault(16018)(themeAndReducedMotionAwareAssetUrl).status;
  let asset1;
  if (asset2 != null) {
    asset1 = asset2.asset;
  }
  const themeAndReducedMotionAwareAssetUrl1 = require(10042) /* useThemeAndReducedMotionAwareAssetUrl */.useThemeAndReducedMotionAwareAssetUrl(asset1);
  const status2 = importDefault(16018)(themeAndReducedMotionAwareAssetUrl1).status;
  let tmp8 = "skipped" === status;
  if (!tmp8) {
    tmp8 = "preloaded" === status;
  }
  obj = { isGiftCoachmarkAssetReady: tmp8, isGiftReminderAssetReady: null };
  let tmp9 = "skipped" === status2;
  if (!tmp9) {
    tmp9 = "preloaded" === status2;
  }
  obj[1] = tmp9;
  return obj;
};
