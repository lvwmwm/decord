// Module ID: 8715
// Function ID: 68956
// Name: useFetchVirtualCurrencyBalance
// Dependencies: []
// Exports: useFetchVirtualCurrencyBalance

// Module 8715 (useFetchVirtualCurrencyBalance)
const useEffect = require(dependencyMap[0]).useEffect;
let closure_3 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/virtual_currency/hooks/useFetchVirtualCurrencyBalance.tsx");

export const useFetchVirtualCurrencyBalance = function useFetchVirtualCurrencyBalance(disableFetch) {
  const require = disableFetch;
  const items = [closure_3];
  const isFetching = require(dependencyMap[2]).useStateFromStoresObject(items, () => ({ balance: closure_3.balance, isFetching: closure_3.isFetchingBalance, error: closure_3.fetchBalanceError }));
  const balance = isFetching.balance;
  const dependencyMap = balance;
  const error = isFetching.error;
  const useEffect = error;
  const items1 = [balance, error, ];
  disableFetch = undefined;
  if (null != disableFetch) {
    disableFetch = disableFetch.disableFetch;
  }
  items1[2] = disableFetch;
  useEffect(() => {
    let isFetchingBalance = null != arg0;
    if (isFetchingBalance) {
      isFetchingBalance = arg0.disableFetch;
    }
    if (!isFetchingBalance) {
      isFetchingBalance = null !== balance;
    }
    if (!isFetchingBalance) {
      isFetchingBalance = null !== error;
    }
    if (!isFetchingBalance) {
      isFetchingBalance = closure_3.isFetchingBalance;
    }
    if (!isFetchingBalance) {
      const virtualCurrencyBalance = arg0(balance[3]).fetchVirtualCurrencyBalance();
      const obj = arg0(balance[3]);
    }
  }, items1);
  return { balance, isFetching: isFetching.isFetching, error };
};
