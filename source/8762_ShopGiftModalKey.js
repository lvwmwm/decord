// Module ID: 8762
// Function ID: 69270
// Name: ShopGiftModalKey
// Dependencies: []
// Exports: closeShopGiftModal, openShopGiftModal

// Module 8762 (ShopGiftModalKey)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/collectibles/native/openGiftModal.tsx");

export const ShopGiftModalKey = "Shop Gift Modal";
export const openShopGiftModal = function openShopGiftModal(arg0) {
  let analyticsLocations;
  let giftingOrigin;
  let lockedRecipientUser;
  let navigationParams;
  let onGiftModalDismiss;
  let skuId;
  ({ navigationParams, skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = arg0);
  let obj = importDefault(dependencyMap[0]);
  obj = { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin };
  obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), obj, "Shop Gift Modal", navigationParams);
};
export const closeShopGiftModal = function closeShopGiftModal() {
  importDefault(dependencyMap[0]).popWithKey("Shop Gift Modal");
};
