// Module ID: 3779
// Function ID: 29282
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3780, 566, 686, 2]

// Module 3779 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _callSuper from "_callSuper";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let initialize = iterable;
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
      initialize = tmp;
    }
    let c1 = 0;
    return () => {
      if (dispatcher >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        dispatcher = tmp3 + 1;
        obj.value = length[+dispatcher];
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
  const merged = Object.assign(obj);
  obj[paymentSource.id] = paymentSource;
  let isDefault = paymentSource.isDefault;
  if (!isDefault) {
    const _Object = Object;
    isDefault = 1 === Object.keys(obj).length;
  }
  if (isDefault) {
    const id = paymentSource.id;
  }
}
let closure_6 = {};
let c7 = null;
let c8 = false;
let tmp2 = ((Store) => {
  class PaymentSourceStore {
    constructor() {
      self = this;
      tmp = PaymentSourceStore(this, PaymentSourceStore);
      obj = outer1_3(PaymentSourceStore);
      tmp2 = outer1_2;
      if (outer1_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(PaymentSourceStore, Store);
  let obj = {
    key: "paymentSources",
    get() {
      return outer1_6;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "paymentSourceIds",
    get() {
      return Object.keys(outer1_6);
    }
  };
  items[1] = obj;
  obj = {
    key: "defaultPaymentSourceId",
    get() {
      return outer1_7;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "defaultPaymentSource",
    get() {
      let tmp = null;
      if (null != outer1_7) {
        tmp = outer1_6[outer1_7];
      }
      return tmp;
    }
  };
  items[4] = {
    key: "hasFetchedPaymentSources",
    get() {
      return outer1_8;
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
      return outer1_6[arg0];
    }
  };
  return callback(PaymentSourceStore, items);
})(require("initialize").Store);
tmp2.displayName = "PaymentSourceStore";
tmp2 = new tmp2(require("dispatcher"), {
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
        let tmp3 = _callSuper;
        closure_6[value.id] = _callSuper.createFromServer(value);
        if (value.default) {
          id = value.id;
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
    let c8 = true;
  },
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function handlePaymentSourceRemove(id) {
    const obj = {};
    const merged = Object.assign(obj);
    delete tmp[tmp2];
    if (first === id.id) {
      const _Object = Object;
      const keys = Object.keys(obj);
      first = null;
      if (0 !== keys.length) {
        first = keys[0];
      }
    }
  },
  LOGOUT: function handleLogout() {
    let closure_6 = {};
    let c7 = null;
    let c8 = false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/billing/PaymentSourceStore.tsx");

export default tmp2;
