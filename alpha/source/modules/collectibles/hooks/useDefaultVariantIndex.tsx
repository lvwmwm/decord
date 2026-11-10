// Module ID: 9547
// Function ID: 9548
// Name: useDefaultVariantIndex
// Dependencies: [7814, 504, 7810, 2]
// Exports: useDefaultVariantIndex

// Module 9547 (useDefaultVariantIndex)
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7814 */;
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
    const tmpResult = tmp(7810);
    if (tmpResult.getIsVariantProduct(product)) {
      const _Math = Math;
      const variants = product.variants;
      num = Math.max(0, variants.findIndex((skuId) => !set.has(skuId.skuId)));
    }
  }
  return num;
}
