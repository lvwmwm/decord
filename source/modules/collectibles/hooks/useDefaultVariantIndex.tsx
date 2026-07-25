// Module ID: 8593
// Function ID: 68265
// Name: useDefaultVariantIndex
// Dependencies: [5786, 566, 5781, 2]
// Exports: useDefaultVariantIndex

// Module 8593 (useDefaultVariantIndex)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getProductOrbPrice").fileFinishedImporting("modules/collectibles/hooks/useDefaultVariantIndex.tsx");

export const useDefaultVariantIndex = function useDefaultVariantIndex(product) {
  const items = [_isNativeReflectConstruct];
  _require = _require(566).useStateFromStores(items, () => outer1_2.purchases);
  let num = 0;
  if (null != product) {
    num = 0;
    if (obj2.getIsVariantProduct(product)) {
      const _Math = Math;
      const variants = product.variants;
      num = Math.max(0, variants.findIndex((skuId) => !set.has(skuId.skuId)));
    }
    obj2 = _require(5781);
  }
  return num;
};
