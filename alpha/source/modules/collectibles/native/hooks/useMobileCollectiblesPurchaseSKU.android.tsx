// Module ID: 11529
// Function ID: 11530
// Name: useMobileCollectiblesPurchaseSKU
// Dependencies: [1386, 504, 11199, 11530, 2]
// Exports: default

// Module 11529 (useMobileCollectiblesPurchaseSKU)
import get_initialized from "get initialized" /* 504 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 11199 */;
import useMobilePurchaseSKUDefault from "useMobilePurchaseSKU" /* 11530 */;
import UserStore from "UserStore" /* 1386 */;
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
