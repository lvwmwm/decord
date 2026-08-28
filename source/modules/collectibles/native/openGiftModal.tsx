// Module ID: 10679
// Function ID: 10680
// Name: ShopGiftModalKey
// Dependencies: [4689, 10680, 2010, 2]
// Exports: closeShopGiftModal, openShopGiftModal

// Module 10679 (ShopGiftModalKey)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;

let c3 = "Shop Gift Modal";
const result = set.fileFinishedImporting("modules/collectibles/native/openGiftModal.tsx");

export const ShopGiftModalKey = "Shop Gift Modal";
export const openShopGiftModal = function openShopGiftModal(arg0) {
  ({ navigationParams, skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = arg0);
  let obj = _modDef4689;
  obj = { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin };
  obj.pushLazy(asyncRequireImpl(10680, dependencyMap.paths), obj, c3, navigationParams);
};
export const closeShopGiftModal = function closeShopGiftModal() {
  _modDef4689.popWithKey(c3);
};
