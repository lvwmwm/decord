// Module ID: 7160
// Function ID: 57798
// Name: _createForOfIteratorHelperLoose
// Dependencies: [29, 5, 27, 7120, 1194, 5621, 653, 5622, 1851, 482, 3, 5624, 5638, 3813, 686, 3789, 3791, 4470, 1212, 675, 507, 2]
// Exports: downgradeSubscription, loadUserCountry, sendPaymentCompleteAnalytics, subscribe, updatePendingDowngrade, verifyPurchase

// Module 7160 (_createForOfIteratorHelperLoose)
import _objectWithoutProperties from "_objectWithoutProperties";
import importDefaultResult from "_isNativeReflectConstruct";
import setGPlayAnalytics from "setGPlayAnalytics";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import ME from "ME";
import GPlayConnectionState from "GPlayConnectionState";
import GuildFeatures from "GuildFeatures";
import { PaymentGateways } from "sum";
import importDefaultResult1 from "setGPlayAnalytics";

let closure_10;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getPlanIdForProduct(arg0, arg1) {
  if (arg1) {
    return require(5624) /* SubscriptionPlans */.getPlanIdForGift(arg0);
  } else {
    let basePlanId;
    const tmp5 = require(5624) /* SubscriptionPlans */.AppStorePremiumProductIdsToPremiumBundledItems[arg0];
    if (null != tmp5) {
      basePlanId = tmp5.basePlanId;
    }
    let tmp7 = null;
    if (null != basePlanId) {
      tmp7 = basePlanId;
    }
    return tmp7;
  }
}
function fetchDesktopSubscriptionSkus() {
  return _fetchDesktopSubscriptionSkus(...arguments);
}
async function _fetchDesktopSubscriptionSkus(arg0, arg1) {
  let iter = (function*(arg0) {
    let iter10;
    let iter3;
    let iter7;
    let DEFAULT = arg1;
    let flag = arg2;
    if (DEFAULT === undefined) {
      DEFAULT = outer2_15.DEFAULT;
    }
    if (flag === undefined) {
      flag = false;
    }
    yield undefined;
    const items = [];
    const set = new Set();
    let obj = {};
    const tmp3 = outer2_26(arg0);
    const iter = tmp3();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp4 = outer2_28;
        let tmp5 = outer2_28(value, flag);
        if (null != tmp5) {
          let tmp6 = outer2_19;
          let tmp7 = outer2_19[tmp5];
          let skuId;
          if (null != tmp7) {
            skuId = tmp7.skuId;
          }
          let tmp9 = null != skuId;
          if (tmp9) {
            let tmp10 = outer2_18;
            tmp9 = tmp7.skuId !== outer2_18.NONE;
          }
          let tmp11 = tmp7;
          if (tmp9) {
            let addResult = set.add(tmp7.skuId);
            obj[value] = tmp5;
            let tmp13 = tmp7;
          }
        }
        iter3 = tmp3();
        iter2 = iter3;
      } while (!iter3.done);
    }
    obj = {};
    let obj3 = outer2_0(outer2_2[12]);
    const items1 = [...set];
    const tmp14Result = outer2_26(yield obj3.fetchSubscriptionPlansBySKUs(items1));
    let iter4 = tmp14Result();
    if (!iter4.done) {
      do {
        let tmp16 = outer2_26;
        let tmp17 = outer2_26(iter4.value);
        let iter5 = tmp17();
        if (!iter5.done) {
          do {
            value = iter5.value;
            obj[value.id] = value;
            let iter6 = tmp17();
            iter5 = iter6;
            done = iter6.done;
          } while (!done);
        }
        iter7 = tmp14Result();
        iter4 = iter7;
      } while (!iter7.done);
    }
    const tmp18 = outer2_26(arg0);
    const iter8 = tmp18();
    let iter9 = iter8;
    if (!iter8.done) {
      do {
        value = iter9.value;
        let tmp32 = obj[value];
        if (null != tmp32) {
          let tmp48 = obj[tmp32];
          if (null != tmp48) {
            let prices = tmp48.prices;
            let tmp52 = prices;
            let country_prices;
            if (null != prices) {
              let tmp54 = prices[DEFAULT];
              tmp52 = tmp54;
              if (null != tmp54) {
                country_prices = tmp54.country_prices;
                tmp52 = tmp54;
              }
            }
            let first;
            if (null != country_prices) {
              let prices2 = country_prices.prices;
              let tmp20 = prices2;
              if (null != prices2) {
                first = prices2[0];
                tmp20 = prices2;
              }
            }
            if (null != first) {
              let str = first.currency;
              let formatted;
              if (null != str) {
                formatted = str.toLowerCase();
              }
              let str2 = "usd";
              if (null != formatted) {
                str2 = formatted;
              }
              let amount = first.amount;
              let tmp60 = outer2_19;
              let tmp61 = outer2_19[tmp32];
              let obj1 = { identifier: value, price: amount, currencySymbol: first.currency, currencyCode: str2 };
              let str3 = "";
              if (null != first.currency) {
                let result = amount / 100;
                let _HermesInternal = HermesInternal;
                str3 = "" + first.currency + " " + result.toFixed(2);
              }
              obj1.priceString = str3;
              let country_code;
              if (null != country_prices) {
                country_code = country_prices.country_code;
              }
              let US = country_code;
              if (null == country_code) {
                let tmp63 = outer2_0;
                let tmp64 = outer2_2;
                US = outer2_0(outer2_2[13]).CountryCodes.US;
              }
              obj1.countryCode = US;
              obj1.downloadable = false;
              let name;
              if (null != tmp61) {
                name = tmp61.name;
              }
              if (null == name) {
                name = tmp48.name;
              }
              let str4 = "";
              if (null != name) {
                str4 = name;
              }
              obj1.description = str4;
              let name1;
              if (null != tmp61) {
                name1 = tmp61.name;
              }
              let name2 = name1;
              if (null == name1) {
                name2 = tmp48.name;
              }
              let str5 = "";
              if (null != name2) {
                str5 = name2;
              }
              obj1.title = str5;
              let str6 = "subs";
              if (flag) {
                str6 = "inapp";
              }
              obj1.type = str6;
              obj1.subscriptionOffers = [];
              let arr = items.push(obj1);
              let tmp35 = tmp52;
              let tmp36 = tmp20;
              let tmp37 = formatted;
              let tmp38 = str;
              let tmp39 = country_code;
              let tmp40 = name;
              let tmp41 = name;
              let tmp42 = name2;
              let tmp43 = name1;
              let tmp68 = tmp48;
              let tmp44 = country_prices;
              let tmp45 = first;
              let tmp46 = amount;
              let tmp47 = tmp61;
            } else {
              let tmp56 = outer2_22;
              let obj2 = { productId: value, planId: tmp32, priceSetAssignmentType: DEFAULT };
              let warnResult = outer2_22.warn("[fetchDesktopSubscriptionSkus] No price info found", obj2);
              tmp35 = tmp52;
              tmp36 = tmp20;
              tmp37 = tmp21;
              tmp38 = tmp22;
              tmp39 = tmp23;
              tmp40 = tmp24;
              tmp41 = tmp25;
              tmp42 = tmp26;
              tmp43 = tmp27;
              let tmp58 = tmp48;
              tmp44 = country_prices;
              tmp45 = first;
              tmp46 = tmp30;
              tmp47 = tmp31;
            }
          } else {
            let tmp49 = outer2_22;
            obj3 = { productId: value, planId: tmp32 };
            let warnResult1 = outer2_22.warn("[fetchDesktopSubscriptionSkus] Plan not found", obj3);
            tmp35 = tmp19;
            tmp36 = tmp20;
            tmp37 = tmp21;
            tmp38 = tmp22;
            tmp39 = tmp23;
            tmp40 = tmp24;
            tmp41 = tmp25;
            tmp42 = tmp26;
            tmp43 = tmp27;
            let tmp51 = tmp48;
            tmp44 = tmp28;
            tmp45 = tmp29;
            tmp46 = tmp30;
            tmp47 = tmp31;
          }
        } else {
          let tmp33 = outer2_22;
          let obj4 = { productId: value };
          let warnResult2 = outer2_22.warn("[fetchDesktopSubscriptionSkus] No plan ID found", obj4);
          tmp35 = tmp19;
          tmp36 = tmp20;
          tmp37 = tmp21;
          tmp38 = tmp22;
          tmp39 = tmp23;
          tmp40 = tmp24;
          tmp41 = tmp25;
          tmp42 = tmp26;
          tmp43 = tmp27;
          tmp44 = tmp28;
          tmp45 = tmp29;
          tmp46 = tmp30;
          tmp47 = tmp31;
        }
        iter10 = tmp18();
        tmp19 = tmp35;
        tmp20 = tmp36;
        tmp21 = tmp37;
        tmp22 = tmp38;
        tmp23 = tmp39;
        tmp24 = tmp40;
        tmp25 = tmp41;
        tmp26 = tmp42;
        tmp27 = tmp43;
        tmp28 = tmp44;
        tmp29 = tmp45;
        tmp30 = tmp46;
        tmp31 = tmp47;
        iter9 = iter10;
      } while (!iter10.done);
    }
    return items;
  })();
  iter.next();
  return iter;
}
async function _loadUserCountry() {
  const tmp = yield outer2_25();
  outer2_1(outer2_2[14]).dispatch({ type: "GPLAY_SET_USER_COUNTRY", countryCode: tmp });
}
async function _subscribe(arg0, arg1, arg2, arg3, arg4, arg5) {
  yield outer2_21.subscribe(arg0, arg1, arg2, arg3, arg4);
}
async function _verifyPurchase(arg0, arg1, arg2) {
  const tmp2 = outer2_10.getState().analyticsByProductId[arg0.productId];
  const id = outer2_11.getId();
  const SubscriptionProductIds = outer2_0(outer2_2[11]).SubscriptionProductIds;
  const tmp4 = !SubscriptionProductIds.includes(arg0.productId);
  let tmp5 = null;
  let tmp6 = null;
  const productId = arg0.productId;
  if (tmp4) {
    tmp6 = productId;
  } else {
    tmp5 = productId;
  }
  let tmp7 = tmp4;
  if (tmp4) {
    tmp7 = null != arg1;
  }
  if (tmp7) {
    tmp7 = null == arg1.gift_style;
  }
  if (tmp7) {
    let obj = outer2_1(outer2_2[19]);
    obj = { source: "verifyPurchase", sku_id: tmp.productId };
    obj.track(outer2_13.GIFT_INFO_OPTIONS_MISSING, obj);
  }
  const HTTP = outer2_0(outer2_2[20]).HTTP;
  obj = { url: outer2_14.VERIFY_PURCHASE };
  const obj1 = { purchase_token: arg0.purchaseToken, user_id: id, package_name: arg0.packageName, subscription_sku_id: tmp5, one_time_purchase_sku_id: tmp6, gift_info_options: arg1, one_time_purchase_options: { consume_on_validate: true } };
  let load_id;
  if (null != tmp2) {
    load_id = tmp2.load_id;
  }
  let tmp17 = null;
  if (null != load_id) {
    tmp17 = load_id;
  }
  obj1.load_id = tmp17;
  obj.body = obj1;
  obj.rejectWithError = false;
  if (null != tmp2) {
    if (!tmp4) {
      const succeededOnlyFields = tmp2.succeededOnlyFields;
      const tmp22 = outer2_7(tmp2, outer2_5);
      outer2_1(outer2_2[19]).track(outer2_13.PAYMENT_FLOW_COMPLETED, tmp22);
      outer2_9(tmp.productId);
      const obj5 = outer2_1(outer2_2[19]);
    }
  }
  return yield HTTP.post(obj).body;
}
function withGPlayBillingErrorHandling(arg0, arg1) {
  let flag = arg1;
  let closure_0 = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  return importDefaultResult(async (arg0) => {
    const iter = (function*(arg0) {
      const items = [...arguments];
      yield undefined;
      const items1 = [...items];
      return yield HermesBuiltin.apply(items1, undefined);
    })();
    iter.next();
    return iter;
  });
}
let closure_3 = ["succeededOnlyFields"];
let closure_4 = ["succeededOnlyFields"];
let closure_5 = ["succeededOnlyFields"];
let closure_6 = ["succeededOnlyFields"];
({ deleteGPlayAnalytics: closure_9, useGPlayAnalyticsStore: closure_10 } = setGPlayAnalytics);
({ AnalyticEvents: closure_13, Endpoints: closure_14, PriceSetAssignmentPurchaseTypes: closure_15 } = ME);
({ GPlayBillingResult: closure_16, GPlaySkusType: closure_17 } = GPlayConnectionState);
({ PremiumSubscriptionSKUs: closure_18, SubscriptionPlanInfo: closure_19 } = GuildFeatures);
const BillingManager = require("get ActivityIndicator").NativeModules.BillingManager;
importDefaultResult1 = new importDefaultResult1("GPlayActionCreators");
let result = withGPlayBillingErrorHandling(importDefaultResult(async () => {
  const iter = (function*() {
    let SubscriptionProductIds = arg0;
    if (SubscriptionProductIds === undefined) {
      SubscriptionProductIds = outer1_0(outer1_2[11]).SubscriptionProductIds;
    }
    yield undefined;
    if (null != SubscriptionProductIds) {
      if (0 !== arr.length) {
        let obj = { type: "GPLAY_FETCH_SUBSCRIPTION_SKUS_START" };
        outer1_1(outer1_2[14]).dispatch(obj);
        const obj3 = outer1_1(outer1_2[14]);
        if (obj5.isGooglePlayBillingSupported()) {
          const tmp10 = yield outer1_21.getSubscriptionSkus(SubscriptionProductIds);
          obj = outer1_1(outer1_2[14]);
          obj = { type: "GPLAY_SUBSCRIPTION_SKUS_LOADED" };
          const items = [];
          HermesBuiltin.arraySpread(tmp10, 0);
          obj.skus = items;
          obj.skusType = outer1_17.SUBSCRIPTION;
          obj.dispatch(obj);
          return tmp10;
        } else {
          const tmp6 = yield outer1_29(arr);
          return tmp6;
        }
        obj5 = outer1_0(outer1_2[15]);
      }
    }
    return [];
  })();
  iter.next();
  return iter;
}), true);
const result1 = withGPlayBillingErrorHandling(importDefaultResult(async () => {
  let iter = (function*() {
    let IAPProductIds = arg0;
    if (IAPProductIds === undefined) {
      IAPProductIds = outer1_0(outer1_2[11]).IAPProductIds;
    }
    let arr = IAPProductIds;
    yield undefined;
    if (null != arr) {
      if (0 !== arr.length) {
        let obj = { type: "GPLAY_FETCH_IN_APP_SKUS_START" };
        outer1_1(outer1_2[14]).dispatch(obj);
        const obj4 = outer1_1(outer1_2[14]);
        if (obj6.isGooglePlayBillingSupported()) {
          const tmp26 = yield outer1_21.getIAPSkus(IAPProductIds);
          obj = { type: "GPLAY_IN_APP_SKUS_LOADED" };
          const items = [];
          HermesBuiltin.arraySpread(tmp26, 0);
          obj.skus = items;
          obj.skusType = outer1_17.IN_APP;
          outer1_1(outer1_2[14]).dispatch(obj);
          return tmp26;
        } else {
          const items1 = [];
          const tmp6 = outer1_26(arr);
          const iter = tmp6();
          let iter2 = iter;
          if (!iter.done) {
            const value = iter2.value;
            obj = outer1_0(outer1_2[11]);
            const planIdForGift = obj.getPlanIdForGift(value);
            arr = items1.push(value);
            while (true) {
              while (true) {
                let tmp15 = tmp6;
                let iter3 = tmp6();
                iter2 = iter3;
                if (!iter3.done) {
                  break;
                } else {
                  break label0;
                }
              }
            }
          }
          if (0 === items1.length) {
            let flag = [];
            let resolved = Promise.resolve(flag);
          } else {
            flag = true;
            resolved = outer1_29(items1, outer1_15.GIFT, true);
          }
          const tmp22 = yield resolved;
          return tmp22;
        }
        obj6 = outer1_0(outer1_2[15]);
      }
    }
    return [];
  })();
  iter.next();
  return iter;
}), true);
const result2 = withGPlayBillingErrorHandling(importDefaultResult(async () => {
  const items = [outer1_23(), outer1_24()];
  yield Promise.all(items);
}));
const result3 = withGPlayBillingErrorHandling(importDefaultResult(async () => {
  if (obj.isGooglePlayBillingSupported()) {
    return yield outer1_21.getUserCountry();
  } else {
    outer1_22.info("[getUserCountry] Quest: Skipping Google Play country lookup");
    return null;
  }
  obj = outer1_0(outer1_2[15]);
}), true);
const tmp12 = (() => {
  let closure_0 = importDefaultResult(async (arg0, arg1) => {
    outer2_10.getState().analyticsByProductId[arg0];
    yield outer2_21.purchase(arg0, arg1);
  });
  return function() {
    return callback(...arguments);
  };
})();
const result4 = require("get ActivityIndicator").fileFinishedImporting("actions/native/GPlayActionCreators.tsx");

export const loadSubscriptionSkus = result;
export const loadInAppSkus = result1;
export const loadSkus = result2;
export const loadUserCountry = function loadUserCountry() {
  return _loadUserCountry(...arguments);
};
export const purchase = tmp12;
export const subscribe = function subscribe() {
  return _subscribe(...arguments);
};
export const verifyPurchase = function verifyPurchase(purchase, giftOptionsForKey) {
  return _verifyPurchase(...arguments);
};
export const sendPaymentCompleteAnalytics = function sendPaymentCompleteAnalytics(purchase) {
  const tmp = state.getState().analyticsByProductId[purchase.productId];
  if (null != tmp) {
    const succeededOnlyFields = tmp.succeededOnlyFields;
    const tmp4 = callback(tmp, closure_4);
    let obj = importDefault(675);
    obj.track(constants.PAYMENT_FLOW_COMPLETED, tmp4);
    obj = {};
    const merged = Object.assign(tmp4);
    const merged1 = Object.assign(succeededOnlyFields);
    importDefault(675).track(constants.PAYMENT_FLOW_SUCCEEDED, obj);
    callback2(purchase.productId);
    const obj2 = importDefault(675);
  }
};
export const updatePendingDowngrade = function updatePendingDowngrade(productId, outer2_6, outer2_7, outer2_5) {
  const items = [store.getProduct(productId), store.getProduct(outer2_6)];
  const first = items[0];
  if (null != items[1]) {
    if (null != first) {
      if (null != tmp2) {
        if (null != first) {
          if (null != tmp2.billingPeriod) {
            if (null != first.billingPeriod) {
              let obj = require(3791) /* _createGatewayCheckoutContext */;
            }
          }
        }
      }
      obj = { type: "GPLAY_UPDATE_PENDING_DOWNGRADE" };
      obj = { purchaseToken: outer2_7, subscriptionId: outer2_5, newSubscriptionSkuId: first.identifier };
      obj.pendingDowngrade = obj;
      importDefault(686).dispatch(obj);
      const obj2 = importDefault(686);
    }
  }
};
export const downgradeSubscription = function downgradeSubscription(arg0) {
  let newSubscriptionSkuId;
  let purchaseToken;
  let subscriptionId;
  ({ purchaseToken, subscriptionId, newSubscriptionSkuId } = arg0);
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  return HTTP.post({ url: constants2.DOWNGRADE_SUBSCRIPTION, body: { purchase_token: purchaseToken, subscription_id: subscriptionId, subscription_sku_id: newSubscriptionSkuId }, rejectWithError: false });
};
export const getUserCountry = result3;
