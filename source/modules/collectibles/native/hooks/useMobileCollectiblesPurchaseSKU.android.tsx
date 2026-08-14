// Module ID: 12225
// Function ID: 12226
// Name: useMobileCollectiblesPurchaseSKU
// Dependencies: [1922, 589, 9482, 10153, 2]
// Exports: default

// Module 12225 (useMobileCollectiblesPurchaseSKU)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("hasAtLeastOneGPlaySynced").fileFinishedImporting("modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx");

export default function useMobileCollectiblesPurchaseSKU(product) {
  product = product.product;
  const merged = Object.assign(product, Object.create(null));
  let obj = require(589) /* initialize */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const collectibleGoogleSkuId = require(9482) /* hasAtLeastOneGPlaySynced */.getCollectibleGoogleSkuId(product, stateFromStores);
  obj = {};
  const obj2 = require(9482) /* hasAtLeastOneGPlaySynced */;
  const merged1 = Object.assign(merged);
  obj.skuId = product.skuId;
  obj.platformSkuId = collectibleGoogleSkuId;
  obj.isFreeForStaffSelfPurchase = true;
  return importDefault(10153)(obj);
};
