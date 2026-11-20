// Module ID: 13786
// Function ID: 13787
// Name: openGiftModal
// Dependencies: [6310, 13787, 2119, 2]
// Exports: closeShopGiftModal, openShopGiftModal

// Module 13786 (openGiftModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

let c3 = "Shop Gift Modal";
const result = size.fileFinishedImporting("modules/collectibles/native/openGiftModal.tsx");

export const ShopGiftModalKey = "Shop Gift Modal";
export function openShopGiftModal(arg0) {
  let analyticsLocations;
  let giftingOrigin;
  let lockedRecipientUser;
  let navigationParams;
  let onGiftModalDismiss;
  let skuId;
  ({ navigationParams, skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin };
  obj.pushLazy(asyncRequire(13787, dependencyMap.paths), obj2, c3, navigationParams);
}
export function closeShopGiftModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
}
