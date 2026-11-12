// Module ID: 11735
// Function ID: 11736
// Name: useMobileCollectiblesPurchaseSKU
// Dependencies: [1385, 504, 10364, 11671, 2]
// Exports: default

// Module 11735 (useMobileCollectiblesPurchaseSKU)
import get_initialized from "get initialized" /* 504 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 10364 */;
import useMobilePurchaseSKUDefault from "useMobilePurchaseSKU" /* 11671 */;
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
