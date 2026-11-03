// Module ID: 9690
// Function ID: 9691
// Name: useFetchVirtualCurrencyTotalRedeemed
// Dependencies: [19, 9687, 504, 9688, 2]
// Exports: useFetchVirtualCurrencyTotalRedeemed

// Module 9690 (useFetchVirtualCurrencyTotalRedeemed)
import react from "react" /* 19 */;
import VirtualCurrencyActionCreators from "VirtualCurrencyActionCreators" /* 9688 */;
import VirtualCurrencyStore from "VirtualCurrencyStore" /* 9687 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useEffect = react.useEffect;
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/useFetchVirtualCurrencyTotalRedeemed.tsx");

export function useFetchVirtualCurrencyTotalRedeemed(disableFetch) {
  let error;
  let totalRedeemed;
  _require = disableFetch;
  let obj = require("get initialized");
  const items = [error];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ totalRedeemed: error.totalRedeemed, isFetching: error.isFetchingTotalRedeemed, error: error.fetchTotalRedeemedError }));
  totalRedeemed = stateFromStoresObject.totalRedeemed;
  const isFetching = stateFromStoresObject.isFetching;
  error = stateFromStoresObject.error;
  const items1 = [totalRedeemed, isFetching, error, ];
  disableFetch = undefined;
  let tmp2 = isFetching;
  if (disableFetch != null) {
    disableFetch = disableFetch.disableFetch;
  }
  items1[3] = disableFetch;
  tmp2(() => {
    disableFetch = undefined;
    if (disableFetch != null) {
      disableFetch = disableFetch.disableFetch;
    }
    if (true !== disableFetch) {
      const tmp2 = isFetching || null != totalRedeemed || null != error;
      if (!tmp2) {
        const obj = VirtualCurrencyActionCreators;
        const virtualCurrencyTotalRedeemed = obj.fetchVirtualCurrencyTotalRedeemed();
      }
    }
  }, items1);
  return { totalRedeemed, isFetching, error };
}
