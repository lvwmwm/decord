// Module ID: 7423
// Function ID: 59653
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useSubscriptionPlansLoaded

// Module 7423 (_createForOfIteratorHelperLoose)
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
    const items1 = [closure_2, closure_3, closure_4];
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const ACTIVE_PREMIUM_SKUS = arg1(dependencyMap[3]).ACTIVE_PREMIUM_SKUS;
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult("useSubscriptionPlansLoaded");
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/billing/hooks/useSubscriptionPlansLoaded.tsx");

export const useSubscriptionPlansLoaded = function useSubscriptionPlansLoaded() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [];
    HermesBuiltin.arraySpread(ACTIVE_PREMIUM_SKUS, 0);
    tmp = items;
  }
  const arg1 = tmp;
  const items1 = [closure_2, closure_3, closure_4];
  const items2 = [tmp];
  return arg1(dependencyMap[5]).useStateFromStores(items1, () => {
    const items = [closure_2, closure_3, closure_4];
    return callback(tmp, items);
  }, items2);
};
export { getSubscriptionPlansLoaded };
