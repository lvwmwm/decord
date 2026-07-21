// Module ID: 5795
// Function ID: 49543
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5795 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = {};
const set = new Set();
let tmp3 = (Store) => {
  class WalletBalanceStore {
    constructor() {
      self = this;
      tmp = WalletBalanceStore(this, WalletBalanceStore);
      obj = closure_3(WalletBalanceStore);
      tmp2 = closure_2;
      if (closure_7()) {
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
  let closure_0 = WalletBalanceStore;
  callback2(WalletBalanceStore, Store);
  let obj = {
    key: "getBalance",
    value(arg0) {
      let tmp2 = null;
      if (null != closure_5[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getIsFetching",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[1] = obj;
  return callback(WalletBalanceStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp3.displayName = "WalletBalanceStore";
tmp3 = new tmp3(importDefault(dependencyMap[6]), {
  BILLING_WALLET_BALANCE_FETCH_START: function handleFetchStart(paymentSourceId) {
    const set = new Set(set);
    set.add(paymentSourceId.paymentSourceId);
  },
  BILLING_WALLET_BALANCE_FETCH_SUCCESS: function handleFetchSuccess(currency) {
    const set = new Set(set);
    set.delete(currency.paymentSourceId);
    const obj = {};
    const merged = Object.assign(closure_5);
    obj[currency.paymentSourceId] = { currency: currency.currency, amount: currency.amount };
    closure_5 = obj;
  },
  BILLING_WALLET_BALANCE_FETCH_FAIL: function handleFetchFail(paymentSourceId) {
    const set = new Set(set);
    set.delete(paymentSourceId.paymentSourceId);
  },
  WALLET_BALANCE_UPDATE: function handleBalanceUpdate(currency) {
    const obj = {};
    const merged = Object.assign(closure_5);
    obj[currency.paymentSourceId] = { currency: currency.currency, amount: currency.balance };
    closure_5 = obj;
  },
  LOGOUT: function reset() {
    let closure_5 = {};
    const set = new Set();
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/billing/stores/WalletBalanceStore.tsx");

export default tmp3;
