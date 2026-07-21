// Module ID: 13852
// Function ID: 104770
// Name: useGetProductsFromSkus
// Dependencies: []
// Exports: default

// Module 13852 (useGetProductsFromSkus)
require(dependencyMap[0]).useCallback;
let closure_4 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/collectibles/hooks/useGetProductsFromSkus.tsx");

export default function useGetProductsFromSkus() {
  const items = [closure_4];
  const stateFromStores = require(dependencyMap[2]).useStateFromStores(items, () => products.products);
  const require = stateFromStores;
  const items1 = [stateFromStores];
  return useCallback((arr) => {
    const mapped = arr.map((arg0) => {
      const value = closure_0.get(arg0);
      let productByStoreListingId = value;
      if (null != value) {
        productByStoreListingId = value;
        if (null != value.variantGroupStoreListingId) {
          productByStoreListingId = productByStoreListingId.getProductByStoreListingId(value.variantGroupStoreListingId);
        }
      }
      return productByStoreListingId;
    });
    return callback(closure_2[3])(mapped.filter((arg0) => null != arg0), "storeListingId");
  }, items1);
};
