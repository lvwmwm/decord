// Module ID: 14736
// Function ID: 14737
// Name: useFetchCollectiblesProductCategory
// Dependencies: [32, 7796, 10726, 563, 2]
// Exports: useFetchCollectiblesProductCategory

// Module 14736 (useFetchCollectiblesProductCategory)
import useMaybeFetchCollectiblesCategoriesDefault from "useMaybeFetchCollectiblesCategories" /* 10726 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7796 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx");

export function useFetchCollectiblesProductCategory(skuId) {
  _require = skuId;
  useMaybeFetchCollectiblesCategoriesDefault();
  let items = [CollectiblesCategoryStore];
  const obj = require("useStateFromStores");
  const tmp2 = _slicedToArray(obj.useStateFromStoresArray(items, () => {
    const items = [CollectiblesCategoryStore.isFetchingCategories, CollectiblesCategoryStore.getCategoryForProduct(skuId)];
    return items;
  }), 2);
  return { isFetching: tmp2[0], category: tmp2[1] };
}
