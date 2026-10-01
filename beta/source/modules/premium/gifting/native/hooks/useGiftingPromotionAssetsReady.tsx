// Module ID: 16780
// Function ID: 16781
// Name: useGiftingPromotionAssetsReady
// Dependencies: [10218, 16781, 2]
// Exports: default

// Module 16780 (useGiftingPromotionAssetsReady)
import MarketingComponentHooks from "MarketingComponentHooks" /* 10218 */;
import usePreloadedAssetDefault from "usePreloadedAsset" /* 16781 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx");

export default function useGiftingPromotionAssetsReady(asset, asset2) {
  asset = undefined;
  const useThemeAndReducedMotionAwareAssetUrl = MarketingComponentHooks.useThemeAndReducedMotionAwareAssetUrl;
  MarketingComponentHooks;
  if (asset != null) {
    asset = asset.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = useThemeAndReducedMotionAwareAssetUrl(asset);
  const status = usePreloadedAssetDefault(themeAndReducedMotionAwareAssetUrl).status;
  let asset1;
  const useThemeAndReducedMotionAwareAssetUrl2 = tmp(10218).useThemeAndReducedMotionAwareAssetUrl;
  MarketingComponentHooks;
  if (asset2 != null) {
    asset1 = asset2.asset;
  }
  const themeAndReducedMotionAwareAssetUrl2 = useThemeAndReducedMotionAwareAssetUrl2(asset1);
  const status2 = usePreloadedAssetDefault(themeAndReducedMotionAwareAssetUrl2).status;
  const obj = { isGiftCoachmarkAssetReady: "skipped" === status || "preloaded" === status, isGiftReminderAssetReady: tmp11 };
  return obj;
};
