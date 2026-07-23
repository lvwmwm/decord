// Module ID: 8723
// Function ID: 69009
// Name: useFetchVirtualCurrencyBalance
// Dependencies: [31, 8724, 566, 8725, 2]
// Exports: useFetchVirtualCurrencyBalance

// Module 8723 (useFetchVirtualCurrencyBalance)
import { useEffect } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("initialize").fileFinishedImporting("modules/virtual_currency/hooks/useFetchVirtualCurrencyBalance.tsx");

export const useFetchVirtualCurrencyBalance = function useFetchVirtualCurrencyBalance(disableFetch) {
  const _require = disableFetch;
  const items = [_isNativeReflectConstruct];
  const isFetching = _require(balance[2]).useStateFromStoresObject(items, () => ({ balance: outer1_3.balance, isFetching: outer1_3.isFetchingBalance, error: outer1_3.fetchBalanceError }));
  balance = isFetching.balance;
  const error = isFetching.error;
  const items1 = [balance, error, ];
  disableFetch = undefined;
  if (null != disableFetch) {
    disableFetch = disableFetch.disableFetch;
  }
  items1[2] = disableFetch;
  error(() => {
    let isFetchingBalance = null != disableFetch;
    if (isFetchingBalance) {
      isFetchingBalance = disableFetch.disableFetch;
    }
    if (!isFetchingBalance) {
      isFetchingBalance = null !== balance;
    }
    if (!isFetchingBalance) {
      isFetchingBalance = null !== error;
    }
    if (!isFetchingBalance) {
      isFetchingBalance = outer1_3.isFetchingBalance;
    }
    if (!isFetchingBalance) {
      const virtualCurrencyBalance = disableFetch(balance[3]).fetchVirtualCurrencyBalance();
      const obj = disableFetch(balance[3]);
    }
  }, items1);
  return { balance, isFetching: isFetching.isFetching, error };
};
