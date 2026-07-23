// Module ID: 11817
// Function ID: 91677
// Name: useMobileCollectiblesPurchaseSKU
// Dependencies: [1849, 566, 8719, 9740, 2]
// Exports: default

// Module 11817 (useMobileCollectiblesPurchaseSKU)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx");

export default function useMobileCollectiblesPurchaseSKU(product) {
  product = product.product;
  let obj = Object.create(null);
  obj.product = 0;
  const merged = Object.assign(product, obj);
  obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getCurrentUser());
  const collectibleGoogleSkuId = require(8719) /* _createForOfIteratorHelperLoose */.getCollectibleGoogleSkuId(product, stateFromStores);
  obj = {};
  const obj2 = require(8719) /* _createForOfIteratorHelperLoose */;
  const merged1 = Object.assign(merged);
  obj["skuId"] = product.skuId;
  obj["platformSkuId"] = collectibleGoogleSkuId;
  obj["isFreeForStaffSelfPurchase"] = true;
  return importDefault(9740)(obj);
};
