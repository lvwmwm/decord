// Module ID: 9391
// Function ID: 9392
// Name: useDefaultVariantIndex
// Dependencies: [7059, 589, 7054, 2]
// Exports: useDefaultVariantIndex

// Module 9391 (useDefaultVariantIndex)
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
    tmpResult = _require(7054);
  }
  return num;
};
