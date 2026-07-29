// Module ID: 8693
// Function ID: 8694
// Name: isValidCollectiblesBundle
// Dependencies: [8046, 5810, 2]
// Exports: bundleContainsNameplates, isValidCollectiblesBundle, isValidCollectiblesBundleItems

// Module 8693 (isValidCollectiblesBundle)
const result = require("set").fileFinishedImporting("modules/collectibles/utils/bundleUtils.tsx");

export const isValidCollectiblesBundle = function isValidCollectiblesBundle(items) {
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  const itemsSortingHat = new require(8046) /* firstAvatarDecoration */.ItemsSortingHat(items.items);
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = itemsSortingHat);
  let tmp2 = null != firstAvatarDecoration && null != firstProfileEffect && null == firstNameplate;
  if (!tmp2) {
    tmp2 = null != firstAvatarDecoration && null != firstProfileEffect && null != firstNameplate;
    const tmp3 = null != firstAvatarDecoration && null != firstProfileEffect && null != firstNameplate;
  }
  return tmp2;
};
export const isValidCollectiblesBundleItems = function isValidCollectiblesBundleItems(items) {
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  const itemsSortingHat = new require(8046) /* firstAvatarDecoration */.ItemsSortingHat(items);
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = itemsSortingHat);
  let tmp2 = null != firstAvatarDecoration && null != firstProfileEffect && null == firstNameplate;
  if (!tmp2) {
    tmp2 = null != firstAvatarDecoration && null != firstProfileEffect && null != firstNameplate;
    const tmp3 = null != firstAvatarDecoration && null != firstProfileEffect && null != firstNameplate;
  }
  return tmp2;
};
export const bundleContainsNameplates = function bundleContainsNameplates(items) {
  let firstAvatarDecoration;
  let firstProfileEffect;
  let isBundleProductResult = require(5810) /* getItemRecordsFromPurchases */.isBundleProduct(items);
  if (isBundleProductResult) {
    items = items.items;
    const itemsSortingHat = new require(8046) /* firstAvatarDecoration */.ItemsSortingHat(items);
    ({ firstProfileEffect, firstAvatarDecoration } = itemsSortingHat);
    isBundleProductResult = null != itemsSortingHat.firstNameplate;
  }
  return isBundleProductResult;
};
