// Module ID: 11585
// Function ID: 11586
// Name: useMobileCollectiblesPurchaseSKU
// Dependencies: [1387, 504, 11246, 11586, 2]
// Exports: default

// Module 11585 (useMobileCollectiblesPurchaseSKU)
import get_initialized from "get initialized" /* 504 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 11246 */;
import useMobilePurchaseSKUDefault from "useMobilePurchaseSKU" /* 11586 */;
import UserStore from "UserStore" /* 1387 */;
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
