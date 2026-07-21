// Module ID: 13856
// Function ID: 104794
// Name: useAndroidUnsyncedFilter
// Dependencies: [0, 0, 0, 0, 0, 0, 0]
// Exports: useAndroidUnsyncedFilter

// Module 13856 (useAndroidUnsyncedFilter)
import closure_3 from "result";
import closure_4 from "result";
import result from "result";

require("result").useCallback;
result = result.fileFinishedImporting("modules/collectibles/native/useAndroidUnsyncedFilter.tsx");

export const useAndroidUnsyncedFilter = function useAndroidUnsyncedFilter() {
  const items = [closure_4];
  const stateFromStores = require(dependencyMap[3]).useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  const require = stateFromStores;
  const obj = require(dependencyMap[3]);
  const items1 = [closure_3];
  const stateFromStores1 = require(dependencyMap[3]).useStateFromStores(items1, () => closure_3.get("bypass_google_sku_sync"));
  const dependencyMap = stateFromStores1;
  const items2 = [stateFromStores, stateFromStores1];
  return useCallback((arr) => {
    let found = arr;
    if (obj.isGooglePlayBillingSupported()) {
      found = arr;
      if (!stateFromStores1) {
        found = arr;
        if (!stateFromStores) {
          found = arr.filter((variants) => callback(closure_1[5]).isGPlaySynced(variants));
        }
      }
    }
    return found;
  }, items2);
};
