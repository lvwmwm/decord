// Module ID: 9345
// Function ID: 9346
// Name: useDefaultVariantIndex
// Dependencies: [7017, 589, 7012, 2]
// Exports: useDefaultVariantIndex

// Module 9345 (useDefaultVariantIndex)
import map from "map";

const require = arg1;
const result = require("getProductOrbPrice").fileFinishedImporting("modules/collectibles/hooks/useDefaultVariantIndex.tsx");

export const useDefaultVariantIndex = function useDefaultVariantIndex(product) {
  const items = [map];
  _require = _require(589).useStateFromStores(items, () => purchases.purchases);
  let num = 0;
  if (null != product) {
    num = 0;
    if (tmpResult.getIsVariantProduct(product)) {
      const _Math = Math;
      const variants = product.variants;
      num = Math.max(0, variants.findIndex((skuId) => !set.has(skuId.skuId)));
    }
    tmpResult = _require(7012);
  }
  return num;
};
