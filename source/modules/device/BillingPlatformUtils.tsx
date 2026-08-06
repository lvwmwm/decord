// Module ID: 3943
// Function ID: 3944
// Name: isPremiumGiftingSupported
// Dependencies: [1605, 500, 2]
// Exports: isCollectibleGiftingSupported, isGooglePlayBillingSupported, isPremiumGiftingSupported, isSocialLayerStorefrontGiftingSupported

// Module 3943 (isPremiumGiftingSupported)
const result = require("set").fileFinishedImporting("modules/device/BillingPlatformUtils.tsx");

export const isPremiumGiftingSupported = function isPremiumGiftingSupported() {
  return !require(1605) /* isMetaQuest */.isMetaQuest();
};
export const isGooglePlayBillingSupported = function isGooglePlayBillingSupported() {
  let isAndroidResult = require(500) /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !require(1605) /* isMetaQuest */.isMetaQuest();
    const tmpResult = require(1605) /* isMetaQuest */;
  }
  return isAndroidResult;
};
export const isCollectibleGiftingSupported = function isCollectibleGiftingSupported() {
  return !require(1605) /* isMetaQuest */.isMetaQuest();
};
export const isSocialLayerStorefrontGiftingSupported = function isSocialLayerStorefrontGiftingSupported() {
  return !require(1605) /* isMetaQuest */.isMetaQuest();
};
