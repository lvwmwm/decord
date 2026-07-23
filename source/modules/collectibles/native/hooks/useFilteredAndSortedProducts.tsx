// Module ID: 13975
// Function ID: 106974
// Name: useFilteredAndSortedProducts
// Dependencies: [31, 1849, 655, 13976, 13977, 13978, 566, 3776, 6785, 2]
// Exports: useFilteredAndSortedProducts

// Module 13975 (useFilteredAndSortedProducts)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CollectiblesMobileShopScreen as closure_5 } from "items";

const require = arg1;
const result = require("items").fileFinishedImporting("modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx");

export const useFilteredAndSortedProducts = function useFilteredAndSortedProducts(products) {
  products = products.products;
  let maxProducts = products.maxProducts;
  const bypassAndroidUnsyncedFilter = products.bypassAndroidUnsyncedFilter;
  const badBundleFilter = products(bypassAndroidUnsyncedFilter[3]).useBadBundleFilter();
  let obj = products(bypassAndroidUnsyncedFilter[3]);
  const androidUnsyncedFilter = products(bypassAndroidUnsyncedFilter[4]).useAndroidUnsyncedFilter();
  const tmp3 = (function usePriceFilter(screen) {
    const products = tmp;
    const items = [androidUnsyncedFilter];
    const stateFromStores = products(bypassAndroidUnsyncedFilter[6]).useStateFromStores(items, () => androidUnsyncedFilter.getCurrentUser());
    let obj = products(bypassAndroidUnsyncedFilter[6]);
    const canUseShopDiscountsResult = maxProducts(bypassAndroidUnsyncedFilter[7]).canUseShopDiscounts(stateFromStores);
    maxProducts = canUseShopDiscountsResult;
    const items1 = [screen === tmp3.ORBS, canUseShopDiscountsResult];
    return badBundleFilter.useCallback((arr) => {
      let found = arr;
      if (closure_0) {
        found = arr.filter((product) => {
          let obj = products(bypassAndroidUnsyncedFilter[8]);
          obj = { product, hasShopDiscount: outer1_1 };
          return null != obj.getProductOrbPrice(obj);
        });
      }
      return found;
    }, items1);
  })(products.screen);
  let closure_5 = tmp3;
  let items = [badBundleFilter, androidUnsyncedFilter, products, bypassAndroidUnsyncedFilter, tmp3];
  const memo = badBundleFilter.useMemo(() => {
    const items = [bypassAndroidUnsyncedFilter ? ((arg0) => arg0) : androidUnsyncedFilter, badBundleFilter, closure_5];
    return items.reduce((arg0, arg1) => arg1(arg0), products);
  }, items);
  const obj2 = products(bypassAndroidUnsyncedFilter[4]);
  const purchasedProductsSort = products(bypassAndroidUnsyncedFilter[5]).usePurchasedProductsSort(memo);
  let items1 = [purchasedProductsSort, maxProducts];
  return badBundleFilter.useMemo(() => {
    if (null != maxProducts) {
      let substr = purchasedProductsSort.slice(0, maxProducts);
    } else {
      substr = purchasedProductsSort;
    }
    return substr;
  }, items1);
};
