// Module ID: 7155
// Function ID: 57753
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: downgradeSubscription, loadUserCountry, sendPaymentCompleteAnalytics, subscribe, updatePendingDowngrade, verifyPurchase

// Module 7155 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
    return arg1(dependencyMap[11]).getPlanIdForGift(arg0);
  } else {
    let basePlanId;
    const tmp5 = arg1(dependencyMap[11]).AppStorePremiumProductIdsToPremiumBundledItems[arg0];
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
  const fn = function*(arg0) {
    let iter10;
    let iter3;
    let iter7;
    let DEFAULT = arg1;
    let flag = arg2;
    if (DEFAULT === undefined) {
      DEFAULT = constants.DEFAULT;
    }
    if (flag === undefined) {
      flag = false;
    }
    yield undefined;
    const items = [];
    const set = new Set();
    let obj = {};
    const tmp3 = callback2(arg0);
    const iter = tmp3();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp4 = closure_28;
        let tmp5 = closure_28(value, flag);
        if (null != tmp5) {
          let tmp6 = closure_19;
          let tmp7 = closure_19[tmp5];
          let skuId;
          if (null != tmp7) {
            skuId = tmp7.skuId;
          }
          let tmp9 = null != skuId;
          if (tmp9) {
            let tmp10 = closure_18;
            tmp9 = tmp7.skuId !== closure_18.NONE;
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
    let obj3 = callback(closure_2[12]);
    const items1 = [...set];
    const tmp14Result = callback2(yield obj3.fetchSubscriptionPlansBySKUs(items1));
    let iter4 = tmp14Result();
    if (!iter4.done) {
      do {
        let tmp16 = closure_26;
        let tmp17 = closure_26(iter4.value);
        let iter5 = tmp17();
        if (!iter5.done) {
          do {
            value = iter5.value;
            obj[value.id] = value;
            let iter6 = tmp17();
            iter5 = iter6;
            let done = iter6.done;
          } while (!done);
        }
        iter7 = tmp14Result();
        iter4 = iter7;
      } while (!iter7.done);
    }
    const tmp18 = callback2(arg0);
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
              let tmp60 = closure_19;
              let tmp61 = closure_19[tmp32];
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
                let tmp63 = closure_0;
                let tmp64 = closure_2;
                US = closure_0(closure_2[13]).CountryCodes.US;
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
              let tmp56 = closure_22;
              let obj2 = { productId: value, planId: tmp32, priceSetAssignmentType: DEFAULT };
              let warnResult = closure_22.warn("[fetchDesktopSubscriptionSkus] No price info found", obj2);
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
            let tmp49 = closure_22;
            obj3 = { productId: value, planId: tmp32 };
            let warnResult1 = closure_22.warn("[fetchDesktopSubscriptionSkus] Plan not found", obj3);
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
          let tmp33 = closure_22;
          let obj4 = { productId: value };
          let warnResult2 = closure_22.warn("[fetchDesktopSubscriptionSkus] No plan ID found", obj4);
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
        let tmp19 = tmp35;
        tmp20 = tmp36;
        let tmp21 = tmp37;
        let tmp22 = tmp38;
        let tmp23 = tmp39;
        let tmp24 = tmp40;
        let tmp25 = tmp41;
        let tmp26 = tmp42;
        let tmp27 = tmp43;
        let tmp28 = tmp44;
        let tmp29 = tmp45;
        let tmp30 = tmp46;
        let tmp31 = tmp47;
        iter9 = iter10;
      } while (!iter10.done);
    }
    return items;
  };
  fn.next();
  return fn;
}
async function _loadUserCountry() {
  const tmp = yield closure_25();
  callback(closure_2[14]).dispatch({ type: "GPLAY_SET_USER_COUNTRY", countryCode: tmp });
}
async function _subscribe(arg0, arg1, arg2, arg3, arg4, arg5) {
  yield closure_21.subscribe(arg0, arg1, arg2, arg3, arg4);
}
async function _verifyPurchase(productId, gift_style, arg2) {
  const tmp2 = state.getState().analyticsByProductId[productId.productId];
  const id = id.getId();
  const SubscriptionProductIds = callback(closure_2[11]).SubscriptionProductIds;
  const tmp4 = !SubscriptionProductIds.includes(productId.productId);
  let tmp5 = null;
  let tmp6 = null;
  productId = productId.productId;
  if (tmp4) {
    tmp6 = productId;
  } else {
    tmp5 = productId;
  }
  let tmp7 = tmp4;
  if (tmp4) {
    tmp7 = null != gift_style;
  }
  if (tmp7) {
    tmp7 = null == gift_style.gift_style;
  }
  if (tmp7) {
    let obj = callback2(closure_2[19]);
    obj = { source: "verifyPurchase", sku_id: tmp.productId };
    obj.track(constants.GIFT_INFO_OPTIONS_MISSING, obj);
  }
  const HTTP = callback(closure_2[20]).HTTP;
  obj = { url: constants2.VERIFY_PURCHASE };
  const obj1 = { purchase_token: productId.purchaseToken, user_id: id, package_name: productId.packageName, subscription_sku_id: tmp5, one_time_purchase_sku_id: tmp6, gift_info_options: gift_style, one_time_purchase_options: { consume_on_validate: true } };
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
      const tmp22 = callback3(tmp2, closure_5);
      callback2(closure_2[19]).track(constants.PAYMENT_FLOW_COMPLETED, tmp22);
      callback4(tmp.productId);
      const obj5 = callback2(closure_2[19]);
    }
  }
  return yield HTTP.post(obj).body;
}
function withGPlayBillingErrorHandling(arg0, arg1) {
  let flag = arg1;
  arg1 = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  const importDefault = flag;
  return importDefaultResult(async (arg0) => {
    const fn = function*(arg0) {
      const items = [...arguments];
      yield undefined;
      const items1 = [...items];
      return yield HermesBuiltin.apply(items1, undefined);
    };
    fn.next();
    return fn;
  });
}
let closure_3 = ["Kaaba"];
let closure_4 = ["Kaaba"];
let closure_5 = ["Kaaba"];
let closure_6 = ["Kaaba"];
let closure_7 = importDefault(dependencyMap[0]);
const importDefaultResult = importDefault(dependencyMap[1]);
({ deleteGPlayAnalytics: closure_9, useGPlayAnalyticsStore: closure_10 } = arg1(dependencyMap[3]));
let closure_11 = importDefault(dependencyMap[4]);
let closure_12 = importDefault(dependencyMap[5]);
const tmp3 = arg1(dependencyMap[3]);
({ AnalyticEvents: closure_13, Endpoints: closure_14, PriceSetAssignmentPurchaseTypes: closure_15 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
({ GPlayBillingResult: closure_16, GPlaySkusType: closure_17 } = arg1(dependencyMap[7]));
const tmp5 = arg1(dependencyMap[7]);
({ PremiumSubscriptionSKUs: closure_18, SubscriptionPlanInfo: closure_19 } = arg1(dependencyMap[8]));
const PaymentGateways = arg1(dependencyMap[9]).PaymentGateways;
const BillingManager = arg1(dependencyMap[2]).NativeModules.BillingManager;
let importDefaultResult1 = importDefault(dependencyMap[10]);
importDefaultResult1 = new importDefaultResult1("GPlayActionCreators");
const result = withGPlayBillingErrorHandling(importDefaultResult(async () => {
  const fn = function*() {
    let SubscriptionProductIds = arg0;
    if (SubscriptionProductIds === undefined) {
      SubscriptionProductIds = callback(closure_2[11]).SubscriptionProductIds;
    }
    yield undefined;
    if (null != SubscriptionProductIds) {
      if (0 !== arr.length) {
        let obj = { type: "GPLAY_FETCH_SUBSCRIPTION_SKUS_START" };
        callback2(closure_2[14]).dispatch(obj);
        const obj3 = callback2(closure_2[14]);
        if (obj5.isGooglePlayBillingSupported()) {
          const tmp10 = yield closure_21.getSubscriptionSkus(SubscriptionProductIds);
          obj = callback2(closure_2[14]);
          obj = { type: "GPLAY_SUBSCRIPTION_SKUS_LOADED" };
          const items = [];
          HermesBuiltin.arraySpread(tmp10, 0);
          obj.skus = items;
          obj.skusType = constants.SUBSCRIPTION;
          obj.dispatch(obj);
          return tmp10;
        } else {
          const tmp6 = yield closure_29(arr);
          return tmp6;
        }
        const obj5 = callback(closure_2[15]);
      }
    }
    return [];
  };
  fn.next();
  return fn;
}), true);
const result1 = withGPlayBillingErrorHandling(importDefaultResult(async () => {
  const fn = function*() {
    let IAPProductIds = arg0;
    if (IAPProductIds === undefined) {
      IAPProductIds = callback(closure_2[11]).IAPProductIds;
    }
    let arr = IAPProductIds;
    yield undefined;
    if (null != arr) {
      if (0 !== arr.length) {
        let obj = { type: "GPLAY_FETCH_IN_APP_SKUS_START" };
        callback2(closure_2[14]).dispatch(obj);
        const obj4 = callback2(closure_2[14]);
        if (obj6.isGooglePlayBillingSupported()) {
          const tmp26 = yield closure_21.getIAPSkus(IAPProductIds);
          obj = { type: "GPLAY_IN_APP_SKUS_LOADED" };
          const items = [];
          HermesBuiltin.arraySpread(tmp26, 0);
          obj.skus = items;
          obj.skusType = constants2.IN_APP;
          callback2(closure_2[14]).dispatch(obj);
          return tmp26;
        } else {
          const items1 = [];
          const tmp6 = callback3(arr);
          const iter = tmp6();
          let iter2 = iter;
          if (!iter.done) {
            const value = iter2.value;
            obj = callback(closure_2[11]);
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
            resolved = callback4(items1, constants.GIFT, true);
          }
          const tmp22 = yield resolved;
          return tmp22;
        }
        const obj6 = callback(closure_2[15]);
      }
    }
    return [];
  };
  fn.next();
  return fn;
}), true);
const result2 = withGPlayBillingErrorHandling(importDefaultResult(async () => {
  const items = [callback(), callback2()];
  yield Promise.all(items);
}));
const tmp6 = arg1(dependencyMap[8]);
const result3 = withGPlayBillingErrorHandling(importDefaultResult(async () => {
  if (obj.isGooglePlayBillingSupported()) {
    return yield closure_21.getUserCountry();
  } else {
    closure_22.info("[getUserCountry] Quest: Skipping Google Play country lookup");
    return null;
  }
  const obj = callback(closure_2[15]);
}), true);
const tmp12 = () => {
  let closure_0 = importDefaultResult(async (arg0, arg1) => {
    state.getState().analyticsByProductId[arg0];
    yield closure_21.purchase(arg0, arg1);
  });
  return function() {
    return callback(...arguments);
  };
}();
const result4 = arg1(dependencyMap[21]).fileFinishedImporting("actions/native/GPlayActionCreators.tsx");

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
    let obj = importDefault(dependencyMap[19]);
    obj.track(constants.PAYMENT_FLOW_COMPLETED, tmp4);
    obj = {};
    const merged = Object.assign(tmp4);
    const merged1 = Object.assign(succeededOnlyFields);
    importDefault(dependencyMap[19]).track(constants.PAYMENT_FLOW_SUCCEEDED, obj);
    callback2(purchase.productId);
    const obj2 = importDefault(dependencyMap[19]);
  }
};
export const updatePendingDowngrade = function updatePendingDowngrade(productId, closure_6, closure_7, closure_5) {
  const items = [store.getProduct(productId), store.getProduct(closure_6)];
  const first = items[0];
  if (null != items[1]) {
    if (null != first) {
      if (null != tmp2) {
        if (null != first) {
          if (null != tmp2.billingPeriod) {
            if (null != first.billingPeriod) {
              let obj = closure_6(dependencyMap[16]);
            }
          }
        }
      }
      obj = { type: "GPLAY_UPDATE_PENDING_DOWNGRADE" };
      obj = { purchaseToken: closure_7, subscriptionId: closure_5, newSubscriptionSkuId: first.identifier };
      obj.pendingDowngrade = obj;
      importDefault(dependencyMap[14]).dispatch(obj);
      const obj2 = importDefault(dependencyMap[14]);
    }
  }
};
export const downgradeSubscription = function downgradeSubscription(arg0) {
  let newSubscriptionSkuId;
  let purchaseToken;
  let subscriptionId;
  ({ purchaseToken, subscriptionId, newSubscriptionSkuId } = arg0);
  const HTTP = arg1(dependencyMap[20]).HTTP;
  return HTTP.post({ url: constants2.DOWNGRADE_SUBSCRIPTION, body: { purchase_token: purchaseToken, subscription_id: subscriptionId, subscription_sku_id: newSubscriptionSkuId }, rejectWithError: false });
};
export const getUserCountry = result3;
