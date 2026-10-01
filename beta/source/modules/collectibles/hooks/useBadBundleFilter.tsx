// Module ID: 14605
// Function ID: 14606
// Name: useBadBundleFilter
// Dependencies: [19, 1372, 6977, 563, 4488, 8303, 6974, 6973, 2]
// Exports: useBadBundleFilter

// Module 14605 (useBadBundleFilter)
import react from "react" /* 19 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 6973 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6974 */;
import useProductPurchaseState from "useProductPurchaseState" /* 8303 */;
import UserStore from "UserStore" /* 1372 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 6977 */;
import size from "module_2" /* 2 */;

const useCallback = react.useCallback;
let result = size.fileFinishedImporting("modules/collectibles/hooks/useBadBundleFilter.tsx");

export const useBadBundleFilter = function useBadBundleFilter() {
  let currentUser;
  let obj = useStateFromStores;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = PremiumUtilsDefault;
  const canUseShopDiscountsResult = obj2.canUseShopDiscounts(stateFromStores);
  require = canUseShopDiscountsResult;
  const items1 = [canUseShopDiscountsResult];
  return useCallback((arr) => {
    let hasShopDiscount;
    let found = arr;
    if (null != arr) {
      let num = 0;
      found = arr;
      if (0 !== arr.length) {
        found = arr.filter((product) => {
          let obj = useProductPurchaseState;
          const isPurchased = obj.getProductPurchaseState(CollectiblesPurchaseStore, product).isPurchased;
          const obj2 = CollectiblesUtils;
          if (obj2.isBundleProduct(product)) {
            const tmpResult = CollectiblesUtils;
            if (!tmpResult.isFreeCollectiblesProduct(product)) {
              if (!isPurchased) {
                const tmpResult5 = CollectiblesProductUtils;
                if (tmpResult5.isOrbsExclusiveProduct(product)) {
                  const obj3 = { product, hasShopDiscount };
                  const tmpResult6 = CollectiblesProductUtils;
                  return null != tmpResult6.getProductOrbPrice(obj3);
                } else {
                  const tmpResult7 = CollectiblesUtils;
                  const defaultPriceSetAssignmentPurchaseType = tmpResult7.getDefaultPriceSetAssignmentPurchaseType(hasShopDiscount);
                  const tmpResult8 = CollectiblesUtils;
                  let result = tmpResult8.extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
                  if (null != result) {
                    let num = 0;
                    if (0 !== result.amount) {
                      let num2 = 0;
                      if (null != product.bundledProducts) {
                        const bundledProducts = product.bundledProducts;
                        num2 = bundledProducts.reduce((acc, item) => {
                          const obj = hasShopDiscount(closure_2_2[6]);
                          const result = obj.extractPriceByPurchaseTypes(item, defaultPriceSetAssignmentPurchaseType);
                          let num;
                          if (result != null) {
                            num = result.amount;
                          }
                          if (num == null) {
                            num = 0;
                          }
                          return acc + num;
                        }, 0);
                      }
                      return result.amount < num2;
                    }
                  }
                  return true;
                }
              }
            }
          }
          return true;
        });
      }
    }
    return found;
  }, items1);
};
