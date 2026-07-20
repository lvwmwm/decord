// Module ID: 9764
// Function ID: 75946
// Name: useFetchCollectiblesProductCategory
// Dependencies: [0, 0, 0, 0, 0]
// Exports: useFetchCollectiblesProductCategory

// Module 9764 (useFetchCollectiblesProductCategory)
import closure_3 from "result";
import closure_4 from "result";
import result from "result";

result = result.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx");

export const useFetchCollectiblesProductCategory = function useFetchCollectiblesProductCategory(skuId) {
  const arg1 = skuId;
  importDefault(dependencyMap[2])();
  let obj = arg1(dependencyMap[3]);
  const items = [closure_4];
  const tmp2 = callback(obj.useStateFromStoresArray(items, () => {
    const items = [categoryForProduct.isFetchingCategories, categoryForProduct.getCategoryForProduct(arg0)];
    return items;
  }), 2);
  obj = { isFetching: tmp2[0], category: tmp2[1] };
  return obj;
};
