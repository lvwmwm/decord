// Module ID: 9559
// Function ID: 9560
// Name: useDefaultVariantIndex
// Dependencies: [7834, 504, 7830, 2]
// Exports: useDefaultVariantIndex

// Module 9559 (useDefaultVariantIndex)
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7834 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useDefaultVariantIndex.tsx");

export function useDefaultVariantIndex(product) {
  let purchases;
  const items = [CollectiblesPurchaseStore];
  const obj = require("get initialized");
  const tmp = _require;
  _require = obj.useStateFromStores(items, () => purchases.purchases);
  let num = 0;
  if (null != product) {
    num = 0;
    const tmpResult = tmp(7830);
    if (tmpResult.getIsVariantProduct(product)) {
      const _Math = Math;
      const variants = product.variants;
      num = Math.max(0, variants.findIndex((skuId) => !set.has(skuId.skuId)));
    }
  }
  return num;
}
