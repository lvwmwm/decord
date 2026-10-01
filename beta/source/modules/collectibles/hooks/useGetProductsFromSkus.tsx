// Module ID: 15434
// Function ID: 15435
// Name: useGetProductsFromSkus
// Dependencies: [19, 6962, 504, 15435, 2]
// Exports: default

// Module 15434 (useGetProductsFromSkus)
import react from "react" /* 19 */;
import uniqByDefault from "uniqBy" /* 15435 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6962 */;
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
