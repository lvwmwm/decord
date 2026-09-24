// Module ID: 11343
// Function ID: 11344
// Name: openGiftModal
// Dependencies: [4993, 11344, 1984, 2]
// Exports: closeShopGiftModal, openShopGiftModal

// Module 11343 (openGiftModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import size from "module_2" /* 2 */;

let c3 = "Shop Gift Modal";
const result = size.fileFinishedImporting("modules/collectibles/native/openGiftModal.tsx");

export const ShopGiftModalKey = "Shop Gift Modal";
export const openShopGiftModal = function openShopGiftModal(items1) {
  ({ navigationParams, skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = items1);
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11344, dependencyMap.paths), { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin }, c3, navigationParams);
};
export const closeShopGiftModal = function closeShopGiftModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
};
