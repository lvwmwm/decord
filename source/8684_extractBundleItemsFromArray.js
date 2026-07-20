// Module ID: 8684
// Function ID: 68819
// Name: extractBundleItemsFromArray
// Dependencies: [0, 0, 0]
// Exports: bundleContainsNameplates, isValidCollectiblesBundle, isValidCollectiblesBundleItems

// Module 8684 (extractBundleItemsFromArray)
import result from "result";

function extractBundleItemsFromArray(items) {
  const itemsSortingHat = new require(dependencyMap[0]).ItemsSortingHat(items);
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
result = result.fileFinishedImporting("modules/collectibles/utils/bundleUtils.tsx");

export const isValidCollectiblesBundle = function isValidCollectiblesBundle(items) {
  return isValidBundleItems(extractBundleItems(items));
};
export const isValidCollectiblesBundleItems = function isValidCollectiblesBundleItems(items) {
  return isValidBundleItems(extractBundleItemsFromArray(items));
};
export const bundleContainsNameplates = function bundleContainsNameplates(type) {
  const tmp = !require(dependencyMap[1]).isBundleProduct(type);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = null != extractBundleItems(type).firstNameplate;
  }
  return tmp2;
};
