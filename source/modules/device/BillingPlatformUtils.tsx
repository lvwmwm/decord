// Module ID: 3787
// Function ID: 29531
// Name: isPremiumGiftingSupported
// Dependencies: []
// Exports: isCollectibleGiftingSupported, isGooglePlayBillingSupported, isPremiumGiftingSupported, isSocialLayerStorefrontGiftingSupported

// Module 3787 (isPremiumGiftingSupported)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/device/BillingPlatformUtils.tsx");

export const isPremiumGiftingSupported = function isPremiumGiftingSupported() {
  return !require(dependencyMap[0]).isMetaQuest();
};
export const isGooglePlayBillingSupported = function isGooglePlayBillingSupported() {
  let isAndroidResult = require(dependencyMap[1]).isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !require(dependencyMap[0]).isMetaQuest();
    const obj2 = require(dependencyMap[0]);
  }
  return isAndroidResult;
};
export const isCollectibleGiftingSupported = function isCollectibleGiftingSupported() {
  return !require(dependencyMap[0]).isMetaQuest();
};
export const isSocialLayerStorefrontGiftingSupported = function isSocialLayerStorefrontGiftingSupported() {
  return !require(dependencyMap[0]).isMetaQuest();
};
