// Module ID: 8104
// Function ID: 8105
// Name: useCollectiblesData
// Dependencies: [32, 7475, 7491, 644, 2]
// Exports: default

// Module 8104 (useCollectiblesData)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "updateCategoriesAndProducts" /* 7475 */;
import closure_4 from "map" /* 7491 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useCollectiblesData.tsx");

export default function useCollectiblesData(arg0) {
  const _require = arg0;
  let obj = _require(644);
  let items = [closure_3];
  const tmp = callback(obj.useStateFromStoresArray(items, () => {
    const items = [closure_1_3.getCategoryForProduct(closure_0), closure_1_3.getProduct(closure_0)];
    return items;
  }), 2);
  obj = { category: tmp[0], product: tmp[1], purchase: _require(644).useStateFromStores(items1, () => closure_1_4.getPurchase(closure_0)) };
  items1 = [closure_4];
  return obj;
};
