// Module ID: 10417
// Function ID: 10418
// Name: useDefaultVariantIndex
// Dependencies: [8500, 504, 8496, 2]
// Exports: useDefaultVariantIndex

// Module 10417 (useDefaultVariantIndex)
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 8500 */;
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
    const tmpResult = tmp(8496);
    if (tmpResult.getIsVariantProduct(product)) {
      const _Math = Math;
      const variants = product.variants;
      num = Math.max(0, variants.findIndex((skuId) => !set.has(skuId.skuId)));
    }
  }
  return num;
}
