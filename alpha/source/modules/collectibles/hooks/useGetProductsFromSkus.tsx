// Module ID: 17508
// Function ID: 17509
// Name: useGetProductsFromSkus
// Dependencies: [19, 6311, 504, 17509, 2]
// Exports: default

// Module 17508 (useGetProductsFromSkus)
import react from "react" /* 19 */;
import uniqByDefault from "uniqBy" /* 17509 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6311 */;
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
