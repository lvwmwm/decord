// Module ID: 8813
// Function ID: 69561
// Name: ShopGiftModalKey
// Dependencies: [4337, 8814, 1934, 2]
// Exports: closeShopGiftModal, openShopGiftModal

// Module 8813 (ShopGiftModalKey)
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
  let obj = importDefault(4337);
  obj = { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(8814, dependencyMap.paths), obj, "Shop Gift Modal", navigationParams);
};
export const closeShopGiftModal = function closeShopGiftModal() {
  importDefault(4337).popWithKey("Shop Gift Modal");
};
