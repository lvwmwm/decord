// Module ID: 7846
// Function ID: 62563
// Name: useCollectiblesData
// Dependencies: []
// Exports: default

// Module 7846 (useCollectiblesData)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/hooks/useCollectiblesData.tsx");

export default function useCollectiblesData(arg0) {
  const arg1 = arg0;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  const tmp = callback(obj.useStateFromStoresArray(items, () => {
    const items = [store.getCategoryForProduct(arg0), store.getProduct(arg0)];
    return items;
  }), 2);
  obj = { category: tmp[0], product: tmp[1] };
  const items1 = [closure_4];
  obj.purchase = arg1(dependencyMap[3]).useStateFromStores(items1, () => purchase.getPurchase(arg0));
  return obj;
};
