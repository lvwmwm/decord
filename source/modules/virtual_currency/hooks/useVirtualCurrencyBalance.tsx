// Module ID: 11823
// Function ID: 91659
// Name: useVirtualCurrencyBalance
// Dependencies: []
// Exports: getVirtualCurrencyBalance, useHasEnoughVirtualCurrency, useVirtualCurrencyBalance

// Module 11823 (useVirtualCurrencyBalance)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/virtual_currency/hooks/useVirtualCurrencyBalance.tsx");

export const useVirtualCurrencyBalance = function useVirtualCurrencyBalance() {
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => balance.balance);
};
export const useHasEnoughVirtualCurrency = function useHasEnoughVirtualCurrency(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => {
    let tmp = null != arg0;
    if (tmp) {
      const balance = balance.balance;
      let num = 0;
      if (null != balance) {
        num = balance;
      }
      tmp = num >= arg0;
    }
    return tmp;
  });
};
export const getVirtualCurrencyBalance = function getVirtualCurrencyBalance() {
  return currentBalance.getCurrentBalance();
};
