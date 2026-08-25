// Module ID: 4056
// Function ID: 4057
// Name: isPremiumGiftingSupported
// Dependencies: [1625, 500, 2]
// Exports: isCollectibleGiftingSupported, isGooglePlayBillingSupported, isPremiumGiftingSupported, isSocialLayerStorefrontGiftingSupported, isSocialLayerStorefrontPurchaseSupported

// Module 4056 (isPremiumGiftingSupported)
import set from "set" /* 2 */;
import set2 from "set" /* 500 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;

const result = set.fileFinishedImporting("modules/device/BillingPlatformUtils.tsx");

export const isPremiumGiftingSupported = function isPremiumGiftingSupported() {
  return !isMetaQuest.isMetaQuest();
};
export const isGooglePlayBillingSupported = function isGooglePlayBillingSupported() {
  let isAndroidResult = set2.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !isMetaQuest.isMetaQuest();
    const tmpResult = isMetaQuest;
  }
  return isAndroidResult;
};
export const isCollectibleGiftingSupported = function isCollectibleGiftingSupported() {
  return !isMetaQuest.isMetaQuest();
};
export const isSocialLayerStorefrontGiftingSupported = function isSocialLayerStorefrontGiftingSupported() {
  return !isMetaQuest.isMetaQuest();
};
export const isSocialLayerStorefrontPurchaseSupported = function isSocialLayerStorefrontPurchaseSupported() {
  return !isMetaQuest.isMetaQuest();
};
