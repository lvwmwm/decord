// Module ID: 9588
// Function ID: 9589
// Name: useDefaultVariantIndex
// Dependencies: [7859, 504, 7855, 2]
// Exports: useDefaultVariantIndex

// Module 9588 (useDefaultVariantIndex)
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7859 */;
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
    const tmpResult = tmp(7855);
    if (tmpResult.getIsVariantProduct(product)) {
      const _Math = Math;
      const variants = product.variants;
      num = Math.max(0, variants.findIndex((skuId) => !set.has(skuId.skuId)));
    }
  }
  return num;
}
