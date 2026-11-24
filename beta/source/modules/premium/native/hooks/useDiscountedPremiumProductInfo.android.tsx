// Module ID: 9235
// Function ID: 9236
// Name: useDiscountedPremiumProductInfo
// Dependencies: [19, 1082, 9236, 8170, 6856, 2]
// Exports: useDiscountedPremiumProductInfo

// Module 9235 (useDiscountedPremiumProductInfo)
import Constants from "Constants" /* 1082 */;
import ProductIds from "ProductIds" /* 8170 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

const CurrencyCodes = Constants.CurrencyCodes;
let result = size.fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumProductInfo.android.tsx");

export function useDiscountedPremiumProductInfo(premiumDiscountOffer, items3) {
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
                    const tmp6Result = tmp6(6856);
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
}
