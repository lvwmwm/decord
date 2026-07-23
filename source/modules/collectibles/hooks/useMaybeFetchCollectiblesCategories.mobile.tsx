// Module ID: 7861
// Function ID: 62654
// Name: useMaybeFetchCollectiblesCategories
// Dependencies: [4129, 566, 7862, 2]
// Exports: default

// Module 7861 (useMaybeFetchCollectiblesCategories)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("useMaybeFetchCollectiblesCategoriesShared").fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx");

export default function useMaybeFetchCollectiblesCategories(paymentGateway) {
  let includeUnpublished;
  let noCache;
  paymentGateway = undefined;
  if (null != paymentGateway) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ noCache: outer1_2.get("shop_disable_cache"), includeUnpublished: outer1_2.get("shop_include_unpublished") }));
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
  return require(7862) /* useMaybeFetchCollectiblesCategoriesShared */.useMaybeFetchCollectiblesCategoriesShared(obj, noOp, arg1);
};
