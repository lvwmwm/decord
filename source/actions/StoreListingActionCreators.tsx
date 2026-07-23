// Module ID: 13422
// Function ID: 103250
// Name: fetchStoreListingsForApplications
// Dependencies: [4167, 4175, 13423, 653, 4369, 507, 686, 7369, 2]
// Exports: fetchAllStoreListingsForApplication, fetchStoreListingForSku, fetchStoreListingsForApplications

// Module 13422 (fetchStoreListingsForApplications)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/StoreListingActionCreators.tsx");

export const fetchStoreListingsForApplications = function fetchStoreListingsForApplications(arr) {
  const found = arr.filter((applicationId) => {
    const application = outer1_3.getApplication(applicationId);
    if (null == application) {
      return true;
    } else {
      const destinationSkuId = application.destinationSkuId;
      let tmp2 = null == destinationSkuId;
      if (!tmp2) {
        tmp2 = null == outer1_5.getForSKU(destinationSkuId);
      }
      return tmp2;
    }
  });
  if (0 === found.length) {
    let resolved = Promise.resolve();
  } else {
    let obj = require(4369) /* _httpGetWithCountryCodeQuery */;
    obj = { url: Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATIONS };
    obj = { application_ids: found };
    obj.query = obj;
    obj.oldFormErrors = true;
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    const result = obj.httpGetWithCountryCodeQuery(obj);
    resolved = result.then((body) => {
      let obj = outer1_1(outer1_2[6]);
      obj = { type: "STORE_LISTINGS_FETCH_SUCCESS", storeListings: body.body };
      obj.dispatch(obj);
    });
    const obj4 = require(507) /* _isNativeReflectConstruct */;
  }
  return resolved;
};
export const fetchAllStoreListingsForApplication = function fetchAllStoreListingsForApplication(id) {
  let obj = require(4369) /* _httpGetWithCountryCodeQuery */;
  obj = { url: Endpoints.STORE_PUBLISHED_LISTINGS_SKUS, query: obj, oldFormErrors: true };
  obj = { application_id: id, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  const result = obj.httpGetWithCountryCodeQuery(obj);
  return result.then((body) => {
    let obj = outer1_1(outer1_2[6]);
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
  const _require = skuId;
  const value = closure_4.get(skuId);
  let result = null != value;
  if (result) {
    let obj = _require(7369);
    result = obj.isTestModeForApplication(value.applicationId);
  }
  const importDefault = result;
  obj = { type: "STORE_LISTINGS_FETCH_START", skuId };
  importDefault(686).dispatch(obj);
  const obj2 = importDefault(686);
  obj = {};
  if (result) {
    let STORE_LISTINGS_SKUResult = obj6.STORE_LISTINGS_SKU(skuId);
  } else {
    STORE_LISTINGS_SKUResult = obj6.STORE_PUBLISHED_LISTINGS_SKU(skuId);
  }
  obj.url = STORE_LISTINGS_SKUResult;
  const obj4 = _require(4369);
  obj.rejectWithError = _require(507).rejectWithMigratedError();
  const result1 = obj4.httpGetWithCountryCodeQuery(obj);
  const obj7 = _require(507);
  return result1.then((body) => {
    const dispatch = result(outer1_2[6]).dispatch;
    const obj = {};
    if (closure_1) {
      obj.type = "STORE_LISTINGS_FETCH_SUCCESS";
      obj.storeListings = body.body;
      dispatch(obj);
    } else {
      obj.type = "STORE_LISTING_FETCH_SUCCESS";
      obj.storeListing = body.body;
      dispatch(obj);
    }
  }).catch(() => {
    let obj = result(outer1_2[6]);
    obj = { type: "SKU_FETCH_FAIL", skuId: closure_0 };
    obj.dispatch(obj);
  });
};
