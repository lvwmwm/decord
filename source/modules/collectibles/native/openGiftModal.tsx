// Module ID: 9465
// Function ID: 9466
// Name: ShopGiftModalKey
// Dependencies: [4460, 9466, 1959, 2]
// Exports: closeShopGiftModal, openShopGiftModal

// Module 9465 (ShopGiftModalKey)
let c3 = "Shop Gift Modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/collectibles/native/openGiftModal.tsx");

export const ShopGiftModalKey = "Shop Gift Modal";
export const openShopGiftModal = function openShopGiftModal(arg0) {
  let analyticsLocations;
  let giftingOrigin;
  let lockedRecipientUser;
  let navigationParams;
  let onGiftModalDismiss;
  let skuId;
  ({ navigationParams, skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = arg0);
  let obj = importDefault(4460);
  obj = { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(9466, dependencyMap.paths), obj, c3, navigationParams);
};
export const closeShopGiftModal = function closeShopGiftModal() {
  importDefault(4460).popWithKey(c3);
};
