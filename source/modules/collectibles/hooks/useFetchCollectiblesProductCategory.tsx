// Module ID: 9769
// Function ID: 75973
// Name: useFetchCollectiblesProductCategory
// Dependencies: []
// Exports: useFetchCollectiblesProductCategory

// Module 9769 (useFetchCollectiblesProductCategory)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx");

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
