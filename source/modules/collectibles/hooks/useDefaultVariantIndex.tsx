// Module ID: 9409
// Function ID: 9410
// Name: useDefaultVariantIndex
// Dependencies: [7087, 589, 7082, 2]
// Exports: useDefaultVariantIndex

// Module 9409 (useDefaultVariantIndex)
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
    tmpResult = _require(7082);
  }
  return num;
};
