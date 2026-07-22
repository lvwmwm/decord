// Module ID: 13861
// Function ID: 104818
// Name: useFilteredAndSortedProducts
// Dependencies: []
// Exports: useFilteredAndSortedProducts

// Module 13861 (useFilteredAndSortedProducts)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).CollectiblesMobileShopScreen;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx");

export const useFilteredAndSortedProducts = function useFilteredAndSortedProducts(products) {
  products = products.products;
  const arg1 = products;
  const maxProducts = products.maxProducts;
  const importDefault = maxProducts;
  const bypassAndroidUnsyncedFilter = products.bypassAndroidUnsyncedFilter;
  const dependencyMap = bypassAndroidUnsyncedFilter;
  const badBundleFilter = arg1(dependencyMap[3]).useBadBundleFilter();
  const React = badBundleFilter;
  const obj = arg1(dependencyMap[3]);
  const androidUnsyncedFilter = arg1(dependencyMap[4]).useAndroidUnsyncedFilter();
  let closure_4 = androidUnsyncedFilter;
  const tmp3 = function usePriceFilter(screen) {
    const products = tmp;
    const items = [androidUnsyncedFilter];
    const stateFromStores = products(bypassAndroidUnsyncedFilter[6]).useStateFromStores(items, () => currentUser.getCurrentUser());
    const obj = products(bypassAndroidUnsyncedFilter[6]);
    const canUseShopDiscountsResult = maxProducts(bypassAndroidUnsyncedFilter[7]).canUseShopDiscounts(stateFromStores);
    const maxProducts = canUseShopDiscountsResult;
    const items1 = [screen === tmp3.ORBS, canUseShopDiscountsResult];
    return badBundleFilter.useCallback((arr) => {
      let found = arr;
      if (tmp) {
        found = arr.filter((product) => {
          let obj = callback(closure_2[8]);
          obj = { product, hasShopDiscount: closure_1 };
          return null != obj.getProductOrbPrice(obj);
        });
      }
      return found;
    }, items1);
  }(products.screen);
  let closure_5 = tmp3;
  const items = [badBundleFilter, androidUnsyncedFilter, products, bypassAndroidUnsyncedFilter, tmp3];
  const memo = React.useMemo(() => {
    const items = [bypassAndroidUnsyncedFilter ? (arg0) => arg0 : androidUnsyncedFilter, badBundleFilter, tmp3];
    return items.reduce((arg0, arg1) => arg1(arg0), products);
  }, items);
  const obj2 = arg1(dependencyMap[4]);
  const purchasedProductsSort = arg1(dependencyMap[5]).usePurchasedProductsSort(memo);
  const items1 = [purchasedProductsSort, maxProducts];
  return React.useMemo(() => {
    if (null != maxProducts) {
      let substr = purchasedProductsSort.slice(0, maxProducts);
    } else {
      substr = purchasedProductsSort;
    }
    return substr;
  }, items1);
};
