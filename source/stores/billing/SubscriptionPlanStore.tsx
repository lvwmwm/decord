// Module ID: 3779
// Function ID: 29348
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 3779 (_isNativeReflectConstruct)
let SubscriptionIntervalTypes;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function addSubscriptionPlan(fromServer) {
  const skuId = fromServer.skuId;
  closure_15[fromServer.id] = fromServer;
  if (null != fromServer.prices[closure_10.DEFAULT]) {
    const _Set4 = Set;
    const _Object = Object;
    const set = new Set(Object.keys(tmp.paymentSourcePrices));
    closure_19[fromServer.id] = set;
    let set1 = closure_20[fromServer.skuId];
    if (null == set1) {
      const _Set = Set;
      set1 = new Set();
    }
    const _Set2 = Set;
    const items = [];
    const _Array = Array;
    let arraySpreadResult = HermesBuiltin.arraySpread(Array.from(set1), 0);
    arraySpreadResult = HermesBuiltin.arraySpread(Array.from(set), arraySpreadResult);
    const set2 = new Set(items);
    closure_20[fromServer.skuId] = set2;
  }
  if (null != closure_16[skuId]) {
    obj.add(fromServer.id);
  } else {
    const _Set3 = Set;
    const items1 = [fromServer.id];
    const set3 = new Set(items1);
    closure_16[skuId] = set3;
  }
}
function initializeNonePlans() {
  const items = [closure_11[closure_12.NONE_MONTH], closure_11[closure_12.NONE_YEAR], closure_11[closure_12.NONE_3_MONTH], closure_11[closure_12.NONE_6_MONTH]];
  const item = items.forEach((id) => {
    callback(closure_8.createFromServer({ id: id.id, name: id.name, interval: id.interval, interval_count: id.intervalCount, tax_inclusive: true, sku_id: id.skuId, currency: constants.USD, price: 0, price_tier: 0 }));
  });
}
function addSubscriptionPlanFromServer(subscription_plan) {
  addSubscriptionPlan(closure_8.createFromServer(subscription_plan));
}
function reset() {
  arg1(dependencyMap[8]).clearObject(closure_15);
  const obj = arg1(dependencyMap[8]);
  arg1(dependencyMap[8]).clearObject(closure_16);
  set.clear();
  set1.clear();
  const obj2 = arg1(dependencyMap[8]);
  arg1(dependencyMap[8]).clearObject(closure_19);
  const obj3 = arg1(dependencyMap[8]);
  arg1(dependencyMap[8]).clearObject(closure_20);
  initializeNonePlans();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ CurrencyCodes: closure_9, PriceSetAssignmentPurchaseTypes: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ SubscriptionIntervalTypes, SubscriptionPlanInfo: closure_11, SubscriptionPlans: closure_12, PremiumSubscriptionSKUs: closure_13, ACTIVE_PREMIUM_SKUS: closure_14 } = arg1(dependencyMap[7]));
let closure_15 = {};
let closure_16 = {};
const set = new Set();
const set1 = new Set();
let closure_19 = {};
let closure_20 = {};
initializeNonePlans();
const items = [, , ];
({ DAY: arr[0], MONTH: arr[1], YEAR: arr[2] } = SubscriptionIntervalTypes);
let tmp7 = (Store) => {
  class SubscriptionPlanStore {
    constructor() {
      self = this;
      tmp = closure_3(this, SubscriptionPlanStore);
      obj = closure_6(SubscriptionPlanStore);
      tmp2 = closure_5;
      if (closure_22()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = SubscriptionPlanStore;
  callback2(SubscriptionPlanStore, Store);
  let obj = {
    key: "getPlanIdsForSkus",
    value(arg0) {
      let iter2;
      const items = [];
      const tmp = callback5(arg0);
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = closure_16;
          let set = closure_16[iter.value];
          if (null == set) {
            let _Set = Set;
            let tmp4 = new.target;
            let tmp5 = new.target;
            set = new Set();
          }
          let arr = Array.from(set);
          let sorted = arr.sort((arg0, arg1) => {
            const index = closure_21.indexOf(tmp.interval);
            return index - closure_21.indexOf(closure_15[arg1].interval) || closure_15[arg0].intervalCount - closure_15[arg1].intervalCount;
          });
          let push = items.push;
          let items1 = [];
          let tmp7 = items1;
          let tmp8 = arr;
          let num = 0;
          let arraySpreadResult = HermesBuiltin.arraySpread(arr, 0);
          let tmp10 = push;
          let tmp11 = items1;
          let tmp12 = items;
          let applyResult = HermesBuiltin.apply(items1, items);
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
      return items;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "getFetchedSKUIDs",
    value() {
      return callback(closure_2[9]).keys(closure_16);
    }
  };
  items[1] = obj;
  obj = {
    key: "getForSKU",
    value(arg0) {
      let items = closure_16[arg0];
      if (null == items) {
        items = [];
      }
      return Array.from(items).map((arg0) => closure_15[arg0]);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getForSkuAndInterval",
    value(arg0, arg1) {
      let num = arg2;
      const self = this;
      const SubscriptionPlanStore = arg1;
      if (arg2 === undefined) {
        num = 1;
      }
      const forSKU = self.getForSKU(arg0);
      return forSKU.find((interval) => {
        let tmp = interval.interval === arg1;
        if (tmp) {
          tmp = interval.intervalCount === num;
        }
        return tmp;
      });
    }
  };
  items[4] = {
    key: "get",
    value(arg0) {
      return closure_15[arg0];
    }
  };
  items[5] = {
    key: "isFetchingForSKU",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[6] = {
    key: "isFetchingForSKUs",
    value(arr) {
      const SubscriptionPlanStore = this;
      return arr.some((arg0) => self.isFetchingForSKU(arg0));
    }
  };
  items[7] = {
    key: "isLoadedForSKU",
    value(arg0) {
      const tmp = !set2.has(arg0);
      let tmp2 = !tmp;
      if (tmp) {
        let tmp4 = !set.has(arg0);
        if (tmp4) {
          tmp4 = null != closure_16[arg0];
        }
        tmp2 = tmp4;
      }
      return tmp2;
    }
  };
  items[8] = {
    key: "isLoadedForSKUs",
    value(arr) {
      const SubscriptionPlanStore = this;
      return arr.every((arg0) => self.isLoadedForSKU(arg0));
    }
  };
  items[9] = {
    key: "isFetchingForPremiumSKUs",
    value() {
      const SubscriptionPlanStore = this;
      return closure_14.some((arg0) => self.isFetchingForSKU(arg0));
    }
  };
  items[10] = {
    key: "isLoadedForPremiumSKUs",
    value() {
      const SubscriptionPlanStore = this;
      return closure_14.every((arg0) => self.isLoadedForSKU(arg0));
    }
  };
  items[11] = {
    key: "ignoreSKUFetch",
    value(arg0) {
      set2.add(arg0);
    }
  };
  items[12] = {
    key: "getPaymentSourcesForPlanId",
    value(arg0) {
      let tmp = null;
      if (closure_19.hasOwnProperty(arg0)) {
        tmp = closure_19[arg0];
      }
      return tmp;
    }
  };
  items[13] = {
    key: "getPaymentSourceIds",
    value() {
      const set = new Set();
      const SubscriptionPlanStore = set;
      const values = Object.values(closure_19);
      const item = values.forEach((arr) => arr.forEach((arg0) => set.add(arg0)));
      return set;
    }
  };
  items[14] = {
    key: "hasPaymentSourceForSKUId",
    value(arg0, arg1) {
      let tmp = constants.NONE === arg1;
      if (!tmp) {
        let hasItem = null != closure_20[arg1];
        if (hasItem) {
          hasItem = closure_20[arg1].has(arg0);
          const obj = closure_20[arg1];
        }
        tmp = hasItem;
      }
      return tmp;
    }
  };
  items[15] = {
    key: "hasPaymentSourceForSKUIds",
    value(arg0, arr) {
      const SubscriptionPlanStore = this;
      return arr.every((arg0) => self.hasPaymentSourceForSKUId(arg0, arg0));
    }
  };
  return callback(SubscriptionPlanStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp7.displayName = "SubscriptionPlanStore";
tmp7 = new tmp7(importDefault(dependencyMap[11]), {
  SUBSCRIPTION_PLANS_FETCH: function handleSubscriptionPlansFetch(skuId) {
    set.add(skuId.skuId);
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: function handleSubscriptionPlansFetchSuccess(arg0) {
    let skuId;
    let subscriptionPlans;
    ({ skuId, subscriptionPlans } = arg0);
    const set = new Set();
    closure_16[skuId] = set;
    const set1 = new Set();
    closure_20[skuId] = set1;
    const item = subscriptionPlans.forEach(addSubscriptionPlanFromServer);
    set.delete(skuId);
    set1.delete(skuId);
  },
  SUBSCRIPTION_PLANS_FETCH_FAILURE: function handleSubscriptionPlansFetchFailure(skuId) {
    skuId = skuId.skuId;
    set.delete(skuId);
    set1.delete(skuId);
  },
  SUBSCRIPTION_PLANS_RESET: reset,
  GIFT_CODE_RESOLVE_SUCCESS: function handleGiftCodeResolveSuccess(giftCode) {
    giftCode = giftCode.giftCode;
    if (null != giftCode.subscription_plan) {
      addSubscriptionPlanFromServer(giftCode.subscription_plan);
    }
  },
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function handleEntitlementGiftsFetchSuccess(entitlements) {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(entitlements.entitlements);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        if (null != value.subscription_plan) {
          let tmp2 = closure_27;
          let tmp3 = closure_27(value.subscription_plan);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
  },
  LOGOUT: reset
});
const obj = {
  SUBSCRIPTION_PLANS_FETCH: function handleSubscriptionPlansFetch(skuId) {
    set.add(skuId.skuId);
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: function handleSubscriptionPlansFetchSuccess(arg0) {
    let skuId;
    let subscriptionPlans;
    ({ skuId, subscriptionPlans } = arg0);
    const set = new Set();
    closure_16[skuId] = set;
    const set1 = new Set();
    closure_20[skuId] = set1;
    const item = subscriptionPlans.forEach(addSubscriptionPlanFromServer);
    set.delete(skuId);
    set1.delete(skuId);
  },
  SUBSCRIPTION_PLANS_FETCH_FAILURE: function handleSubscriptionPlansFetchFailure(skuId) {
    skuId = skuId.skuId;
    set.delete(skuId);
    set1.delete(skuId);
  },
  SUBSCRIPTION_PLANS_RESET: reset,
  GIFT_CODE_RESOLVE_SUCCESS: function handleGiftCodeResolveSuccess(giftCode) {
    giftCode = giftCode.giftCode;
    if (null != giftCode.subscription_plan) {
      addSubscriptionPlanFromServer(giftCode.subscription_plan);
    }
  },
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function handleEntitlementGiftsFetchSuccess(entitlements) {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(entitlements.entitlements);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        if (null != value.subscription_plan) {
          let tmp2 = closure_27;
          let tmp3 = closure_27(value.subscription_plan);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
  },
  LOGOUT: reset
};
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("stores/billing/SubscriptionPlanStore.tsx");

export default tmp7;
export const subscriptionPlansFetchingForSKU = set;
