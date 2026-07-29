// Module ID: 11888
// Function ID: 11889
// Name: useMobileCollectiblesPurchaseSKU
// Dependencies: [1874, 589, 8716, 9760, 2]
// Exports: default

// Module 11888 (useMobileCollectiblesPurchaseSKU)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("hasAtLeastOneGPlaySynced").fileFinishedImporting("modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx");

export default function useMobileCollectiblesPurchaseSKU(product) {
  product = product.product;
  const merged = Object.assign(product, Object.create(null));
  let obj = require(589) /* initialize */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const collectibleGoogleSkuId = require(8716) /* hasAtLeastOneGPlaySynced */.getCollectibleGoogleSkuId(product, stateFromStores);
  obj = {};
  const obj2 = require(8716) /* hasAtLeastOneGPlaySynced */;
  const merged1 = Object.assign(merged);
  obj.skuId = product.skuId;
  obj.platformSkuId = collectibleGoogleSkuId;
  obj.isFreeForStaffSelfPurchase = true;
  return importDefault(9760)(obj);
};
