// Module ID: 4739
// Function ID: 4740
// Name: BillingPlatformUtils
// Dependencies: [1627, 1381, 2]
// Exports: isCollectibleGiftingSupported, isGooglePlayBillingSupported, isPremiumGiftingSupported, isSocialLayerStorefrontGiftingSupported, isSocialLayerStorefrontPurchaseSupported

// Module 4739 (BillingPlatformUtils)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
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
