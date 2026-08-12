// Module ID: 4020
// Function ID: 4021
// Name: isPremiumGiftingSupported
// Dependencies: [1624, 500, 2]
// Exports: isCollectibleGiftingSupported, isGooglePlayBillingSupported, isPremiumGiftingSupported, isSocialLayerStorefrontGiftingSupported

// Module 4020 (isPremiumGiftingSupported)
const result = require("set").fileFinishedImporting("modules/device/BillingPlatformUtils.tsx");

export const isPremiumGiftingSupported = function isPremiumGiftingSupported() {
  return !require(1624) /* isMetaQuest */.isMetaQuest();
};
export const isGooglePlayBillingSupported = function isGooglePlayBillingSupported() {
  let isAndroidResult = require(500) /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !require(1624) /* isMetaQuest */.isMetaQuest();
    const tmpResult = require(1624) /* isMetaQuest */;
  }
  return isAndroidResult;
};
export const isCollectibleGiftingSupported = function isCollectibleGiftingSupported() {
  return !require(1624) /* isMetaQuest */.isMetaQuest();
};
export const isSocialLayerStorefrontGiftingSupported = function isSocialLayerStorefrontGiftingSupported() {
  return !require(1624) /* isMetaQuest */.isMetaQuest();
};
