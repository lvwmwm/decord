// Module ID: 9337
// Function ID: 9338
// Name: useCollectiblesData
// Dependencies: [32, 8419, 8434, 563, 2]
// Exports: default

// Module 9337 (useCollectiblesData)
import _slicedToArray from "_slicedToArray" /* 32 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 8419 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 8434 */;
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
