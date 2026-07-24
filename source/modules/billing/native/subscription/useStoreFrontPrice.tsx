// Module ID: 7434
// Function ID: 59792
// Name: useStoreFrontPrice
// Dependencies: [31, 653, 3776, 2]
// Exports: default

// Module 7434 (useStoreFrontPrice)
import result from "result";
import { PriceSetAssignmentPurchaseTypes as closure_3 } from "ME";

const require = arg1;
let obj = { PRICE_AVAILABLE: "PRICE_AVAILABLE", SUBSCRIPTION_PLAN_UNAVAILABLE: "SUBSCRIPTION_PLAN_UNAVAILABLE", STOREFRONT_UNAVAILABLE: "STOREFRONT_UNAVAILABLE", MISMATCHING_COUNTRIES: "MISMATCHING_COUNTRIES", COUNTRY_PRICE_UNAVAILABLE: "COUNTRY_PRICE_UNAVAILABLE" };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/billing/native/subscription/useStoreFrontPrice.tsx");

export default function useStoreFrontPrice(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => {
    if (null == lib) {
      let PRICE_AVAILABLE = outer1_4.SUBSCRIPTION_PLAN_UNAVAILABLE;
    } else if (null == closure_1) {
      PRICE_AVAILABLE = outer1_4.STOREFRONT_UNAVAILABLE;
    } else {
      const prices = lib.prices;
      let tmp2;
      if (null != prices) {
        tmp2 = prices[outer1_3.MOBILE];
      }
      if (null == tmp2) {
        PRICE_AVAILABLE = outer1_4.COUNTRY_PRICE_UNAVAILABLE;
      } else {
        const countryPrices = lib(closure_1[2]).getCountryPrices(lib.id, outer1_3.MOBILE);
        const obj2 = lib(closure_1[2]);
        let obj = { purchaseType: outer1_3.MOBILE, currency: closure_1.currency };
        const experimentalGetPriceResult = lib(closure_1[2]).experimentalGetPrice(lib.id, obj);
        if (countryPrices.countryCode !== closure_1.country) {
          PRICE_AVAILABLE = outer1_4.MISMATCHING_COUNTRIES;
        } else if (null == experimentalGetPriceResult) {
          PRICE_AVAILABLE = outer1_4.COUNTRY_PRICE_UNAVAILABLE;
        } else {
          PRICE_AVAILABLE = outer1_4.PRICE_AVAILABLE;
        }
        const obj3 = lib(closure_1[2]);
      }
    }
    obj = { price: experimentalGetPriceResult, priceState: PRICE_AVAILABLE };
    return obj;
  }, items);
};
export const PriceStates = obj;
