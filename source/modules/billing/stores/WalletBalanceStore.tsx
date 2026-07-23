// Module ID: 5800
// Function ID: 49583
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 5800 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import closure_1 from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let closure_5 = {};
let set = new Set();
let tmp3 = ((Store) => {
  class WalletBalanceStore {
    constructor() {
      self = this;
      tmp = WalletBalanceStore(this, WalletBalanceStore);
      obj = outer1_3(WalletBalanceStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
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
  callback2(WalletBalanceStore, Store);
  let obj = {
    key: "getBalance",
    value(arg0) {
      let tmp2 = null;
      if (null != outer1_5[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getIsFetching",
    value(arg0) {
      return outer1_6.has(arg0);
    }
  };
  items[1] = obj;
  return callback(WalletBalanceStore, items);
})(require("initialize").Store);
tmp3.displayName = "WalletBalanceStore";
tmp3 = new tmp3(require("dispatcher"), {
  BILLING_WALLET_BALANCE_FETCH_START: function handleFetchStart(paymentSourceId) {
    set = new Set(set);
    set.add(paymentSourceId.paymentSourceId);
  },
  BILLING_WALLET_BALANCE_FETCH_SUCCESS: function handleFetchSuccess(currency) {
    set = new Set(set);
    set.delete(currency.paymentSourceId);
    const obj = {};
    const merged = Object.assign(obj);
    obj[currency.paymentSourceId] = { currency: currency.currency, amount: currency.amount };
  },
  BILLING_WALLET_BALANCE_FETCH_FAIL: function handleFetchFail(paymentSourceId) {
    set = new Set(set);
    set.delete(paymentSourceId.paymentSourceId);
  },
  WALLET_BALANCE_UPDATE: function handleBalanceUpdate(currency) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[currency.paymentSourceId] = { currency: currency.currency, amount: currency.balance };
  },
  LOGOUT: function reset() {
    let closure_5 = {};
    const set = new Set();
  }
});
let result = set.fileFinishedImporting("modules/billing/stores/WalletBalanceStore.tsx");

export default tmp3;
