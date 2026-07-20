// Module ID: 7990
// Function ID: 63521
// Name: usePremiumPlanPrice
// Dependencies: []
// Exports: default

// Module 7990 (usePremiumPlanPrice)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const PaymentGateways = arg1(dependencyMap[4]).PaymentGateways;
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/premium/native/hooks/usePremiumPlanPrice.tsx");

export default function usePremiumPlanPrice(arg0) {
  let price;
  let priceState;
  const arg1 = arg0;
  let tmp;
  let obj = arg1(dependencyMap[5]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => tmp12.getPremiumTypeSubscription());
  const NitroACOMSubscriptionExperiment = arg1(dependencyMap[6]).NitroACOMSubscriptionExperiment;
  let enabled = NitroACOMSubscriptionExperiment.useConfig({ location: "usePremiumPlanPrice" }).enabled;
  let storeFront = importDefault(dependencyMap[7]).useNativeIAPPayments().storeFront;
  const importDefault = storeFront;
  const obj2 = importDefault(dependencyMap[7]);
  const items1 = [closure_4];
  const items2 = [arg0];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items1, () => {
    let value = null;
    if (null != arg0) {
      value = isIOSResult.get(arg0);
    }
    return value;
  }, items2);
  const obj3 = arg1(dependencyMap[5]);
  ({ price, priceState } = importDefault(dependencyMap[8])(stateFromStores1, storeFront));
  const dependencyMap = priceState;
  let formatPrice = null;
  let tmp6 = null;
  if (null != arg0) {
    tmp6 = arg1(dependencyMap[9]).BasePlanIdToProductId[arg0];
  }
  const React = tmp6;
  const tmp4 = importDefault(dependencyMap[8])(stateFromStores1, storeFront);
  const items3 = [closure_6];
  const items4 = [tmp6];
  const stateFromStores2 = arg1(dependencyMap[5]).useStateFromStores(items3, () => {
    let product = null;
    if (null != tmp6) {
      product = product.getProduct(tmp6);
    }
    return product;
  }, items4);
  const obj4 = arg1(dependencyMap[5]);
  let isIOSResult = arg1(dependencyMap[10]).isIOS();
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
  closure_4 = isIOSResult;
  const tmp12 = importDefault(dependencyMap[11])(() => {
    let tmp = storeFront(priceState[12]);
    tmp = new tmp(500, 10000);
    return tmp;
  });
  closure_5 = tmp12;
  const items5 = [isIOSResult, priceState, storeFront, tmp12];
  const effect = React.useEffect(() => {
    if (isIOSResult) {
      if (priceState !== arg0(priceState[8]).PriceStates.PRICE_AVAILABLE) {
        if (priceState === arg0(priceState[8]).PriceStates.MISMATCHING_COUNTRIES) {
          let country;
          if (null != storeFront) {
            country = storeFront.country;
          }
          if (null != country) {
            if (!tmp12.pending) {
              if (!isIOSResult.isFetchingForPremiumSKUs()) {
                if (tmp12.fails < 3) {
                  const arg0 = storeFront.country;
                  tmp12.fail(() => {
                    if (!fetchingForPremiumSKUs.isFetchingForPremiumSKUs()) {
                      const obj = country(closure_2[13]);
                      const premiumSubscriptionPlans = obj.fetchPremiumSubscriptionPlans(country, undefined, undefined, constants.APPLE_ADVANCED_COMMERCE);
                      premiumSubscriptionPlans.catch(() => {

                      });
                    }
                  });
                  return () => {
                    closure_5.cancel();
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
    if (priceState === arg1(dependencyMap[8]).PriceStates.PRICE_AVAILABLE) {
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
        storeFront = dependencyMap;
        tmp = arg1(dependencyMap[14]);
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
