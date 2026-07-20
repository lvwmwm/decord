// Module ID: 13292
// Function ID: 101016
// Name: fetchStoreListingsForApplications
// Dependencies: []
// Exports: fetchAllStoreListingsForApplication, fetchStoreListingForSku, fetchStoreListingsForApplications

// Module 13292 (fetchStoreListingsForApplications)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const Endpoints = arg1(dependencyMap[3]).Endpoints;
const result = arg1(dependencyMap[8]).fileFinishedImporting("actions/StoreListingActionCreators.tsx");

export const fetchStoreListingsForApplications = function fetchStoreListingsForApplications(arr) {
  const found = arr.filter((applicationId) => {
    const application = application.getApplication(applicationId);
    if (null == application) {
      return true;
    } else {
      const destinationSkuId = application.destinationSkuId;
      let tmp2 = null == destinationSkuId;
      if (!tmp2) {
        tmp2 = null == forSKU.getForSKU(destinationSkuId);
      }
      return tmp2;
    }
  });
  if (0 === found.length) {
    let resolved = Promise.resolve();
  } else {
    let obj = arg1(dependencyMap[4]);
    obj = { url: Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATIONS };
    obj = { application_ids: found };
    obj.query = obj;
    obj.oldFormErrors = true;
    obj.rejectWithError = arg1(dependencyMap[5]).rejectWithMigratedError();
    const result = obj.httpGetWithCountryCodeQuery(obj);
    resolved = result.then((body) => {
      let obj = callback(closure_2[6]);
      obj = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: body.body };
      obj.dispatch(obj);
    });
    const obj4 = arg1(dependencyMap[5]);
  }
  return resolved;
};
export const fetchAllStoreListingsForApplication = function fetchAllStoreListingsForApplication(id) {
  let obj = arg1(dependencyMap[4]);
  obj = { url: Endpoints.STORE_PUBLISHED_LISTINGS_SKUS, query: obj, oldFormErrors: true };
  obj = { application_id: id, rejectWithError: arg1(dependencyMap[5]).rejectWithMigratedError() };
  const result = obj.httpGetWithCountryCodeQuery(obj);
  return result.then((body) => {
    let obj = callback(closure_2[6]);
    obj = {
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: body.map((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["published"] = true;
        return obj;
      })
    };
    body = body.body;
    obj.dispatch(obj);
    return body.body;
  });
};
export const fetchStoreListingForSku = function fetchStoreListingForSku(skuId) {
  const arg1 = skuId;
  const value = closure_4.get(skuId);
  let result = null != value;
  if (result) {
    let obj = arg1(dependencyMap[7]);
    result = obj.isTestModeForApplication(value.applicationId);
  }
  const importDefault = result;
  obj = { type: "STORE_LISTINGS_FETCH_START", skuId };
  importDefault(dependencyMap[6]).dispatch(obj);
  const obj2 = importDefault(dependencyMap[6]);
  obj = {};
  if (result) {
    let STORE_LISTINGS_SKUResult = obj6.STORE_LISTINGS_SKU(skuId);
  } else {
    STORE_LISTINGS_SKUResult = obj6.STORE_PUBLISHED_LISTINGS_SKU(skuId);
  }
  obj.url = STORE_LISTINGS_SKUResult;
  const obj4 = arg1(dependencyMap[4]);
  obj.rejectWithError = arg1(dependencyMap[5]).rejectWithMigratedError();
  const result1 = obj4.httpGetWithCountryCodeQuery(obj);
  const obj7 = arg1(dependencyMap[5]);
  return result1.then((body) => {
    const dispatch = result(closure_2[6]).dispatch;
    const obj = {};
    if (result) {
      obj.type = "STORE_LISTINGS_FETCH_SUCCESS";
      obj.storeListings = body.body;
      dispatch(obj);
    } else {
      obj.type = "STORE_LISTING_FETCH_SUCCESS";
      obj.storeListing = body.body;
      dispatch(obj);
    }
  }).catch(() => {
    let obj = result(closure_2[6]);
    obj = { type: "SKU_FETCH_FAIL", skuId: arg0 };
    obj.dispatch(obj);
  });
};
