// Module ID: 9621
// Function ID: 9622
// Name: ShopGiftModalKey
// Dependencies: [4549, 9622, 2007, 2]
// Exports: closeShopGiftModal, openShopGiftModal

// Module 9621 (ShopGiftModalKey)
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
  let obj = importDefault(4549);
  obj = { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(9622, dependencyMap.paths), obj, c3, navigationParams);
};
export const closeShopGiftModal = function closeShopGiftModal() {
  importDefault(4549).popWithKey(c3);
};
