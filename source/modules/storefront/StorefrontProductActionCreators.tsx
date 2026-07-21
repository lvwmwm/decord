// Module ID: 13851
// Function ID: 104759
// Name: _maybeFetchProductsWithSkus
// Dependencies: []
// Exports: maybeFetchProductsBySkuIds, maybeFetchProductsWithSkus

// Module 13851 (_maybeFetchProductsWithSkus)
function _maybeFetchProductsWithSkus() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _maybeFetchProductsWithSkus = obj;
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
        return Date.now() - fetchedAtForSku > "error" === fetchStateForSku ? closure_9 : closure_8;
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
  const _maybeFetchProductsBySkuIds = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const Endpoints = arg1(dependencyMap[4]).Endpoints;
let closure_8 = 12 * importDefault(dependencyMap[5]).Millis.HOUR;
let closure_9 = 10 * importDefault(dependencyMap[5]).Millis.MINUTE;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/storefront/StorefrontProductActionCreators.tsx");

export const maybeFetchProductsWithSkus = function maybeFetchProductsWithSkus() {
  return _maybeFetchProductsWithSkus(...arguments);
};
export { shouldFetchProductBySku };
export const maybeFetchProductsBySkuIds = function maybeFetchProductsBySkuIds(arg0) {
  return _maybeFetchProductsBySkuIds(...arguments);
};
