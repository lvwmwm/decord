// Module ID: 9525
// Function ID: 9526
// Name: useDiscountedPremiumProductInfo
// Dependencies: [19, 1085, 9526, 7517, 7511, 2]
// Exports: useDiscountedPremiumProductInfo

// Module 9525 (useDiscountedPremiumProductInfo)
import ProductIds from "ProductIds" /* 7517 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const CurrencyCodes = fn(1085).CurrencyCodes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/hooks/useDiscountedPremiumProductInfo.android.tsx");

export const useDiscountedPremiumProductInfo = function useDiscountedPremiumProductInfo(premiumDiscountOffer, items3) {
  _require = premiumDiscountOffer;
  const discountedPremiumPlan = require("useDiscountedPremiumPlan").useDiscountedPremiumPlan(premiumDiscountOffer, items3);
  discountedProduct = discountedPremiumPlan.discountedProduct;
  const items = [premiumDiscountOffer, discountedProduct];
  const obj = require("useDiscountedPremiumPlan");
  return {
    discountedPlan: discountedPremiumPlan.discountedPlan,
    discountedProduct,
    discountedPriceString: noop.useMemo(() => {
      if (null != closure_0) {
        if (null != discountedProduct) {
          const tmp8 = ProductIds.DiscountIdToProductOfferId[tmp.discountId];
          let tmp2;
          if (tmp8 != null) {
            tmp2 = tmp8[tmp5.identifier];
          }
          closure_0 = tmp2;
          if (null == tmp2) {
            return null;
          } else {
            if (str2.toUpperCase() in CurrencyCodes) {
              let USD = tmp5.currencyCode.toLowerCase();
            } else {
              USD = tmp9.USD;
            }
            if (null != tmp5.subscriptionOffers) {
              const subscriptionOffers = tmp5.subscriptionOffers;
              const found = subscriptionOffers.find((offerId) => offerId.offerId === closure_0);
              if (null != found) {
                if (null != found.pricingPhases) {
                  if (found.pricingPhases.length > 0) {
                    const result = found.pricingPhases[0].price / 100;
                    return tmp6(7511).formatPrice(result, USD, { convertToMajorUnits: false });
                  }
                }
              }
            }
            return null;
          }
          tmp6 = require;
        }
      }
      return null;
    }, items)
  };
};
