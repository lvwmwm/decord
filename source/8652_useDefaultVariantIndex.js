// Module ID: 8652
// Function ID: 68495
// Name: useDefaultVariantIndex
// Dependencies: []
// Exports: useDefaultVariantIndex

// Module 8652 (useDefaultVariantIndex)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/hooks/useDefaultVariantIndex.tsx");

export const useDefaultVariantIndex = function useDefaultVariantIndex(product) {
  const items = [closure_2];
  const callback = callback(dependencyMap[1]).useStateFromStores(items, () => purchases.purchases);
  let num = 0;
  if (null != product) {
    num = 0;
    if (obj2.getIsVariantProduct(product)) {
      const _Math = Math;
      const variants = product.variants;
      num = Math.max(0, variants.findIndex((skuId) => !set.has(skuId.skuId)));
    }
    const obj2 = callback(dependencyMap[2]);
  }
  return num;
};
