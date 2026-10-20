// Module ID: 16168
// Function ID: 16169
// Name: useAndroidUnsyncedFilter
// Dependencies: [19, 5198, 7473, 9396, 504, 2066, 9378, 2]
// Exports: useAndroidUnsyncedFilter

// Module 16168 (useAndroidUnsyncedFilter)
import react from "react" /* 19 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2066 */;
import DevSettingsStore from "DevSettingsStore" /* 5198 */;
import IAPStore from "IAPStore" /* 7473 */;
import size from "module_2" /* 2 */;

react.useCallback;
const result = size.fileFinishedImporting("modules/collectibles/native/useAndroidUnsyncedFilter.tsx");

export const useAndroidUnsyncedFilter = function useAndroidUnsyncedFilter() {
  let isInImprovedMobileShopLoading;
  let stateFromStores;
  let obj = isInImprovedMobileShopLoading(stateFromStores[3]);
  isInImprovedMobileShopLoading = obj.useIsInImprovedMobileShopLoading();
  const items = [IAPStore];
  const items1 = [isInImprovedMobileShopLoading];
  const obj2 = isInImprovedMobileShopLoading(stateFromStores[4]);
  stateFromStores = obj2.useStateFromStores(items, () => {
    const isFetchingGoogleSkusResult = !isInImprovedMobileShopLoading && IAPStore.isFetchingGoogleSkus();
    return isFetchingGoogleSkusResult;
  }, items1);
  const items2 = [IAPStore];
  const items3 = [isInImprovedMobileShopLoading];
  const obj3 = isInImprovedMobileShopLoading(stateFromStores[4]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    let products = null;
    if (isInImprovedMobileShopLoading) {
      products = IAPStore.getProducts();
    }
    return products;
  }, items3);
  const items4 = [DevSettingsStore];
  const obj4 = isInImprovedMobileShopLoading(stateFromStores[4]);
  const stateFromStores2 = obj4.useStateFromStores(items4, () => DevSettingsStore.get("bypass_google_sku_sync"));
  const items5 = [stateFromStores, stateFromStores2, stateFromStores1];
  return stateFromStores2((arr) => {
    let obj = BillingPlatformUtils;
    let found = arr;
    if (obj.isGooglePlayBillingSupported()) {
      found = arr;
      if (!stateFromStores2) {
        found = arr;
        if (!stateFromStores) {
          found = arr.filter((item) => {
            const obj = isInImprovedMobileShopLoading(stateFromStores[6]);
            return obj.isGPlaySynced(item);
          });
        }
      }
    }
    return found;
  }, items5);
};
