// Module ID: 8001
// Function ID: 63593
// Name: usePremiumPlanPrice
// Dependencies: [31, 3781, 3782, 5621, 482, 566, 7194, 8002, 8003, 5624, 477, 5450, 561, 5638, 5618, 2]
// Exports: default

// Module 8001 (usePremiumPlanPrice)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { PaymentGateways } from "sum";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/hooks/usePremiumPlanPrice.tsx");

export default function usePremiumPlanPrice(arg0) {
  let price;
  let priceState;
  const _require = arg0;
  let tmp;
  let obj = _require(priceState[5]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => tmp12.getPremiumTypeSubscription());
  const NitroACOMSubscriptionExperiment = _require(priceState[6]).NitroACOMSubscriptionExperiment;
  let enabled = NitroACOMSubscriptionExperiment.useConfig({ location: "usePremiumPlanPrice" }).enabled;
  storeFront = storeFront(priceState[7]).useNativeIAPPayments().storeFront;
  const obj2 = storeFront(priceState[7]);
  const items1 = [isIOSResult];
  const items2 = [arg0];
  const stateFromStores1 = _require(priceState[5]).useStateFromStores(items1, () => {
    let value = null;
    if (null != closure_0) {
      value = isIOSResult.get(closure_0);
    }
    return value;
  }, items2);
  const obj3 = _require(priceState[5]);
  ({ price, priceState } = storeFront(priceState[8])(stateFromStores1, storeFront));
  let formatPrice = null;
  let tmp6 = null;
  if (null != arg0) {
    tmp6 = _require(priceState[9]).BasePlanIdToProductId[arg0];
  }
  const React = tmp6;
  const tmp4 = storeFront(priceState[8])(stateFromStores1, storeFront);
  const items3 = [closure_6];
  const items4 = [tmp6];
  const stateFromStores2 = _require(priceState[5]).useStateFromStores(items3, () => {
    let product = null;
    if (null != result) {
      product = outer1_6.getProduct(result);
    }
    return product;
  }, items4);
  const obj4 = _require(priceState[5]);
  isIOSResult = _require(priceState[10]).isIOS();
  if (isIOSResult) {
    if (!enabled) {
      let isACOM;
      if (formatPrice != stateFromStores) {
        isACOM = stateFromStores.isACOM;
      }
      enabled = true === isACOM;
    }
    isIOSResult = enabled;
  }
  const tmp12 = storeFront(priceState[11])(() => {
    let tmp = storeFront(priceState[12]);
    tmp = new tmp(500, 10000);
    return tmp;
  });
  closure_5 = tmp12;
  const items5 = [isIOSResult, priceState, storeFront, tmp12];
  const effect = React.useEffect(() => {
    if (_isNativeReflectConstruct) {
      if (priceState !== callback(priceState[8]).PriceStates.PRICE_AVAILABLE) {
        if (priceState === callback(priceState[8]).PriceStates.MISMATCHING_COUNTRIES) {
          let country;
          if (null != storeFront) {
            country = storeFront.country;
          }
          if (null != country) {
            if (!tmp12.pending) {
              if (!isIOSResult.isFetchingForPremiumSKUs()) {
                if (tmp12.fails < 3) {
                  country = storeFront.country;
                  tmp12.fail(() => {
                    if (!isIOSResult.isFetchingForPremiumSKUs()) {
                      const obj = country(priceState[13]);
                      const premiumSubscriptionPlans = obj.fetchPremiumSubscriptionPlans(country, undefined, undefined, outer2_7.APPLE_ADVANCED_COMMERCE);
                      premiumSubscriptionPlans.catch(() => {

                      });
                    }
                  });
                  return () => {
                    outer1_5.cancel();
                  };
                }
              }
            }
          }
        }
      } else {
        tmp12.succeed();
      }
    }
  }, items5);
  if (formatPrice == arg0) {
    return null;
  } else if (isIOSResult) {
    let tmp18 = null;
    if (priceState === _require(priceState[8]).PriceStates.PRICE_AVAILABLE) {
      tmp18 = null;
      if (formatPrice != price) {
        obj = {};
        ({ amount: obj7.price, currency: obj7.currency } = price);
        priceState = formatPrice == storeFront;
        let country;
        if (!priceState) {
          country = storeFront.country;
        }
        obj.countryCode = country;
        storeFront = priceState;
        tmp = _require(priceState[14]);
        formatPrice = tmp.formatPrice;
        obj.priceString = formatPrice(price.amount, price.currency);
        price = "API";
        obj.source = "API";
        tmp18 = obj;
      }
    }
    let tmp14 = tmp18;
  } else {
    tmp14 = null;
    if (formatPrice != stateFromStores2) {
      obj = {};
      ({ price: obj6.price, currencyCode: obj6.currency } = stateFromStores2);
      let country1;
      if (formatPrice != storeFront) {
        country1 = storeFront.country;
      }
      if (formatPrice == country1) {
        country1 = stateFromStores2.countryCode;
      }
      obj.countryCode = country1;
      obj.priceString = stateFromStores2.priceString;
      obj.source = "IAP";
      tmp14 = obj;
    }
  }
};
