// Module ID: 14696
// Function ID: 14697
// Name: useMobileCollectiblesPurchaseSKU
// Dependencies: [1385, 504, 9641, 10810, 2]
// Exports: default

// Module 14696 (useMobileCollectiblesPurchaseSKU)
import get_initialized from "get initialized" /* 504 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 9641 */;
import useMobilePurchaseSKUDefault from "useMobilePurchaseSKU" /* 10810 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx");

export default function useMobileCollectiblesPurchaseSKU(product) {
  let currentUser;
  product = product.product;
  const merged = Object.assign(product, Object.assign({ product: 0 }));
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = collectibles_CollectiblesUtils;
  const collectibleGoogleSkuId = obj2.getCollectibleGoogleSkuId(product, stateFromStores);
  const obj3 = { skuId: product.skuId, platformSkuId: collectibleGoogleSkuId, isFreeForStaffSelfPurchase: true };
  const tmp4 = useMobilePurchaseSKUDefault;
  const merged1 = Object.assign(merged);
  return tmp4(obj3);
};
