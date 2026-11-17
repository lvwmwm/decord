// Module ID: 15214
// Function ID: 15215
// Name: useMobileCollectiblesPurchaseSKU
// Dependencies: [1388, 504, 10183, 10222, 2]
// Exports: default

// Module 15214 (useMobileCollectiblesPurchaseSKU)
import get_initialized from "get initialized" /* 504 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 10183 */;
import useMobilePurchaseSKUDefault from "useMobilePurchaseSKU" /* 10222 */;
import UserStore from "UserStore" /* 1388 */;
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
