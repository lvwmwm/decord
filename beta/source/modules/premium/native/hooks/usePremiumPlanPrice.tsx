// Module ID: 8662
// Function ID: 8663
// Name: usePremiumPlanPrice
// Dependencies: [19, 4496, 4497, 6659, 1097, 558, 576, 504, 8663, 8664, 8667, 6662, 1370, 569, 5907, 6676, 6656, 2]

// Module 8662 (usePremiumPlanPrice)
import Constants from "Constants" /* 1097 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 6676 */;
import react_mod from "react" /* 19 */;
import SubscriptionPlanStore_mod from "SubscriptionPlanStore" /* 4496 */;
import SubscriptionStore_mod from "SubscriptionStore" /* 4497 */;
import IAPStore from "IAPStore" /* 6659 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, failResult, num, succeedResult, tmp10;

let react = react_mod;
let SubscriptionPlanStore = SubscriptionPlanStore_mod;
let SubscriptionStore = SubscriptionStore_mod;
const PaymentGateways = Constants.PaymentGateways;
const PremiumPlanPriceSource = { IAP: "IAP", API: "API" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_5;
  let fetchingForPremiumSKUs;
  let mobileStoreFront;
  let price;
  let priceState;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp4;
  let tmp5;
  let tmp8;
  _require = arg0;
  let tmp = _require;
  let tmp2 = priceState;
  let obj = require("react");
  const cResult = obj.c(34);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    class S {
      constructor() {
        return closure_5.getPremiumTypeSubscription();
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp5 = S;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[7]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "usePremiumPlanPrice" };
    cResult[2] = obj2;
    class S {
      constructor() {
        return closure_5.getPremiumTypeSubscription();
      }
    }
  } else {
    tmp8 = cResult[2];
  }
  const NitroACOMSubscriptionExperiment = tmp(tmp2[8]).NitroACOMSubscriptionExperiment;
  const enabled = NitroACOMSubscriptionExperiment.useConfig(tmp8).enabled;
  const obj4 = mobileStoreFront(tmp2[9]);
  mobileStoreFront = obj4.useMobileStoreFront();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SubscriptionPlanStore];
    class S {
      constructor() {
        return closure_5.getPremiumTypeSubscription();
      }
    }
    cResult[3] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn = function p() {
      let value = null;
      if (null != closure_0) {
        value = SubscriptionPlanStore.get(tmp);
      }
      return value;
    };
    const items2 = [arg0];
    class S {
      constructor() {
        return closure_5.getPremiumTypeSubscription();
      }
    }
    cResult[4] = arg0;
    cResult[5] = fn;
    cResult[6] = items2;
    tmp14 = items2;
    tmp13 = fn;
  } else {
    tmp13 = cResult[5];
    tmp14 = cResult[6];
  }
  const tmpResult4 = tmp(tmp2[7]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp11, tmp13, tmp14);
  ({ price, priceState } = mobileStoreFront(tmp2[10])(stateFromStores1, mobileStoreFront));
  let tmp17 = null;
  mobileStoreFront(tmp2[10])(stateFromStores1, mobileStoreFront);
  if (null != arg0) {
    tmp17 = tmp(tmp2[11]).BasePlanIdToProductId[arg0];
  }
  let closure_3 = tmp17;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [IAPStore];
    class S {
      constructor() {
        return closure_5.getPremiumTypeSubscription();
      }
    }
    cResult[7] = items3;
    tmp18 = items3;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] !== tmp17) {
    const fn2 = function b() {
      let product = null;
      if (null != closure_3) {
        product = IAPStore.getProduct(tmp);
      }
      return product;
    };
    const items4 = [tmp17];
    class S {
      constructor() {
        return closure_5.getPremiumTypeSubscription();
      }
    }
    cResult[8] = tmp17;
    cResult[9] = fn2;
    cResult[10] = items4;
    tmp21 = items4;
    tmp20 = fn2;
  } else {
    tmp20 = cResult[9];
    tmp21 = cResult[10];
  }
  const tmpResult5 = tmp(tmp2[7]);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp18, tmp20, tmp21);
  if (cResult[11] === enabled) {
    if (stateFromStores != null) {
      const isACOM = stateFromStores.isACOM;
    }
    class S {
      constructor() {
        return closure_5.getPremiumTypeSubscription();
      }
    }
    SubscriptionPlanStore = tmp24;
    const _Symbol = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class U {
        constructor() {
          const tmp = new mobileStoreFront(priceState[13])(500, 10000);
          return tmp;
        }
      }
      cResult[14] = U;
      class S {
        constructor() {
          return closure_5.getPremiumTypeSubscription();
        }
      }
    } else {
      class U {
        constructor() {
          const tmp = new mobileStoreFront(priceState[13])(500, 10000);
          return tmp;
        }
      }
    }
    const tmp28 = mobileStoreFront(tmp2[14])(tmp27);
    SubscriptionStore = tmp28;
    if (cResult[15] === priceState) {
      class U {
        constructor() {
          const tmp = new mobileStoreFront(priceState[13])(500, 10000);
          return tmp;
        }
      }
    }
    class V {
      constructor() {
        tmp = closure_4;
        if (tmp) {
          tmp2 = priceState;
          tmp3 = closure_0;
          tmp4 = priceState;
          if (priceState !== closure_0(priceState[10]).PriceStates.PRICE_AVAILABLE) {
            if (tmp2 === tmp3(tmp4[10]).PriceStates.MISMATCHING_COUNTRIES) {
              tmp7 = closure_1;
              tmp8 = null;
              country = undefined;
              if (closure_1 != null) {
                country = tmp7.country;
              }
              if (null != country) {
                obj = closure_5;
                if (!closure_5.pending) {
                  tmp10 = closure_4;
                  if (!closure_4.isFetchingForPremiumSKUs()) {
                    num = 3;
                    if (obj.fails < 3) {
                      country = tmp7.country;
                      failResult = obj.fail(() => {
                        if (!SubscriptionPlanStore.isFetchingForPremiumSKUs()) {
                          const obj = SubscriptionPlanActionCreators;
                          const premiumSubscriptionPlans = obj.fetchPremiumSubscriptionPlans(country2, undefined, undefined, PaymentGateways.APPLE_ADVANCED_COMMERCE);
                          premiumSubscriptionPlans.catch(function() { /* body not rendered: F149711 */ });
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
            tmp5 = closure_5;
            succeedResult = closure_5.succeed();
          }
        }
        return;
      }
    }
    const items5 = [tmp24, priceState, mobileStoreFront, tmp28];
    cResult[15] = priceState;
    cResult[16] = mobileStoreFront;
    cResult[17] = tmp28;
    cResult[18] = tmp24;
    cResult[19] = V;
    cResult[20] = items5;
  }
  const tmpResult6 = tmp(tmp2[12]);
  let isIOSResult = tmpResult6.isIOS();
  if (isIOSResult) {
    class U {
      constructor() {
        const tmp = new mobileStoreFront(priceState[13])(500, 10000);
        return tmp;
      }
    }
    if (!tmp26) {
      class U {
        constructor() {
          const tmp = new mobileStoreFront(priceState[13])(500, 10000);
          return tmp;
        }
      }
      if (stateFromStores != null) {
        class U {
          constructor() {
            const tmp = new mobileStoreFront(priceState[13])(500, 10000);
            return tmp;
          }
        }
      }
      class S {
        constructor() {
          return closure_5.getPremiumTypeSubscription();
        }
      }
    }
    isIOSResult = tmp26;
  }
  cResult[11] = enabled;
  if (stateFromStores != null) {
    class U {
      constructor() {
        const tmp = new mobileStoreFront(priceState[13])(500, 10000);
        return tmp;
      }
    }
  }
  cResult[12] = undefined;
  cResult[13] = isIOSResult;
}) : ((arg0) => {
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
  const obj2 = mobileStoreFront(priceState[9]);
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
  const tmp7 = mobileStoreFront(priceState[10])(stateFromStores1, mobileStoreFront);
  ({ price, priceState } = tmp7);
  let tmp8 = null;
  if (null != arg0) {
    tmp8 = tmp(tmp2[11]).BasePlanIdToProductId[arg0];
  }
  react = tmp8;
  const items3 = [IAPStore];
  const items4 = [tmp8];
  const tmpResult = tmp(tmp2[7]);
  const stateFromStores2 = tmpResult.useStateFromStores(items3, () => {
    let product = null;
    if (null != closure_3) {
      product = IAPStore.getProduct(tmp);
    }
    return product;
  }, items4);
  const tmpResult3 = tmp(tmp2[12]);
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
  const tmp12 = tmp4(tmp2[14])(() => {
    const tmp = new mobileStoreFront(priceState[13])(500, 10000);
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
      if (priceState !== closure_0(priceState[10]).PriceStates.PRICE_AVAILABLE) {
        if (tmp2 === tmp3(tmp4[10]).PriceStates.MISMATCHING_COUNTRIES) {
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
      if (priceState === tmp(tmp2[10]).PriceStates.PRICE_AVAILABLE) {
        tmp18 = null;
        if (null != price) {
          ({ amount: obj7.price, currency: obj7.currency } = price);
          const obj4 = { price: null, currency: null, countryCode: country, priceString: tmpResult4.formatPrice(price.amount, price.currency), source: obj.API };
          country = undefined;
          if (mobileStoreFront != null) {
            country = mobileStoreFront.country;
          }
          tmp18 = obj4;
          tmpResult4 = tmp(tmp2[16]);
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
});
const result = size.fileFinishedImporting("modules/premium/native/hooks/usePremiumPlanPrice.tsx");

export default tmp2;
export { PremiumPlanPriceSource };
