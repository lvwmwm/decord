// Module ID: 13703
// Function ID: 13704
// Name: openGiftModal
// Dependencies: [6623, 13704, 2002, 2]
// Exports: closeShopGiftModal, openShopGiftModal

// Module 13703 (openGiftModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import size from "module_2" /* 2 */;

let c3 = "Shop Gift Modal";
const result = size.fileFinishedImporting("modules/collectibles/native/openGiftModal.tsx");

export const ShopGiftModalKey = "Shop Gift Modal";
export const openShopGiftModal = function openShopGiftModal(arg0) {
  let analyticsLocations;
  let giftingOrigin;
  let lockedRecipientUser;
  let navigationParams;
  let onGiftModalDismiss;
  let skuId;
  ({ navigationParams, skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin };
  obj.pushLazy(asyncRequire(13704, dependencyMap.paths), obj2, c3, navigationParams);
};
export const closeShopGiftModal = function closeShopGiftModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
};
