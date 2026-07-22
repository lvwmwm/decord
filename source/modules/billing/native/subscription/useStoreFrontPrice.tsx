// Module ID: 7997
// Function ID: 63580
// Name: useStoreFrontPrice
// Dependencies: []
// Exports: default

// Module 7997 (useStoreFrontPrice)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[1]).PriceSetAssignmentPurchaseTypes;
const obj = { PRICE_AVAILABLE: "PRICE_AVAILABLE", SUBSCRIPTION_PLAN_UNAVAILABLE: "SUBSCRIPTION_PLAN_UNAVAILABLE", STOREFRONT_UNAVAILABLE: "STOREFRONT_UNAVAILABLE", MISMATCHING_COUNTRIES: "MISMATCHING_COUNTRIES", COUNTRY_PRICE_UNAVAILABLE: "COUNTRY_PRICE_UNAVAILABLE" };
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/billing/native/subscription/useStoreFrontPrice.tsx");

export default function useStoreFrontPrice(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [arg0, arg1];
  return React.useMemo((self, self2) => {
    if (null == self) {
      let PRICE_AVAILABLE = constants2.SUBSCRIPTION_PLAN_UNAVAILABLE;
    } else if (null == self2) {
      PRICE_AVAILABLE = constants2.STOREFRONT_UNAVAILABLE;
    } else {
      const prices = self.prices;
      let tmp2;
      if (null != prices) {
        tmp2 = prices[closure_3.MOBILE];
      }
      if (null == tmp2) {
        PRICE_AVAILABLE = constants2.COUNTRY_PRICE_UNAVAILABLE;
      } else {
        const countryPrices = self(self2[2]).getCountryPrices(self.id, constants.MOBILE);
        const obj2 = self(self2[2]);
        let obj = { purchaseType: constants.MOBILE, currency: self2.currency };
        const experimentalGetPriceResult = self(self2[2]).experimentalGetPrice(self.id, obj);
        if (countryPrices.countryCode !== self2.country) {
          PRICE_AVAILABLE = constants2.MISMATCHING_COUNTRIES;
        } else if (null == experimentalGetPriceResult) {
          PRICE_AVAILABLE = constants2.COUNTRY_PRICE_UNAVAILABLE;
        } else {
          PRICE_AVAILABLE = constants2.PRICE_AVAILABLE;
        }
        const obj3 = self(self2[2]);
      }
    }
    obj = { price: experimentalGetPriceResult, priceState: PRICE_AVAILABLE };
    return obj;
  }, items);
};
export const PriceStates = obj;
