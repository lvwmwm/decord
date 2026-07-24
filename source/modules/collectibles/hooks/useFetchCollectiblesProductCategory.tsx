// Module ID: 9809
// Function ID: 76221
// Name: useFetchCollectiblesProductCategory
// Dependencies: [57, 6774, 7949, 624, 2]
// Exports: useFetchCollectiblesProductCategory

// Module 9809 (useFetchCollectiblesProductCategory)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesProductCategory.tsx");

export const useFetchCollectiblesProductCategory = function useFetchCollectiblesProductCategory(skuId) {
  const _require = skuId;
  importDefault(7949)();
  let obj = _require(624);
  let items = [_isNativeReflectConstruct];
  const tmp2 = callback(obj.useStateFromStoresArray(items, () => {
    const items = [outer1_4.isFetchingCategories, outer1_4.getCategoryForProduct(closure_0)];
    return items;
  }), 2);
  obj = { isFetching: tmp2[0], category: tmp2[1] };
  return obj;
};
