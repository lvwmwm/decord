// Module ID: 8737
// Function ID: 69112
// Name: extractBundleItemsFromArray
// Dependencies: [8251, 6786, 2]
// Exports: bundleContainsNameplates, isValidCollectiblesBundle, isValidCollectiblesBundleItems

// Module 8737 (extractBundleItemsFromArray)
function extractBundleItemsFromArray(items) {
  const itemsSortingHat = new require(8251) /* ItemsSortingHat */.ItemsSortingHat(items);
  return { firstProfileEffect: itemsSortingHat.firstProfileEffect, firstAvatarDecoration: itemsSortingHat.firstAvatarDecoration, firstNameplate: itemsSortingHat.firstNameplate };
}
function extractBundleItems(items) {
  return extractBundleItemsFromArray(items.items);
}
function isValidBundleItems(arg0) {
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = arg0);
  let tmp = null != firstAvatarDecoration && null != firstProfileEffect && null == firstNameplate;
  if (!tmp) {
    tmp = null != firstAvatarDecoration && null != firstProfileEffect && null != firstNameplate;
    const tmp2 = null != firstAvatarDecoration && null != firstProfileEffect && null != firstNameplate;
  }
  return tmp;
}
const result = require("set").fileFinishedImporting("modules/collectibles/utils/bundleUtils.tsx");

export const isValidCollectiblesBundle = function isValidCollectiblesBundle(items) {
  return isValidBundleItems(extractBundleItems(items));
};
export const isValidCollectiblesBundleItems = function isValidCollectiblesBundleItems(items) {
  return isValidBundleItems(extractBundleItemsFromArray(items));
};
export const bundleContainsNameplates = function bundleContainsNameplates(type) {
  const tmp = !require(6786) /* getPriceForCollectiblesProduct */.isBundleProduct(type);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = null != extractBundleItems(type).firstNameplate;
  }
  return tmp2;
};
