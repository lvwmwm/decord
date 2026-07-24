// Module ID: 7185
// Function ID: 57902
// Name: useDiscountedPremiumProductInfo
// Dependencies: [31, 5619, 482, 566, 5622, 5616, 2]
// Exports: useDiscountedPremiumProductInfo

// Module 7185 (useDiscountedPremiumProductInfo)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CurrencyCodes } from "sum";

const require = arg1;
let result = require("sum").fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumProductInfo.tsx");

export const useDiscountedPremiumProductInfo = function useDiscountedPremiumProductInfo(premiumDiscountOffer, items3) {
  const _require = premiumDiscountOffer;
  const dependencyMap = items3;
  const items = [premiumDiscountOffer, items3];
  memo = memo.useMemo(() => {
    if (null == planIds) {
      return null;
    } else {
      const discount = planIds.discount;
      planIds = undefined;
      if (null != discount) {
        planIds = discount.planIds;
      }
      if (null == planIds) {
        planIds = [];
      }
      return items3.find((basePlanId) => planIds.includes(basePlanId.basePlanId));
    }
  }, items);
  let obj = _require(566);
  const items1 = [stateFromStores];
  const items2 = [memo];
  stateFromStores = obj.useStateFromStores(items1, () => {
    let product = null;
    if (null != memo) {
      product = stateFromStores.getProduct(memo.productId);
    }
    return product;
  }, items2);
  items3 = [premiumDiscountOffer, stateFromStores];
  obj = {
    discountedProduct: stateFromStores,
    discountedPriceString: memo.useMemo(() => {
      if (null != premiumDiscountOffer) {
        if (null != stateFromStores) {
          const tmp13 = premiumDiscountOffer(items3[4]).DiscountIdToProductOfferId[premiumDiscountOffer.discountId];
          let tmp2;
          if (null != tmp13) {
            tmp2 = tmp13[stateFromStores.identifier];
          }
          premiumDiscountOffer = tmp2;
          if (null == tmp2) {
            return null;
          } else {
            if (str2.toUpperCase() in outer1_4) {
              let USD = stateFromStores.currencyCode.toLowerCase();
              const str = stateFromStores.currencyCode;
            } else {
              USD = outer1_4.USD;
            }
            if (null != stateFromStores.subscriptionOffers) {
              const subscriptionOffers = stateFromStores.subscriptionOffers;
              const found = subscriptionOffers.find((offerId) => offerId.offerId === closure_0);
              if (null != found) {
                if (null != found.pricingPhases) {
                  if (found.pricingPhases.length > 0) {
                    const result = found.pricingPhases[0].price / 100;
                    let obj = premiumDiscountOffer(items3[5]);
                    obj = { convertToMajorUnits: false };
                    return obj.formatPrice(result, USD, obj);
                  }
                }
              }
            }
            return null;
          }
        }
      }
      return null;
    }, items3)
  };
  return obj;
};
