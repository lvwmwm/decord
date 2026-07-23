// Module ID: 7429
// Function ID: 59710
// Name: _createForOfIteratorHelperLoose
// Dependencies: [3779, 3781, 3782, 1851, 3, 566, 2]
// Exports: useSubscriptionPlansLoaded

// Module 7429 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { ACTIVE_PREMIUM_SKUS } from "GuildFeatures";
import importDefaultResult from "GuildFeatures";

let require = arg1;
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
function getSubscriptionPlansLoaded() {
  let defaultPaymentSourceId;
  let obj;
  let obj2;
  let paymentSourceIds;
  let tmp9;
  let tmp = arg0;
  let tmp2 = arg1;
  if (arg0 === undefined) {
    const items = [];
    HermesBuiltin.arraySpread(ACTIVE_PREMIUM_SKUS, 0);
    tmp = items;
  }
  if (tmp2 === undefined) {
    const items1 = [_isNativeReflectConstruct, closure_3, closure_4];
    tmp2 = items1;
  }
  [tmp9, obj, obj2] = tmp2;
  ({ defaultPaymentSourceId, paymentSourceIds } = tmp9);
  const premiumTypeSubscription = obj2.getPremiumTypeSubscription();
  let paymentSourceId;
  if (null != premiumTypeSubscription) {
    paymentSourceId = premiumTypeSubscription.paymentSourceId;
  }
  if (null != paymentSourceId) {
    if (!obj.hasPaymentSourceForSKUIds(paymentSourceId, tmp)) {
      return false;
    }
  }
  if (null != defaultPaymentSourceId) {
    if (!obj.hasPaymentSourceForSKUIds(defaultPaymentSourceId, tmp)) {
      return false;
    }
  }
  const tmp13 = _createForOfIteratorHelperLoose(paymentSourceIds);
  let iter = tmp13();
  if (!iter.done) {
    while (obj.hasPaymentSourceForSKUIds(iter.value, tmp)) {
      let iter2 = tmp13();
      iter = iter2;
    }
    return false;
  }
  return obj.isLoadedForSKUs(tmp);
}
importDefaultResult = new importDefaultResult("useSubscriptionPlansLoaded");
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/billing/hooks/useSubscriptionPlansLoaded.tsx");

export const useSubscriptionPlansLoaded = function useSubscriptionPlansLoaded() {
  let tmp = arg0;
  if (arg0 === undefined) {
    let items = [];
    HermesBuiltin.arraySpread(ACTIVE_PREMIUM_SKUS, 0);
    tmp = items;
  }
  const require = tmp;
  const items1 = [_isNativeReflectConstruct, closure_3, closure_4];
  const items2 = [tmp];
  return require(566) /* initialize */.useStateFromStores(items1, () => {
    const items = [outer1_2, outer1_3, outer1_4];
    return outer1_8(closure_0, items);
  }, items2);
};
export { getSubscriptionPlansLoaded };
