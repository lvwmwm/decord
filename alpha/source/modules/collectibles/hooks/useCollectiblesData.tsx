// Module ID: 8744
// Function ID: 8745
// Name: useCollectiblesData
// Dependencies: [32, 7720, 7735, 563, 2]
// Exports: default

// Module 8744 (useCollectiblesData)
import _slicedToArray from "_slicedToArray" /* 32 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7720 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7735 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectiblesData.tsx");

export default function useCollectiblesData(arg0) {
  let closure_0;
  let items1;
  let obj3;
  _require = arg0;
  let items = [CollectiblesCategoryStore];
  const obj = require("useStateFromStores");
  const tmp = _slicedToArray(obj.useStateFromStoresArray(items, () => {
    const items = [CollectiblesCategoryStore.getCategoryForProduct(closure_0), CollectiblesCategoryStore.getProduct(closure_0)];
    return items;
  }), 2);
  const obj2 = { category: tmp[0], product: tmp[1], purchase: obj3.useStateFromStores(items1, () => CollectiblesPurchaseStore.getPurchase(closure_0)) };
  items1 = [CollectiblesPurchaseStore];
  obj3 = require("useStateFromStores");
  return obj2;
};
