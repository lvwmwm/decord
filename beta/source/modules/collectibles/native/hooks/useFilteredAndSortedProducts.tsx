// Module ID: 14604
// Function ID: 14605
// Name: useFilteredAndSortedProducts
// Dependencies: [19, 1372, 1076, 14605, 14606, 14607, 504, 4488, 6973, 2]
// Exports: useFilteredAndSortedProducts

// Module 14604 (useFilteredAndSortedProducts)
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

let closure_5 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx");

export const useFilteredAndSortedProducts = function useFilteredAndSortedProducts(products) {
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
};
