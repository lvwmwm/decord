// Module ID: 7179
// Function ID: 57816
// Name: useDiscountedPremiumProductInfo
// Dependencies: []
// Exports: useDiscountedPremiumProductInfo

// Module 7179 (useDiscountedPremiumProductInfo)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const CurrencyCodes = arg1(dependencyMap[2]).CurrencyCodes;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumProductInfo.tsx");

export const useDiscountedPremiumProductInfo = function useDiscountedPremiumProductInfo(premiumDiscountOffer, items3) {
  items3 = premiumDiscountOffer;
  const dependencyMap = items3;
  const items = [premiumDiscountOffer, items3];
  const memo = React.useMemo(() => {
    if (null == arg0) {
      return null;
    } else {
      const discount = arg0.discount;
      let planIds;
      if (null != discount) {
        planIds = discount.planIds;
      }
      if (null == planIds) {
        planIds = [];
      }
      const arg0 = planIds;
      return arg1.find((basePlanId) => planIds.includes(basePlanId.basePlanId));
    }
  }, items);
  const React = memo;
  let obj = items3(dependencyMap[3]);
  const items1 = [closure_3];
  const items2 = [memo];
  const stateFromStores = obj.useStateFromStores(items1, () => {
    let product = null;
    if (null != memo) {
      product = stateFromStores.getProduct(memo.productId);
    }
    return product;
  }, items2);
  closure_3 = stateFromStores;
  items3 = [premiumDiscountOffer, stateFromStores];
  obj = {
    discountedProduct: stateFromStores,
    discountedPriceString: React.useMemo(() => {
      if (null != arg0) {
        if (null != stateFromStores) {
          const tmp13 = arg0(arg1[4]).DiscountIdToProductOfferId[closure_0.discountId];
          let tmp2;
          if (null != tmp13) {
            tmp2 = tmp13[closure_3.identifier];
          }
          const arg0 = tmp2;
          if (null == tmp2) {
            return null;
          } else {
            if (str2.toUpperCase() in constants) {
              let USD = stateFromStores.currencyCode.toLowerCase();
              const str = stateFromStores.currencyCode;
            } else {
              USD = constants.USD;
            }
            if (null != stateFromStores.subscriptionOffers) {
              const subscriptionOffers = stateFromStores.subscriptionOffers;
              const found = subscriptionOffers.find((offerId) => offerId.offerId === tmp2);
              if (null != found) {
                if (null != found.pricingPhases) {
                  if (found.pricingPhases.length > 0) {
                    const result = found.pricingPhases[0].price / 100;
                    let obj = arg0(arg1[5]);
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
