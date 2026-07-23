// Module ID: 7857
// Function ID: 62635
// Name: useCollectiblesData
// Dependencies: [57, 6774, 6790, 624, 2]
// Exports: default

// Module 7857 (useCollectiblesData)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/hooks/useCollectiblesData.tsx");

export default function useCollectiblesData(arg0) {
  const _require = arg0;
  let obj = _require(624);
  let items = [_isNativeReflectConstruct];
  const tmp = callback(obj.useStateFromStoresArray(items, () => {
    const items = [outer1_3.getCategoryForProduct(closure_0), outer1_3.getProduct(closure_0)];
    return items;
  }), 2);
  obj = { category: tmp[0], product: tmp[1] };
  const items1 = [closure_4];
  obj.purchase = _require(624).useStateFromStores(items1, () => outer1_4.getPurchase(closure_0));
  return obj;
};
