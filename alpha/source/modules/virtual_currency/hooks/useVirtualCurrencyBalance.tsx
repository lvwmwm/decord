// Module ID: 15015
// Function ID: 15016
// Name: useVirtualCurrencyBalance
// Dependencies: [9533, 504, 2]
// Exports: getVirtualCurrencyBalance, useHasEnoughVirtualCurrency, useVirtualCurrencyBalance

// Module 15015 (useVirtualCurrencyBalance)
import get_initialized from "get initialized" /* 504 */;
import VirtualCurrencyStore from "VirtualCurrencyStore" /* 9533 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/virtual_currency/hooks/useVirtualCurrencyBalance.tsx");

export function useVirtualCurrencyBalance() {
  let balance;
  const items = [VirtualCurrencyStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => balance.balance);
}
export function useHasEnoughVirtualCurrency(arg0) {
  let closure_0;
  _require = arg0;
  const items = [VirtualCurrencyStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let num = VirtualCurrencyStore.balance;
      if (num == null) {
        num = 0;
      }
      tmp2 = num >= tmp;
    }
    return tmp2;
  });
}
export function getVirtualCurrencyBalance() {
  return VirtualCurrencyStore.getCurrentBalance();
}
