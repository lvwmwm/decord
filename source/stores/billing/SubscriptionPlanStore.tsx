// Module ID: 3781
// Function ID: 29354
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3777, 653, 1851, 1916, 21, 566, 686, 2]

// Module 3781 (_isNativeReflectConstruct)
import closure_3 from "ME";
import closure_4 from "GuildFeatures";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import set from "_possibleConstructorReturn";

let SubscriptionIntervalTypes;
let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function addSubscriptionPlan(fromServer) {
  const skuId = fromServer.skuId;
  closure_15[fromServer.id] = fromServer;
  if (null != fromServer.prices[constants.DEFAULT]) {
    const _Set4 = Set;
    const _Object = Object;
    const set = new Set(Object.keys(tmp.paymentSourcePrices));
    closure_19[fromServer.id] = set;
    let set1 = table2[fromServer.skuId];
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
    table2[fromServer.skuId] = set2;
  }
  if (null != table[skuId]) {
    obj.add(fromServer.id);
  } else {
    const _Set3 = Set;
    const items1 = [fromServer.id];
    const set3 = new Set(items1);
    table[skuId] = set3;
  }
}
function initializeNonePlans() {
  const items = [dependencyMap[closure_12.NONE_MONTH], dependencyMap[closure_12.NONE_YEAR], dependencyMap[closure_12.NONE_3_MONTH], dependencyMap[closure_12.NONE_6_MONTH]];
  const item = items.forEach((id) => {
    outer1_25(outer1_8.createFromServer({ id: id.id, name: id.name, interval: id.interval, interval_count: id.intervalCount, tax_inclusive: true, sku_id: id.skuId, currency: outer1_9.USD, price: 0, price_tier: 0 }));
  });
}
function addSubscriptionPlanFromServer(subscription_plan) {
  addSubscriptionPlan(_isNativeReflectConstruct.createFromServer(subscription_plan));
}
function reset() {
  require(1916) /* areArraysShallowlyEqual */.clearObject(closure_15);
  const obj = require(1916) /* areArraysShallowlyEqual */;
  require(1916) /* areArraysShallowlyEqual */.clearObject(closure_16);
  set.clear();
  set1.clear();
  const obj2 = require(1916) /* areArraysShallowlyEqual */;
  require(1916) /* areArraysShallowlyEqual */.clearObject(closure_19);
  const obj3 = require(1916) /* areArraysShallowlyEqual */;
  require(1916) /* areArraysShallowlyEqual */.clearObject(closure_20);
  initializeNonePlans();
}
({ CurrencyCodes: closure_9, PriceSetAssignmentPurchaseTypes: closure_10 } = ME);
({ SubscriptionIntervalTypes, SubscriptionPlanInfo: closure_11, SubscriptionPlans: closure_12, PremiumSubscriptionSKUs: closure_13, ACTIVE_PREMIUM_SKUS: closure_14 } = GuildFeatures);
let closure_15 = {};
let closure_16 = {};
let set = new Set();
let set1 = new Set();
let closure_19 = {};
let closure_20 = {};
initializeNonePlans();
let items = [, , ];
({ DAY: arr[0], MONTH: arr[1], YEAR: arr[2] } = SubscriptionIntervalTypes);
let tmp7 = ((Store) => {
  class SubscriptionPlanStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, SubscriptionPlanStore);
      obj = outer1_6(SubscriptionPlanStore);
      tmp2 = outer1_5;
      if (outer1_22()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SubscriptionPlanStore, Store);
  let obj = {
    key: "getPlanIdsForSkus",
    value(arg0) {
      let iter2;
      const items = [];
      const tmp = outer1_23(arg0);
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = outer1_16;
          let set = outer1_16[iter.value];
          if (null == set) {
            let _Set = Set;
            let tmp4 = new.target;
            let tmp5 = new.target;
            set = new Set();
          }
          let arr = Array.from(set);
          let sorted = arr.sort((arg0, arg1) => {
            const index = outer2_21.indexOf(tmp.interval);
            return index - outer2_21.indexOf(outer2_15[arg1].interval) || outer2_15[arg0].intervalCount - outer2_15[arg1].intervalCount;
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
  let items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "getFetchedSKUIDs",
    value() {
      return outer1_1(outer1_2[9]).keys(outer1_16);
    }
  };
  items[1] = obj;
  obj = {
    key: "getForSKU",
    value(arg0) {
      let items = outer1_16[arg0];
      if (null == items) {
        items = [];
      }
      return Array.from(items).map((arg0) => outer2_15[arg0]);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getForSkuAndInterval",
    value(arg0, arg1) {
      let num = arg2;
      const self = this;
      let closure_0 = arg1;
      if (arg2 === undefined) {
        num = 1;
      }
      const forSKU = self.getForSKU(arg0);
      return forSKU.find((id) => {
        let tmp = id.id !== outer2_12.PREMIUM_GROUP_MONTH;
        if (tmp) {
          tmp = id.interval === closure_0;
        }
        if (tmp) {
          tmp = id.intervalCount === num;
        }
        return tmp;
      });
    }
  };
  items[4] = {
    key: "get",
    value(arg0) {
      return outer1_15[arg0];
    }
  };
  items[5] = {
    key: "isFetchingForSKU",
    value(arg0) {
      return outer1_17.has(arg0);
    }
  };
  items[6] = {
    key: "isFetchingForSKUs",
    value(arr) {
      const self = this;
      return arr.some((arg0) => self.isFetchingForSKU(arg0));
    }
  };
  items[7] = {
    key: "isLoadedForSKU",
    value(arg0) {
      const tmp = !outer1_18.has(arg0);
      let tmp2 = !tmp;
      if (tmp) {
        let tmp4 = !outer1_17.has(arg0);
        if (tmp4) {
          tmp4 = null != outer1_16[arg0];
        }
        tmp2 = tmp4;
      }
      return tmp2;
    }
  };
  items[8] = {
    key: "isLoadedForSKUs",
    value(arr) {
      const self = this;
      return arr.every((arg0) => self.isLoadedForSKU(arg0));
    }
  };
  items[9] = {
    key: "isFetchingForPremiumSKUs",
    value() {
      const self = this;
      return outer1_14.some((arg0) => self.isFetchingForSKU(arg0));
    }
  };
  items[10] = {
    key: "isLoadedForPremiumSKUs",
    value() {
      const self = this;
      return outer1_14.every((arg0) => self.isLoadedForSKU(arg0));
    }
  };
  items[11] = {
    key: "ignoreSKUFetch",
    value(arg0) {
      outer1_18.add(arg0);
    }
  };
  items[12] = {
    key: "getPaymentSourcesForPlanId",
    value(arg0) {
      let tmp = null;
      if (outer1_19.hasOwnProperty(arg0)) {
        tmp = outer1_19[arg0];
      }
      return tmp;
    }
  };
  items[13] = {
    key: "getPaymentSourceIds",
    value() {
      const set = new Set();
      const values = Object.values(outer1_19);
      const item = values.forEach((arr) => arr.forEach((arg0) => outer1_0.add(arg0)));
      return set;
    }
  };
  items[14] = {
    key: "hasPaymentSourceForSKUId",
    value(arg0, arg1) {
      let tmp = outer1_13.NONE === arg1;
      if (!tmp) {
        let hasItem = null != outer1_20[arg1];
        if (hasItem) {
          hasItem = outer1_20[arg1].has(arg0);
          const obj = outer1_20[arg1];
        }
        tmp = hasItem;
      }
      return tmp;
    }
  };
  items[15] = {
    key: "hasPaymentSourceForSKUIds",
    value(arg0, arr) {
      const self = this;
      let closure_1 = arg0;
      return arr.every((arg0) => self.hasPaymentSourceForSKUId(closure_1, arg0));
    }
  };
  return callback(SubscriptionPlanStore, items);
})(require("initialize").Store);
tmp7.displayName = "SubscriptionPlanStore";
tmp7 = new tmp7(require("dispatcher"), {
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
          let tmp2 = addSubscriptionPlanFromServer;
          let tmp3 = addSubscriptionPlanFromServer(value.subscription_plan);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
  },
  LOGOUT: reset
});
let result = set.fileFinishedImporting("stores/billing/SubscriptionPlanStore.tsx");

export default tmp7;
export const subscriptionPlansFetchingForSKU = set;
