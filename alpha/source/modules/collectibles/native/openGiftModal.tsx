// Module ID: 14638
// Function ID: 14639
// Name: openGiftModal
// Dependencies: [6879, 14639, 2123, 2]
// Exports: closeShopGiftModal, openShopGiftModal

// Module 14638 (openGiftModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
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
  obj.pushLazy(asyncRequire(14639, dependencyMap.paths), obj2, c3, navigationParams);
}
export function closeShopGiftModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
}
