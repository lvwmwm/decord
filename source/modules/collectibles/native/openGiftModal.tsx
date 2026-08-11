// Module ID: 9581
// Function ID: 9582
// Name: ShopGiftModalKey
// Dependencies: [4509, 9582, 2007, 2]
// Exports: closeShopGiftModal, openShopGiftModal

// Module 9581 (ShopGiftModalKey)
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
  let obj = importDefault(4509);
  obj = { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(9582, dependencyMap.paths), obj, c3, navigationParams);
};
export const closeShopGiftModal = function closeShopGiftModal() {
  importDefault(4509).popWithKey(c3);
};
