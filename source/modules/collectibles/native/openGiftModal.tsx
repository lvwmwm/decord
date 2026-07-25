// Module ID: 8701
// Function ID: 69040
// Name: ShopGiftModalKey
// Dependencies: [4338, 8702, 1935, 2]
// Exports: closeShopGiftModal, openShopGiftModal

// Module 8701 (ShopGiftModalKey)
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
  let obj = importDefault(4338);
  obj = { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(8702, dependencyMap.paths), obj, "Shop Gift Modal", navigationParams);
};
export const closeShopGiftModal = function closeShopGiftModal() {
  importDefault(4338).popWithKey("Shop Gift Modal");
};
