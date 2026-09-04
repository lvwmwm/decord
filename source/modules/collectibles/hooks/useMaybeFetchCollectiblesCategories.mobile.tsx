// Module ID: 10665
// Function ID: 10666
// Name: useMaybeFetchCollectiblesCategories
// Dependencies: [4480, 586, 10666, 2]
// Exports: default

// Module 10665 (useMaybeFetchCollectiblesCategories)
import initialize from "initialize" /* 586 */;
import useMaybeFetchCollectiblesCategoriesShared from "useMaybeFetchCollectiblesCategoriesShared" /* 10666 */;
import closure_2 from "getUserAgnosticState" /* 4480 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx");

export default function useMaybeFetchCollectiblesCategories(paymentGateway) {
  paymentGateway = undefined;
  if (paymentGateway != null) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  let obj = initialize;
  const items = [closure_2];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ noCache: store.get("shop_disable_cache"), includeUnpublished: store.get("shop_include_unpublished") }));
  ({ noCache, includeUnpublished } = stateFromStoresObject);
  obj = { noCache, includeUnpublished, paymentGateway, countryCode: null, logPerf: null };
  let countryCode;
  if (paymentGateway != null) {
    countryCode = paymentGateway.countryCode;
  }
  obj[3] = countryCode;
  let logPerf;
  if (paymentGateway != null) {
    logPerf = paymentGateway.logPerf;
  }
  obj[4] = logPerf;
  let noOp;
  if (paymentGateway != null) {
    noOp = paymentGateway.noOp;
  }
  let skipFetch;
  if (paymentGateway != null) {
    skipFetch = paymentGateway.skipFetch;
  }
  return useMaybeFetchCollectiblesCategoriesShared.useMaybeFetchCollectiblesCategoriesShared(obj, noOp, arg1, skipFetch);
};
