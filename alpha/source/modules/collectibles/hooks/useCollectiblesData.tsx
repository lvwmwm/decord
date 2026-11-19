// Module ID: 8795
// Function ID: 8796
// Name: useCollectiblesData
// Dependencies: [32, 7956, 7971, 563, 2]
// Exports: default

// Module 8795 (useCollectiblesData)
import _slicedToArray from "_slicedToArray" /* 32 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7956 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7971 */;
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
