// Module ID: 2060
// Function ID: 2061
// Name: BillingPlatformUtils
// Dependencies: [1623, 1376, 2]
// Exports: isCollectibleGiftingSupported, isGooglePlayBillingSupported, isPremiumGiftingSupported, isSocialLayerStorefrontGiftingSupported, isSocialLayerStorefrontPurchaseSupported

// Module 2060 (BillingPlatformUtils)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/BillingPlatformUtils.tsx");

export function isPremiumGiftingSupported() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
}
export function isGooglePlayBillingSupported() {
  const obj = PlatformUtils;
  let isAndroidResult = obj.isAndroid();
  if (isAndroidResult) {
    const tmpResult = MetaQuestUtils;
    isAndroidResult = !tmpResult.isMetaQuest();
  }
  return isAndroidResult;
}
export function isCollectibleGiftingSupported() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
}
export function isSocialLayerStorefrontGiftingSupported() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
}
export function isSocialLayerStorefrontPurchaseSupported() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
}
