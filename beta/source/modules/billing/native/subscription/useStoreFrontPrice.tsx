// Module ID: 8670
// Function ID: 8671
// Name: useStoreFrontPrice
// Dependencies: [19, 1074, 4488, 2]
// Exports: default

// Module 8670 (useStoreFrontPrice)
import Constants from "Constants" /* 1074 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = Constants.PriceSetAssignmentPurchaseTypes;
const PriceStates = { PRICE_AVAILABLE: "PRICE_AVAILABLE", SUBSCRIPTION_PLAN_UNAVAILABLE: "SUBSCRIPTION_PLAN_UNAVAILABLE", STOREFRONT_UNAVAILABLE: "STOREFRONT_UNAVAILABLE", MISMATCHING_COUNTRIES: "MISMATCHING_COUNTRIES", COUNTRY_PRICE_UNAVAILABLE: "COUNTRY_PRICE_UNAVAILABLE" };
const result = size.fileFinishedImporting("modules/billing/native/subscription/useStoreFrontPrice.tsx");

export default function useStoreFrontPrice(arg0, arg1) {
  const id = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return react.useMemo(() => {
    let obj;
    let price;
    let priceState;
    if (null == id) {
      priceState = obj.SUBSCRIPTION_PLAN_UNAVAILABLE;
    } else if (null == closure_1) {
      priceState = obj.STOREFRONT_UNAVAILABLE;
    } else {
      const prices = tmp.prices;
      let tmp3;
      if (prices != null) {
        tmp3 = prices[constants.MOBILE];
      }
      if (null == tmp3) {
        priceState = obj.COUNTRY_PRICE_UNAVAILABLE;
      } else {
        obj = PremiumUtils;
        const countryPrices = obj.getCountryPrices(tmp.id, constants.MOBILE);
        const obj3 = { purchaseType: constants.MOBILE, currency: closure_1.currency };
        const obj2 = PremiumUtils;
        const experimentalGetPriceResult = obj2.experimentalGetPrice(id.id, obj3);
        if (countryPrices.countryCode !== closure_1.country) {
          priceState = obj.MISMATCHING_COUNTRIES;
        } else if (null == experimentalGetPriceResult) {
          priceState = obj.COUNTRY_PRICE_UNAVAILABLE;
        } else {
          priceState = obj.PRICE_AVAILABLE;
        }
        price = experimentalGetPriceResult;
      }
    }
    return { price, priceState };
  }, items);
};
export { PriceStates };
