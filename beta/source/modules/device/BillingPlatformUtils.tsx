// Module ID: 4782
// Function ID: 4783
// Name: BillingPlatformUtils
// Dependencies: [1628, 1382, 2]
// Exports: isCollectibleGiftingSupported, isGooglePlayBillingSupported, isPremiumGiftingSupported, isSocialLayerStorefrontGiftingSupported, isSocialLayerStorefrontPurchaseSupported

// Module 4782 (BillingPlatformUtils)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/BillingPlatformUtils.tsx");

export const isPremiumGiftingSupported = function isPremiumGiftingSupported() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
};
export const isGooglePlayBillingSupported = function isGooglePlayBillingSupported() {
  const obj = PlatformUtils;
  let isAndroidResult = obj.isAndroid();
  if (isAndroidResult) {
    const tmpResult = MetaQuestUtils;
    isAndroidResult = !tmpResult.isMetaQuest();
  }
  return isAndroidResult;
};
export const isCollectibleGiftingSupported = function isCollectibleGiftingSupported() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
};
export const isSocialLayerStorefrontGiftingSupported = function isSocialLayerStorefrontGiftingSupported() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
};
export const isSocialLayerStorefrontPurchaseSupported = function isSocialLayerStorefrontPurchaseSupported() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
};
