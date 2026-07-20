// Module ID: 3777
// Function ID: 29272
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 3777 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
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
      closure_0 = tmp;
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
function handlePaymentSourceUpdate(paymentSource) {
  paymentSource = paymentSource.paymentSource;
  const obj = {};
  const merged = Object.assign(closure_6);
  obj[paymentSource.id] = paymentSource;
  closure_6 = obj;
  let isDefault = paymentSource.isDefault;
  if (!isDefault) {
    const _Object = Object;
    isDefault = 1 === Object.keys(closure_6).length;
  }
  if (isDefault) {
    const id = paymentSource.id;
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = {};
let closure_7 = null;
let closure_8 = false;
let tmp2 = (Store) => {
  class PaymentSourceStore {
    constructor() {
      self = this;
      tmp = PaymentSourceStore(this, PaymentSourceStore);
      obj = closure_3(PaymentSourceStore);
      tmp2 = closure_2;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = PaymentSourceStore;
  callback2(PaymentSourceStore, Store);
  let obj = {
    key: "paymentSources",
    get() {
      return closure_6;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "paymentSourceIds",
    get() {
      return Object.keys(closure_6);
    }
  };
  items[1] = obj;
  obj = {
    key: "defaultPaymentSourceId",
    get() {
      return closure_7;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "defaultPaymentSource",
    get() {
      let tmp = null;
      if (null != closure_7) {
        tmp = closure_6[closure_7];
      }
      return tmp;
    }
  };
  items[4] = {
    key: "hasFetchedPaymentSources",
    get() {
      return closure_8;
    }
  };
  items[5] = {
    key: "getDefaultBillingCountryCode",
    value() {
      const defaultPaymentSource = this.defaultPaymentSource;
      let paymentMethodCountry = null;
      if (null != defaultPaymentSource) {
        paymentMethodCountry = defaultPaymentSource.paymentMethodCountry;
      }
      return paymentMethodCountry;
    }
  };
  items[6] = {
    key: "getPaymentSource",
    value(arg0) {
      return closure_6[arg0];
    }
  };
  return callback(PaymentSourceStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "PaymentSourceStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: handlePaymentSourceUpdate,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: handlePaymentSourceUpdate,
  BILLING_PAYMENT_SOURCE_FETCH_SUCCESS: handlePaymentSourceUpdate,
  BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: function handlePaymentSourceFetch(paymentSources) {
    let iter2;
    paymentSources = paymentSources.paymentSources;
    let closure_6 = {};
    let id = null;
    const tmp = _createForOfIteratorHelperLoose(paymentSources);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = closure_6;
        let tmp3 = closure_5;
        closure_6[value.id] = closure_5.createFromServer(value);
        if (value.default) {
          closure_7 = value.id;
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    let tmp4 = null == id;
    if (tmp4) {
      tmp4 = paymentSources.length > 0;
    }
    if (tmp4) {
      id = paymentSources[0].id;
    }
    let closure_8 = true;
  },
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function handlePaymentSourceRemove(id) {
    const merged = Object.assign(closure_6);
    closure_6 = {};
    delete r0[r2];
    if (closure_7 === id.id) {
      const _Object = Object;
      const keys = Object.keys(closure_6);
      let first = null;
      if (0 !== keys.length) {
        first = keys[0];
      }
      closure_7 = first;
    }
  },
  LOGOUT: function handleLogout() {
    let closure_6 = {};
    let closure_7 = null;
    let closure_8 = false;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("stores/billing/PaymentSourceStore.tsx");

export default tmp2;
