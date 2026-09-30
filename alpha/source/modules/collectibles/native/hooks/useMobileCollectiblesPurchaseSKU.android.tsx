// Module ID: 10683
// Function ID: 10684
// Name: useMobileCollectiblesPurchaseSKU
// Dependencies: [1372, 504, 8509, 10478, 2]
// Exports: default

// Module 10683 (useMobileCollectiblesPurchaseSKU)
import initialize from "initialize" /* 504 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 8509 */;
import useMobilePurchaseSKUDefault from "useMobilePurchaseSKU" /* 10478 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx");

export default function useMobileCollectiblesPurchaseSKU(product) {
  product = product.product;
  const merged = Object.assign(product, Object.assign({ product: 0 }));
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const collectibleGoogleSkuId = collectibles_CollectiblesUtils.getCollectibleGoogleSkuId(product, stateFromStores);
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.skuId = product.skuId;
  obj3.platformSkuId = collectibleGoogleSkuId;
  obj3.isFreeForStaffSelfPurchase = true;
  return useMobilePurchaseSKUDefault(obj3);
};
