// Module ID: 13890
// Function ID: 13891
// Name: openGiftModal
// Dependencies: [6673, 13891, 1999, 2]
// Exports: closeShopGiftModal, openShopGiftModal

// Module 13890 (openGiftModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
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
  obj.pushLazy(asyncRequire(13891, dependencyMap.paths), obj2, c3, navigationParams);
};
export const closeShopGiftModal = function closeShopGiftModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
};
