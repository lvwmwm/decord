// Module ID: 14022
// Function ID: 107278
// Name: _maybeFetchProductsWithSkus
// Dependencies: [5, 1921, 14018, 6795, 653, 664, 686, 4369, 4030, 2]
// Exports: maybeFetchProductsBySkuIds, maybeFetchProductsWithSkus

// Module 14022 (_maybeFetchProductsWithSkus)
import set from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import StorefrontProductRecord from "StorefrontProductRecord";
import { Endpoints } from "ME";

const require = arg1;
function _maybeFetchProductsWithSkus() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function shouldFetchProductBySku(arg0) {
  if (Boolean(arg0)) {
    const fetchStateForSku = store.getFetchStateForSku(arg0);
    if ("loading" === fetchStateForSku) {
      return false;
    } else {
      const fetchedAtForSku = store.getFetchedAtForSku(arg0);
      if (null != fetchedAtForSku) {
        const _Date = Date;
        return Date.now() - fetchedAtForSku > ("error" === fetchStateForSku ? closure_9 : closure_8);
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function _maybeFetchProductsBySkuIds() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let closure_8 = 12 * require("set").Millis.HOUR;
let closure_9 = 10 * require("set").Millis.MINUTE;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/storefront/StorefrontProductActionCreators.tsx");

export const maybeFetchProductsWithSkus = function maybeFetchProductsWithSkus() {
  return _maybeFetchProductsWithSkus(...arguments);
};
export { shouldFetchProductBySku };
export const maybeFetchProductsBySkuIds = function maybeFetchProductsBySkuIds(arg0) {
  return _maybeFetchProductsBySkuIds(...arguments);
};
