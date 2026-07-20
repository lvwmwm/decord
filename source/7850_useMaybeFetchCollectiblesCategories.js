// Module ID: 7850
// Function ID: 62582
// Name: useMaybeFetchCollectiblesCategories
// Dependencies: []
// Exports: default

// Module 7850 (useMaybeFetchCollectiblesCategories)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx");

export default function useMaybeFetchCollectiblesCategories(paymentGateway) {
  let includeUnpublished;
  let noCache;
  paymentGateway = undefined;
  if (null != paymentGateway) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  let obj = arg1(dependencyMap[1]);
  const items = [closure_2];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ noCache: store.get("shop_disable_cache"), includeUnpublished: store.get("shop_include_unpublished") }));
  ({ noCache, includeUnpublished } = stateFromStoresObject);
  obj = { noCache, includeUnpublished, paymentGateway };
  let countryCode;
  if (null != paymentGateway) {
    countryCode = paymentGateway.countryCode;
  }
  obj.countryCode = countryCode;
  let logPerf;
  if (null != paymentGateway) {
    logPerf = paymentGateway.logPerf;
  }
  obj.logPerf = logPerf;
  let noOp;
  if (null != paymentGateway) {
    noOp = paymentGateway.noOp;
  }
  return arg1(dependencyMap[2]).useMaybeFetchCollectiblesCategoriesShared(obj, noOp, arg1);
};
