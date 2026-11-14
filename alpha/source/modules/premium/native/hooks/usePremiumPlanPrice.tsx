// Module ID: 10956
// Function ID: 10957
// Name: usePremiumPlanPrice
// Dependencies: [19, 2178, 9302, 1072, 1083, 9410, 9723, 504, 10957, 8580, 1380, 5917, 559, 7272, 7253, 2]
// Exports: default

// Module 10956 (usePremiumPlanPrice)
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 1083 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 7272 */;
import react from "react" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 2178 */;
import IAPStore from "IAPStore" /* 9302 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_6 = Constants.PriceSetAssignmentPurchaseTypes;
const PaymentGateways = Constants2.PaymentGateways;
const PremiumPlanPriceSource = { IAP: "IAP", API: "API" };
const result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumPlanPrice.tsx");

export default function usePremiumPlanPrice(arg0) {
  let _undefined;
  let closure_0;
  let country;
  let country1;
  let price;
  let priceState;
  let tmpResult6;
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.isGift;
  if (flag === undefined) {
    flag = false;
  }
  let mobileStoreFront;
  priceState = undefined;
  let c4;
  let closure_5;
  let tmp = _require;
  let tmp2 = priceState;
  const NitroGiftACOMExperiment = require("ACOMExperiments").NitroGiftACOMExperiment;
  const enabled = NitroGiftACOMExperiment.useConfig({ location: "usePremiumPlanPrice" }).enabled;
  let tmp3 = mobileStoreFront;
  const obj2 = mobileStoreFront(priceState[6]);
  mobileStoreFront = obj2.useMobileStoreFront();
  const items = [c4];
  const items1 = [arg0];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let value = null;
    if (null != closure_0) {
      value = SubscriptionPlanStore.get(tmp);
    }
    return value;
  }, items1);
  const tmp7 = mobileStoreFront(priceState[8])(stateFromStores, mobileStoreFront, flag ? tmp6.GIFT : tmp6.MOBILE);
  ({ price, priceState } = tmp7);
  let productIdForGift = null;
  let tmp8 = null;
  if (null != arg0) {
    const tmpResult = tmp(tmp2[9]);
    if (flag) {
      productIdForGift = tmpResult.getProductIdForGift(arg0);
    } else {
      productIdForGift = tmpResult.BasePlanIdToProductId[arg0];
    }
    tmp8 = productIdForGift;
  }
  const items2 = [closure_5];
  const items3 = [tmp8];
  const tmpResult4 = tmp(tmp2[7]);
  const stateFromStores1 = tmpResult4.useStateFromStores(items2, () => {
    let product = null;
    if (null != productIdForGift) {
      product = IAPStore.getProduct(tmp);
    }
    return product;
  }, items3);
  const tmpResult5 = tmp(tmp2[10]);
  let isIOSResult = tmpResult5.isIOS();
  if (isIOSResult) {
    let tmp12 = !flag;
    if (flag) {
      tmp12 = enabled;
    }
    isIOSResult = tmp12;
  }
  c4 = isIOSResult;
  const tmp13 = tmp3(tmp2[11])(() => {
    const tmp = new mobileStoreFront(priceState[12])(500, 10000);
    return tmp;
  });
  closure_5 = tmp13;
  const items4 = [isIOSResult, priceState, mobileStoreFront, tmp13];
  const effect = productIdForGift.useEffect(() => {
    const tmp = _undefined;
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
              if (!_undefined.isFetchingForPremiumSKUs()) {
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
  }, items4);
  let tmp15 = null;
  if (null != arg0) {
    let tmp16;
    if (isIOSResult) {
      let tmp19 = null;
      if (priceState === tmp(tmp2[8]).PriceStates.PRICE_AVAILABLE) {
        tmp19 = null;
        if (null != price) {
          ({ amount: obj8.price, currency: obj8.currency } = price);
          const obj4 = { price: null, currency: null, countryCode: country, priceString: tmpResult6.formatPrice(price.amount, price.currency), source: obj.API };
          country = undefined;
          if (mobileStoreFront != null) {
            country = mobileStoreFront.country;
          }
          tmp19 = obj4;
          tmpResult6 = tmp(tmp2[14]);
        }
      }
      tmp16 = tmp19;
    } else {
      tmp16 = null;
      if (null != stateFromStores1) {
        const obj5 = { price: null, currency: null, countryCode: country1, priceString: stateFromStores1.priceString, source: obj.IAP };
        ({ price: obj7.price, currencyCode: obj7.currency } = stateFromStores1);
        country1 = undefined;
        if (mobileStoreFront != null) {
          country1 = mobileStoreFront.country;
        }
        if (country1 == null) {
          country1 = stateFromStores1.countryCode;
        }
        tmp16 = obj5;
      }
    }
    tmp15 = tmp16;
  }
  return tmp15;
};
export { PremiumPlanPriceSource };
