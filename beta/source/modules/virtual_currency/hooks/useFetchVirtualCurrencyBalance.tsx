// Module ID: 9554
// Function ID: 9555
// Name: useFetchVirtualCurrencyBalance
// Dependencies: [19, 9555, 504, 9556, 2]
// Exports: useFetchVirtualCurrencyBalance

// Module 9554 (useFetchVirtualCurrencyBalance)
import react from "react" /* 19 */;
import VirtualCurrencyActionCreators from "VirtualCurrencyActionCreators" /* 9556 */;
import VirtualCurrencyStore from "VirtualCurrencyStore" /* 9555 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useEffect = react.useEffect;
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/useFetchVirtualCurrencyBalance.tsx");

export function useFetchVirtualCurrencyBalance(disableFetch) {
  let balance;
  _require = disableFetch;
  let obj = require("get initialized");
  const items = [VirtualCurrencyStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ balance: VirtualCurrencyStore.balance, isFetching: VirtualCurrencyStore.isFetchingBalance, error: VirtualCurrencyStore.fetchBalanceError }));
  balance = stateFromStoresObject.balance;
  const error = stateFromStoresObject.error;
  const items1 = [balance, error, ];
  disableFetch = undefined;
  const isFetching = stateFromStoresObject.isFetching;
  const tmp2 = error;
  if (disableFetch != null) {
    disableFetch = disableFetch.disableFetch;
  }
  items1[2] = disableFetch;
  tmp2(() => {
    disableFetch = undefined;
    if (disableFetch != null) {
      disableFetch = disableFetch.disableFetch;
    }
    if (!disableFetch) {
      disableFetch = null !== balance;
    }
    if (!disableFetch) {
      disableFetch = null !== error;
    }
    if (!disableFetch) {
      disableFetch = VirtualCurrencyStore.isFetchingBalance;
    }
    if (!disableFetch) {
      const obj = VirtualCurrencyActionCreators;
      const virtualCurrencyBalance = obj.fetchVirtualCurrencyBalance();
    }
  }, items1);
  return { balance, isFetching, error };
}
