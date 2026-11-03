// Module ID: 17992
// Function ID: 17993
// Name: useGetProductsFromSkus
// Dependencies: [19, 7844, 504, 17993, 2]
// Exports: default

// Module 17992 (useGetProductsFromSkus)
import react from "react" /* 19 */;
import uniqByDefault from "uniqBy" /* 17993 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7844 */;
import size from "module_2" /* 2 */;

let productByStoreListingId;

const useCallback = react.useCallback;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useGetProductsFromSkus.tsx");

export default function useGetProductsFromSkus() {
  let stateFromStores;
  const items = [CollectiblesCategoryStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => productByStoreListingId.products);
  const items1 = [stateFromStores];
  return useCallback((arr) => {
    const tmp = uniqByDefault;
    const mapped = arr.map((item) => {
      const value = stateFromStores.get(item);
      productByStoreListingId = value;
      if (null != value) {
        productByStoreListingId = value;
        if (null != value.variantGroupStoreListingId) {
          productByStoreListingId = productByStoreListingId.getProductByStoreListingId(value.variantGroupStoreListingId);
        }
      }
      return productByStoreListingId;
    });
    return tmp(mapped.filter((item) => null != item), "storeListingId");
  }, items1);
};
