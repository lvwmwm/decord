// Module ID: 6633
// Function ID: 50921
// Name: _fetchUserEntitlements
// Dependencies: []
// Exports: fetchGiftableEntitlements, fetchUserEntitlements, fetchUserEntitlementsForApplication

// Module 6633 (_fetchUserEntitlements)
async function _fetchUserEntitlements(arg0, arg1) {
  const fn = function*(withSku) {
    let flag = withSku.withSku;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = withSku.withApplication;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let flag3 = withSku.excludeEnded;
    if (flag3 === undefined) {
      flag3 = true;
    }
    yield undefined;
    let obj = callback2(closure_2[2]);
    obj.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_START" });
    const HTTP = callback(closure_2[3]).HTTP;
    obj = { url: constants.ENTITLEMENTS_FOR_USER, query: obj, rejectWithError: true };
    obj = { with_sku: flag, with_application: flag2, entitlement_type: withSku.entitlementType, exclude_ended: flag3 };
    const tmp = flag3;
    const tmp4 = yield HTTP.get(obj);
    const obj1 = { type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS", entitlements: tmp4.body, excludeEnded: flag3 };
    callback2(closure_2[2]).dispatch(obj1);
  };
  fn.next();
  return fn;
}
async function _fetchGiftableEntitlements() {
  let obj = callback2(closure_2[2]);
  obj.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH" });
  obj = { url: constants.ENTITLEMENTS_GIFTABLE, rejectWithError: true };
  const obj2 = callback(closure_2[4]);
  const tmp2 = yield callback(closure_2[4]).httpGetWithCountryCodeQuery(obj);
  obj = { type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS", entitlements: tmp2.body };
  callback2(closure_2[2]).dispatch(obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[5]).fileFinishedImporting("actions/EntitlementActionCreators.tsx");

export const fetchUserEntitlementsForApplication = function fetchUserEntitlementsForApplication(closure_12, arg1) {
  let flag = arg1;
  arg1 = closure_12;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = importDefault(dependencyMap[2]);
  obj.wait(() => {
    let obj = callback(closure_2[2]);
    obj = { type: "ENTITLEMENT_FETCH_APPLICATION_START", applicationId: arg0 };
    obj.dispatch(obj);
  });
  const HTTP = arg1(dependencyMap[3]).HTTP;
  obj = { url: Endpoints.ENTITLEMENTS_FOR_APPLICATION(closure_12), oldFormErrors: true, query: obj, rejectWithError: true };
  obj = { exclude_consumed: flag };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let obj = callback(closure_2[2]);
    obj = { type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS", applicationId: body, entitlements: body.body };
    obj.dispatch(obj);
    return body.body;
  }).catch(() => {
    let obj = callback(closure_2[2]);
    obj = { type: "ENTITLEMENT_FETCH_APPLICATION_FAIL", applicationId: arg0 };
    obj.dispatch(obj);
  });
};
export const fetchUserEntitlements = function fetchUserEntitlements(arg0) {
  return _fetchUserEntitlements(...arguments);
};
export const fetchGiftableEntitlements = function fetchGiftableEntitlements() {
  return _fetchGiftableEntitlements(...arguments);
};
