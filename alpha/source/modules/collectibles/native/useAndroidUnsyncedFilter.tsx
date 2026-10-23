// Module ID: 16336
// Function ID: 16337
// Name: useAndroidUnsyncedFilter
// Dependencies: [19, 5235, 7522, 9465, 504, 2065, 9447, 2]
// Exports: useAndroidUnsyncedFilter

// Module 16336 (useAndroidUnsyncedFilter)
import react from "react" /* 19 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2065 */;
import DevSettingsStore from "DevSettingsStore" /* 5235 */;
import IAPStore from "IAPStore" /* 7522 */;
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
