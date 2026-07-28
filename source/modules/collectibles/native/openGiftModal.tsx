// Module ID: 8745
// Function ID: 69192
// Name: ShopGiftModalKey
// Dependencies: [4372, 8746, 1935, 2]
// Exports: closeShopGiftModal, openShopGiftModal

// Module 8745 (ShopGiftModalKey)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/collectibles/native/openGiftModal.tsx");

export const ShopGiftModalKey = "Shop Gift Modal";
export const openShopGiftModal = function openShopGiftModal(arg0) {
  let analyticsLocations;
  let giftingOrigin;
  let lockedRecipientUser;
  let navigationParams;
  let onGiftModalDismiss;
  let skuId;
  ({ navigationParams, skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = arg0);
  let obj = importDefault(4372);
  obj = { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(8746, dependencyMap.paths), obj, "Shop Gift Modal", navigationParams);
};
export const closeShopGiftModal = function closeShopGiftModal() {
  importDefault(4372).popWithKey("Shop Gift Modal");
};
