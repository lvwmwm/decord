// Module ID: 14606
// Function ID: 14607
// Name: useAndroidUnsyncedFilter
// Dependencies: [19, 4835, 6658, 504, 4501, 8313, 2]
// Exports: useAndroidUnsyncedFilter

// Module 14606 (useAndroidUnsyncedFilter)
import react from "react" /* 19 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4501 */;
import DevSettingsStore from "DevSettingsStore" /* 4835 */;
import IAPStore from "IAPStore" /* 6658 */;
import size from "module_2" /* 2 */;

const useCallback = react.useCallback;
const result = size.fileFinishedImporting("modules/collectibles/native/useAndroidUnsyncedFilter.tsx");

export const useAndroidUnsyncedFilter = function useAndroidUnsyncedFilter() {
  let fetchingGoogleSkus;
  let stateFromStores;
  let stateFromStores1;
  let obj = stateFromStores(stateFromStores1[3]);
  const items = [IAPStore];
  stateFromStores = obj.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  const items1 = [DevSettingsStore];
  const obj2 = stateFromStores(stateFromStores1[3]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => DevSettingsStore.get("bypass_google_sku_sync"));
  const items2 = [stateFromStores, stateFromStores1];
  return useCallback((arr) => {
    let obj = BillingPlatformUtils;
    let found = arr;
    if (obj.isGooglePlayBillingSupported()) {
      found = arr;
      if (!stateFromStores1) {
        found = arr;
        if (!stateFromStores) {
          found = arr.filter((item) => {
            const obj = stateFromStores(stateFromStores1[5]);
            return obj.isGPlaySynced(item);
          });
        }
      }
    }
    return found;
  }, items2);
};
