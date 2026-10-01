// Module ID: 8682
// Function ID: 8683
// Name: useDiscountedPremiumProductInfo
// Dependencies: [19, 1085, 8683, 6661, 6655, 2]
// Exports: useDiscountedPremiumProductInfo

// Module 8682 (useDiscountedPremiumProductInfo)
import Constants from "Constants" /* 1085 */;
import ProductIds from "ProductIds" /* 6661 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

const CurrencyCodes = Constants.CurrencyCodes;
let result = size.fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumProductInfo.android.tsx");

export const useDiscountedPremiumProductInfo = function useDiscountedPremiumProductInfo(premiumDiscountOffer, items3) {
  let discountedProduct;
  _require = premiumDiscountOffer;
  const obj = require("useDiscountedPremiumPlan");
  const discountedPremiumPlan = obj.useDiscountedPremiumPlan(premiumDiscountOffer, items3);
  discountedProduct = discountedPremiumPlan.discountedProduct;
  const items = [premiumDiscountOffer, discountedProduct];
  const obj2 = {
    discountedPlan: discountedPremiumPlan.discountedPlan,
    discountedProduct,
    discountedPriceString: react.useMemo(() => {
      if (null != closure_0) {
        if (null != discountedProduct) {
          const tmp8 = ProductIds.DiscountIdToProductOfferId[tmp.discountId];
          let tmp2;
          const tmp6 = require;
          if (tmp8 != null) {
            tmp2 = tmp8[tmp5.identifier];
          }
          closure_0 = tmp2;
          if (null == tmp2) {
            return null;
          } else {
            let USD;
            const str2 = discountedProduct.currencyCode;
            if (str2.toUpperCase() in CurrencyCodes) {
              const str = discountedProduct.currencyCode;
              USD = str.toLowerCase();
            } else {
              USD = tmp9.USD;
            }
            if (null != discountedProduct.subscriptionOffers) {
              const subscriptionOffers = tmp5.subscriptionOffers;
              const found = subscriptionOffers.find((offerId) => offerId.offerId === closure_0);
              if (null != found) {
                if (null != found.pricingPhases) {
                  if (found.pricingPhases.length > 0) {
                    const result = found.pricingPhases[0].price / 100;
                    const tmp6Result = tmp6(6655);
                    return tmp6Result.formatPrice(result, USD, { convertToMajorUnits: false });
                  }
                }
              }
            }
            return null;
          }
        }
      }
      return null;
    }, items)
  };
  return obj2;
};
