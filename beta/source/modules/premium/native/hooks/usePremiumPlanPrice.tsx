// Module ID: 8665
// Function ID: 8666
// Name: usePremiumPlanPrice
// Dependencies: [19, 4493, 4494, 6658, 1085, 504, 8666, 8667, 8670, 6661, 1364, 5910, 559, 6675, 6655, 2]
// Exports: default

// Module 8665 (usePremiumPlanPrice)
import Constants from "Constants" /* 1085 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 6675 */;
import react_mod from "react" /* 19 */;
import SubscriptionPlanStore_mod from "SubscriptionPlanStore" /* 4493 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import IAPStore from "IAPStore" /* 6658 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_5;

let react = react_mod;
let SubscriptionPlanStore = SubscriptionPlanStore_mod;
const PaymentGateways = Constants.PaymentGateways;
const PremiumPlanPriceSource = { IAP: "IAP", API: "API" };
const result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumPlanPrice.tsx");

export default function usePremiumPlanPrice(arg0) {
  let closure_0;
  let closure_3;
  let country;
  let country1;
  let mobileStoreFront;
  let price;
  let priceState;
  let tmpResult4;
  _require = arg0;
  let tmp = _require;
  let tmp2 = priceState;
  let obj = require("get initialized");
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.getPremiumTypeSubscription());
  const NitroACOMSubscriptionExperiment = require("ACOMExperiments").NitroACOMSubscriptionExperiment;
  let enabled = NitroACOMSubscriptionExperiment.useConfig({ location: "usePremiumPlanPrice" }).enabled;
  let tmp4 = mobileStoreFront;
  const obj2 = mobileStoreFront(priceState[7]);
  mobileStoreFront = obj2.useMobileStoreFront();
  const items1 = [SubscriptionPlanStore];
  const items2 = [arg0];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let value = null;
    if (null != closure_0) {
      value = SubscriptionPlanStore.get(tmp);
    }
    return value;
  }, items2);
  const tmp7 = mobileStoreFront(priceState[8])(stateFromStores1, mobileStoreFront);
  ({ price, priceState } = tmp7);
  let tmp8 = null;
  if (null != arg0) {
    tmp8 = tmp(tmp2[9]).BasePlanIdToProductId[arg0];
  }
  react = tmp8;
  const items3 = [IAPStore];
  const items4 = [tmp8];
  const tmpResult = tmp(tmp2[5]);
  const stateFromStores2 = tmpResult.useStateFromStores(items3, () => {
    let product = null;
    if (null != closure_3) {
      product = IAPStore.getProduct(tmp);
    }
    return product;
  }, items4);
  const tmpResult3 = tmp(tmp2[10]);
  let isIOSResult = tmpResult3.isIOS();
  if (isIOSResult) {
    if (!enabled) {
      let isACOM;
      if (stateFromStores != null) {
        isACOM = stateFromStores.isACOM;
      }
      enabled = true === isACOM;
    }
    isIOSResult = enabled;
  }
  SubscriptionPlanStore = isIOSResult;
  const tmp12 = tmp4(tmp2[11])(() => {
    const tmp = new mobileStoreFront(priceState[12])(500, 10000);
    return tmp;
  });
  closure_5 = tmp12;
  const items5 = [isIOSResult, priceState, mobileStoreFront, tmp12];
  const effect = react.useEffect(() => {
    const tmp = closure_4;
    if (tmp) {
      const tmp2 = priceState;
      const tmp3 = closure_0;
      const tmp4 = priceState;
      if (priceState !== closure_0(priceState[8]).PriceStates.PRICE_AVAILABLE) {
        if (tmp2 === tmp3(tmp4[8]).PriceStates.MISMATCHING_COUNTRIES) {
          let country;
          if (mobileStoreFront != null) {
            country = tmp7.country;
          }
          if (null != country) {
            let obj = closure_5;
            if (!closure_5.pending) {
              if (!SubscriptionPlanStore.isFetchingForPremiumSKUs()) {
                if (obj.fails < 3) {
                  const country2 = tmp7.country;
                  obj.fail(() => {
                    if (!SubscriptionPlanStore.isFetchingForPremiumSKUs()) {
                      const obj = SubscriptionPlanActionCreators;
                      const premiumSubscriptionPlans = obj.fetchPremiumSubscriptionPlans(country2, undefined, undefined, PaymentGateways.APPLE_ADVANCED_COMMERCE);
                      premiumSubscriptionPlans.catch(() => {

                      });
                    }
                  });
                  return () => {
                    closure_1_5.cancel();
                  };
                }
              }
            }
          }
        }
      } else {
        closure_5.succeed();
      }
    }
  }, items5);
  let tmp14 = null;
  if (null != arg0) {
    let tmp15;
    if (isIOSResult) {
      let tmp18 = null;
      if (priceState === tmp(tmp2[8]).PriceStates.PRICE_AVAILABLE) {
        tmp18 = null;
        if (null != price) {
          ({ amount: obj7.price, currency: obj7.currency } = price);
          const obj4 = { price: null, currency: null, countryCode: country, priceString: tmpResult4.formatPrice(price.amount, price.currency), source: obj.API };
          country = undefined;
          if (mobileStoreFront != null) {
            country = mobileStoreFront.country;
          }
          tmp18 = obj4;
          tmpResult4 = tmp(tmp2[14]);
        }
      }
      tmp15 = tmp18;
    } else {
      tmp15 = null;
      if (null != stateFromStores2) {
        const obj5 = { price: null, currency: null, countryCode: country1, priceString: stateFromStores2.priceString, source: obj.IAP };
        ({ price: obj6.price, currencyCode: obj6.currency } = stateFromStores2);
        country1 = undefined;
        if (mobileStoreFront != null) {
          country1 = mobileStoreFront.country;
        }
        if (country1 == null) {
          country1 = stateFromStores2.countryCode;
        }
        tmp15 = obj5;
      }
    }
    tmp14 = tmp15;
  }
  return tmp14;
};
export { PremiumPlanPriceSource };
