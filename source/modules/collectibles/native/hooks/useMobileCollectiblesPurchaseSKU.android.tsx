// Module ID: 11799
// Function ID: 91579
// Name: useMobileCollectiblesPurchaseSKU
// Dependencies: []
// Exports: default

// Module 11799 (useMobileCollectiblesPurchaseSKU)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx");

export default function useMobileCollectiblesPurchaseSKU(product) {
  product = product.product;
  let obj = Object.create(null);
  obj.product = 0;
  const merged = Object.assign(product, obj);
  obj = arg1(dependencyMap[1]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const collectibleGoogleSkuId = arg1(dependencyMap[2]).getCollectibleGoogleSkuId(product, stateFromStores);
  obj = {};
  const obj2 = arg1(dependencyMap[2]);
  const merged1 = Object.assign(merged);
  obj["skuId"] = product.skuId;
  obj["platformSkuId"] = collectibleGoogleSkuId;
  obj["isFreeForStaffSelfPurchase"] = true;
  return importDefault(dependencyMap[3])(obj);
};
