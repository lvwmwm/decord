// Module ID: 7088
// Function ID: 7089
// Name: WalletBalanceStore
// Dependencies: [504, 584, 2]

// Module 7088 (WalletBalanceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_0;

const React = {};
let set = new Set();
let set1 = new Set();
const Store = get_initializedDefault.Store;
class WalletBalanceStore extends Store {
  getBalance(arg0) {
    let tmp = closure_0[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
  getIsFetching(arg0) {
    return set.has(arg0);
  }
  hasSettled(arg0) {
    return set1.has(arg0);
  }
}
const prototype = WalletBalanceStore.prototype;
WalletBalanceStore.displayName = "WalletBalanceStore";
let obj = {
  BILLING_WALLET_BALANCE_FETCH_START: function handleFetchStart(paymentSourceId) {
    set = new Set(set);
    set.add(paymentSourceId.paymentSourceId);
  },
  BILLING_WALLET_BALANCE_FETCH_SUCCESS: function handleFetchSuccess(currency) {
    const paymentSourceId = currency.paymentSourceId;
    set = new Set(set);
    set.delete(paymentSourceId);
    set1 = new Set(set1);
    set1.add(paymentSourceId);
    const obj = {};
    const merged = Object.assign(closure_0);
    obj[currency.paymentSourceId] = { currency: currency.currency, amount: currency.amount };
    closure_0 = obj;
  },
  BILLING_WALLET_BALANCE_FETCH_FAIL: function handleFetchFail(paymentSourceId) {
    paymentSourceId = paymentSourceId.paymentSourceId;
    set = new Set(set);
    set.delete(paymentSourceId);
    set1 = new Set(set1);
    set1.add(paymentSourceId);
  },
  WALLET_BALANCE_UPDATE: function handleBalanceUpdate(currency) {
    const obj = {};
    const merged = Object.assign(closure_0);
    obj[currency.paymentSourceId] = { currency: currency.currency, amount: currency.balance };
    closure_0 = obj;
  },
  LOGOUT: function reset() {
    closure_0 = {};
    set = new Set();
    set1 = new Set();
  }
};
const walletBalanceStore = new WalletBalanceStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/billing/stores/WalletBalanceStore.tsx");

export default walletBalanceStore;
