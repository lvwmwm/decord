// Module ID: 13855
// Function ID: 104788
// Name: useBadBundleFilter
// Dependencies: []
// Exports: useBadBundleFilter

// Module 13855 (useBadBundleFilter)
require(dependencyMap[0]).useCallback;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const _module = require(dependencyMap[8]);
const result = _module.fileFinishedImporting("modules/collectibles/hooks/useBadBundleFilter.tsx");

export const useBadBundleFilter = function useBadBundleFilter() {
  const items = [closure_4];
  const stateFromStores = require(dependencyMap[3]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(dependencyMap[3]);
  const canUseShopDiscountsResult = importDefault(dependencyMap[4]).canUseShopDiscounts(stateFromStores);
  const require = canUseShopDiscountsResult;
  const items1 = [canUseShopDiscountsResult];
  return useCallback((arr) => {
    let found = arr;
    if (null != arr) {
      found = arr;
      if (0 !== arr.length) {
        found = arr.filter((product) => {
          let obj = defaultPriceSetAssignmentPurchaseType(closure_2[5]);
          if (obj2.isBundleProduct(product)) {
            if (!obj3.isFreeCollectiblesProduct(product)) {
              if (!obj.getProductPurchaseState(closure_5, product).isPurchased) {
                if (obj4.isOrbsExclusiveProduct(product)) {
                  let tmp5Result = tmp5(tmp6[7]);
                  obj = { product, hasShopDiscount: defaultPriceSetAssignmentPurchaseType };
                  return null != tmp5Result.getProductOrbPrice(obj);
                } else {
                  tmp5Result = tmp5(tmp6[6]);
                  const defaultPriceSetAssignmentPurchaseType = tmp5Result.getDefaultPriceSetAssignmentPurchaseType(defaultPriceSetAssignmentPurchaseType);
                  const result = tmp5(tmp6[6]).extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
                  if (null != result) {
                    if (0 !== result.amount) {
                      let num3 = 0;
                      if (null != product.bundledProducts) {
                        const bundledProducts = product.bundledProducts;
                        num3 = bundledProducts.reduce((arg0, arg1) => {
                          let amount;
                          const result = defaultPriceSetAssignmentPurchaseType(closure_2[6]).extractPriceByPurchaseTypes(arg1, defaultPriceSetAssignmentPurchaseType);
                          if (null != result) {
                            amount = result.amount;
                          }
                          let num = 0;
                          if (null != amount) {
                            num = amount;
                          }
                          return arg0 + num;
                        }, 0);
                      }
                      return result.amount < num3;
                    }
                  }
                  return true;
                }
                const obj4 = defaultPriceSetAssignmentPurchaseType(closure_2[7]);
              }
            }
            const obj3 = defaultPriceSetAssignmentPurchaseType(closure_2[6]);
          }
          return true;
        });
      }
    }
    return found;
  }, items1);
};
