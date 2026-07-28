// Module ID: 14083
// Function ID: 107618
// Name: useAndroidUnsyncedFilter
// Dependencies: [31, 4164, 5654, 566, 3824, 8692, 2]
// Exports: useAndroidUnsyncedFilter

// Module 14083 (useAndroidUnsyncedFilter)
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
