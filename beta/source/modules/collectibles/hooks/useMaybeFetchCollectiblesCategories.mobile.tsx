// Module ID: 10200
// Function ID: 10201
// Name: useMaybeFetchCollectiblesCategories
// Dependencies: [4835, 504, 10201, 2]
// Exports: default

// Module 10200 (useMaybeFetchCollectiblesCategories)
import get_initialized from "get initialized" /* 504 */;
import useMaybeFetchCollectiblesCategoriesShared2 from "useMaybeFetchCollectiblesCategoriesShared" /* 10201 */;
import DevSettingsStore from "DevSettingsStore" /* 4835 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx");

export default function useMaybeFetchCollectiblesCategories(paymentGateway, arg1) {
  let countryCode;
  let includeUnpublished;
  let logPerf;
  let noCache;
  paymentGateway = undefined;
  if (paymentGateway != null) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  let obj = get_initialized;
  const items = [DevSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { noCache: DevSettingsStore.get("shop_disable_cache"), includeUnpublished: DevSettingsStore.get("shop_include_unpublished") };
    return obj;
  });
  ({ noCache, includeUnpublished } = stateFromStoresObject);
  const obj2 = { noCache, includeUnpublished, paymentGateway, countryCode, logPerf };
  countryCode = undefined;
  const useMaybeFetchCollectiblesCategoriesShared = useMaybeFetchCollectiblesCategoriesShared2.useMaybeFetchCollectiblesCategoriesShared;
  useMaybeFetchCollectiblesCategoriesShared2;
  if (paymentGateway != null) {
    countryCode = paymentGateway.countryCode;
  }
  logPerf = undefined;
  if (paymentGateway != null) {
    logPerf = paymentGateway.logPerf;
  }
  let noOp;
  if (paymentGateway != null) {
    noOp = paymentGateway.noOp;
  }
  let skipFetch;
  if (paymentGateway != null) {
    skipFetch = paymentGateway.skipFetch;
  }
  return useMaybeFetchCollectiblesCategoriesShared(obj2, noOp, arg1, skipFetch);
};
