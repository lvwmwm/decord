// Module ID: 13854
// Function ID: 104768
// Name: productPurchaseStatus
// Dependencies: []
// Exports: usePurchasedProductsSort

// Module 13854 (productPurchaseStatus)
function productPurchaseStatus(type, arr) {
  const require = arr;
  if (type.type === require(dependencyMap[2]).CollectiblesItemType.BUNDLE) {
    const items = type.items;
    if (items.some((skuId) => arg1.includes(skuId.skuId))) {
      return constants.PARTIAL_OWNED_BUNDLE;
    }
  }
  if (obj.getIsVariantProduct(type)) {
    const variants = type.variants;
    variants.every((skuId) => arg1.includes(skuId.skuId)) ? constants.PURCHASED : constants.NOT_PURCHASED;
  } else {
    return arr.includes(type.skuId) ? constants.PURCHASED : constants.NOT_PURCHASED;
  }
}
const useMemo = require(dependencyMap[0]).useMemo;
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = { NOT_PURCHASED: 0, [0]: "NOT_PURCHASED", PARTIAL_OWNED_BUNDLE: 1, [1]: "PARTIAL_OWNED_BUNDLE", PURCHASED: 2, [2]: "PURCHASED" };
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/collectibles/hooks/usePurchasedProductsSort.tsx");

export const usePurchasedProductsSort = function usePurchasedProductsSort(memo) {
  const require = memo;
  const items = [closure_3];
  const stateFromStores = require(dependencyMap[4]).useStateFromStores(items, () => purchases.purchases);
  const dependencyMap = stateFromStores;
  const items1 = [stateFromStores];
  const tmp2 = useMemo(() => {
    const items = [...closure_1];
    return items.map((arg0) => {
      let tmp;
      [tmp] = arg0;
      return tmp;
    });
  }, items1);
  const useMemo = tmp2;
  const items2 = [memo, tmp2];
  return useMemo(() => {
    const items = [...closure_0];
    return items.sort((arg0, arg1) => callback(arg0, closure_2) - callback(arg1, closure_2));
  }, items2);
};
