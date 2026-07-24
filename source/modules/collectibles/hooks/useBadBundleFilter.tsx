// Module ID: 14026
// Function ID: 107307
// Name: useBadBundleFilter
// Dependencies: [31, 1849, 6790, 624, 3776, 8754, 6786, 6785, 2]
// Exports: useBadBundleFilter

// Module 14026 (useBadBundleFilter)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

require("result").useCallback;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/hooks/useBadBundleFilter.tsx");

export const useBadBundleFilter = function useBadBundleFilter() {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(624) /* defaultAreStatesEqual */.useStateFromStores(items, () => outer1_4.getCurrentUser());
  let obj = require(624) /* defaultAreStatesEqual */;
  const canUseShopDiscountsResult = importDefault(3776).canUseShopDiscounts(stateFromStores);
  require = canUseShopDiscountsResult;
  const items1 = [canUseShopDiscountsResult];
  return useCallback((arr) => {
    let found = arr;
    if (null != arr) {
      found = arr;
      if (0 !== arr.length) {
        found = arr.filter((product) => {
          let obj = canUseShopDiscountsResult(outer2_2[5]);
          if (obj2.isBundleProduct(product)) {
            if (!obj3.isFreeCollectiblesProduct(product)) {
              if (!obj.getProductPurchaseState(outer2_5, product).isPurchased) {
                if (obj4.isOrbsExclusiveProduct(product)) {
                  let tmp5Result = tmp5(tmp6[7]);
                  obj = { product, hasShopDiscount: outer1_0 };
                  return null != tmp5Result.getProductOrbPrice(obj);
                } else {
                  tmp5Result = tmp5(tmp6[6]);
                  const defaultPriceSetAssignmentPurchaseType = tmp5Result.getDefaultPriceSetAssignmentPurchaseType(outer1_0);
                  let result = tmp5(tmp6[6]).extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
                  if (null != result) {
                    if (0 !== result.amount) {
                      let num3 = 0;
                      if (null != product.bundledProducts) {
                        const bundledProducts = product.bundledProducts;
                        num3 = bundledProducts.reduce((arg0, arg1) => {
                          let amount;
                          const result = canUseShopDiscountsResult(outer3_2[6]).extractPriceByPurchaseTypes(arg1, defaultPriceSetAssignmentPurchaseType);
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
                obj4 = canUseShopDiscountsResult(outer2_2[7]);
              }
            }
            obj3 = canUseShopDiscountsResult(outer2_2[6]);
          }
          return true;
        });
      }
    }
    return found;
  }, items1);
};
