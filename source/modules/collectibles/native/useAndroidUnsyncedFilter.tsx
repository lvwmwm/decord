// Module ID: 14027
// Function ID: 107313
// Name: useAndroidUnsyncedFilter
// Dependencies: [31, 4129, 5619, 566, 3789, 8760, 2]
// Exports: useAndroidUnsyncedFilter

// Module 14027 (useAndroidUnsyncedFilter)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

require("result").useCallback;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/useAndroidUnsyncedFilter.tsx");

export const useAndroidUnsyncedFilter = function useAndroidUnsyncedFilter() {
  const items = [closure_4];
  stateFromStores = stateFromStores(stateFromStores1[3]).useStateFromStores(items, () => outer1_4.isFetchingGoogleSkus());
  const obj = stateFromStores(stateFromStores1[3]);
  const items1 = [_isNativeReflectConstruct];
  stateFromStores1 = stateFromStores(stateFromStores1[3]).useStateFromStores(items1, () => outer1_3.get("bypass_google_sku_sync"));
  const items2 = [stateFromStores, stateFromStores1];
  return useCallback((arr) => {
    let found = arr;
    if (obj.isGooglePlayBillingSupported()) {
      found = arr;
      if (!stateFromStores1) {
        found = arr;
        if (!stateFromStores) {
          found = arr.filter((variants) => stateFromStores(stateFromStores1[5]).isGPlaySynced(variants));
        }
      }
    }
    return found;
  }, items2);
};
