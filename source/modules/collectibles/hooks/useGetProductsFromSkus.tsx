// Module ID: 14023
// Function ID: 107289
// Name: useGetProductsFromSkus
// Dependencies: [31, 6774, 566, 14024, 2]
// Exports: default

// Module 14023 (useGetProductsFromSkus)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

require("result").useCallback;
const result = require("initialize").fileFinishedImporting("modules/collectibles/hooks/useGetProductsFromSkus.tsx");

export default function useGetProductsFromSkus() {
  const items = [_isNativeReflectConstruct];
  stateFromStores = stateFromStores(566).useStateFromStores(items, () => outer1_4.products);
  const items1 = [stateFromStores];
  return useCallback((arr) => {
    const mapped = arr.map((arg0) => {
      const value = outer1_0.get(arg0);
      let productByStoreListingId = value;
      if (null != value) {
        productByStoreListingId = value;
        if (null != value.variantGroupStoreListingId) {
          productByStoreListingId = outer2_4.getProductByStoreListingId(value.variantGroupStoreListingId);
        }
      }
      return productByStoreListingId;
    });
    return outer1_1(outer1_2[3])(mapped.filter((arg0) => null != arg0), "storeListingId");
  }, items1);
};
