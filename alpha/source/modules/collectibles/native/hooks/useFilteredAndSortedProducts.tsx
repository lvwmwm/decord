// Module ID: 17262
// Function ID: 17263
// Name: useFilteredAndSortedProducts
// Dependencies: [19, 1385, 1074, 17263, 17264, 17265, 504, 2176, 7876, 2]
// Exports: useFilteredAndSortedProducts

// Module 17262 (useFilteredAndSortedProducts)
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let closure_5 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx");

export function useFilteredAndSortedProducts(products) {
  products = products.products;
  const maxProducts = products.maxProducts;
  const bypassAndroidUnsyncedFilter = products.bypassAndroidUnsyncedFilter;
  const screen = products.screen;
  let obj = products(bypassAndroidUnsyncedFilter[3]);
  const badBundleFilter = obj.useBadBundleFilter();
  let obj2 = products(bypassAndroidUnsyncedFilter[4]);
  const androidUnsyncedFilter = obj2.useAndroidUnsyncedFilter();
  let closure_0 = tmp3;
  let items = [androidUnsyncedFilter];
  const obj3 = products(bypassAndroidUnsyncedFilter[6]);
  const stateFromStores = obj3.useStateFromStores(items, () => androidUnsyncedFilter.getCurrentUser());
  const obj4 = maxProducts(bypassAndroidUnsyncedFilter[7]);
  const canUseShopDiscountsResult = obj4.canUseShopDiscounts(stateFromStores);
  let c1 = canUseShopDiscountsResult;
  const items1 = [tmp3, canUseShopDiscountsResult];
  const callback = badBundleFilter.useCallback((arr) => {
    let hasShopDiscount;
    let found = arr;
    if (closure_0) {
      found = arr.filter((product) => {
        const obj = closure_0(bypassAndroidUnsyncedFilter[8]);
        const obj2 = { product, hasShopDiscount };
        return null != obj.getProductOrbPrice(obj2);
      });
    }
    return found;
  }, items1);
  const items2 = [badBundleFilter, androidUnsyncedFilter, products, bypassAndroidUnsyncedFilter, callback];
  const memo = badBundleFilter.useMemo(() => {
    let fn;
    const tmp = bypassAndroidUnsyncedFilter;
    if (tmp) {
      fn = (arg0) => arg0;
    } else {
      fn = androidUnsyncedFilter;
    }
    const items = [fn, badBundleFilter, callback];
    return items.reduce((acc, fn) => fn(acc), products);
  }, items2);
  const obj5 = products(bypassAndroidUnsyncedFilter[5]);
  const purchasedProductsSort = obj5.usePurchasedProductsSort(memo);
  const items3 = [purchasedProductsSort, maxProducts];
  return badBundleFilter.useMemo(() => {
    let substr;
    if (null != maxProducts) {
      substr = purchasedProductsSort.slice(0, tmp);
    } else {
      substr = purchasedProductsSort;
    }
    return substr;
  }, items3);
}
