// Module ID: 14316
// Function ID: 14317
// Name: useGetProductsFromSkus
// Dependencies: [19, 7001, 589, 14317, 2]
// Exports: default

// Module 14316 (useGetProductsFromSkus)
import updateCategoriesAndProducts from "updateCategoriesAndProducts";

require("noop").useCallback;
const result = require("initialize").fileFinishedImporting("modules/collectibles/hooks/useGetProductsFromSkus.tsx");

export default function useGetProductsFromSkus() {
  const items = [updateCategoriesAndProducts];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => products.products);
  const items1 = [stateFromStores];
  return useCallback((arr) => {
    const mapped = arr.map((arg0) => {
      const value = closure_0.get(arg0);
      let productByStoreListingId = value;
      if (null != value) {
        productByStoreListingId = value;
        if (null != value.variantGroupStoreListingId) {
          productByStoreListingId = outer1_4.getProductByStoreListingId(value.variantGroupStoreListingId);
        }
      }
      return productByStoreListingId;
    });
    return outer1_1(outer1_2[3])(mapped.filter((arg0) => null != arg0), "storeListingId");
  }, items1);
};
