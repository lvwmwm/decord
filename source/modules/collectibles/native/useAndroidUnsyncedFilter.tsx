// Module ID: 14385
// Function ID: 14386
// Name: useAndroidUnsyncedFilter
// Dependencies: [19, 4343, 5897, 589, 4020, 9465, 2]
// Exports: useAndroidUnsyncedFilter

// Module 14385 (useAndroidUnsyncedFilter)
import getUserAgnosticState from "getUserAgnosticState";
import updateProduct from "updateProduct";

require("noop").useCallback;
const result = require("updateProduct").fileFinishedImporting("modules/collectibles/native/useAndroidUnsyncedFilter.tsx");

export const useAndroidUnsyncedFilter = function useAndroidUnsyncedFilter() {
  const items = [updateProduct];
  stateFromStores = stateFromStores(stateFromStores1[3]).useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  const obj = stateFromStores(stateFromStores1[3]);
  const items1 = [getUserAgnosticState];
  stateFromStores1 = stateFromStores(stateFromStores1[3]).useStateFromStores(items1, () => getUserAgnosticState.get("bypass_google_sku_sync"));
  const items2 = [stateFromStores, stateFromStores1];
  return useCallback((arr) => {
    let found = arr;
    if (obj.isGooglePlayBillingSupported()) {
      found = arr;
      if (!stateFromStores1) {
        found = arr;
        if (!stateFromStores) {
          found = arr.filter((variants) => callback(table[5]).isGPlaySynced(variants));
        }
      }
    }
    return found;
  }, items2);
};
