// Module ID: 6638
// Function ID: 50969
// Name: _fetchUserEntitlements
// Dependencies: [5, 653, 686, 507, 4369, 2]
// Exports: fetchGiftableEntitlements, fetchUserEntitlements, fetchUserEntitlementsForApplication

// Module 6638 (_fetchUserEntitlements)
import set from "set";
import { Endpoints } from "ME";

const require = arg1;
async function _fetchUserEntitlements(arg0, arg1) {
  let iter = (function*(withSku) {
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
    let obj = outer2_1(outer2_2[2]);
    obj.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_START" });
    const HTTP = outer2_0(outer2_2[3]).HTTP;
    obj = { url: outer2_4.ENTITLEMENTS_FOR_USER, query: obj, rejectWithError: true };
    obj = { with_sku: flag, with_application: flag2, entitlement_type: withSku.entitlementType, exclude_ended: flag3 };
    const tmp = flag3;
    const tmp4 = yield HTTP.get(obj);
    const obj1 = { type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS", entitlements: tmp4.body, excludeEnded: flag3 };
    outer2_1(outer2_2[2]).dispatch(obj1);
  })();
  iter.next();
  return iter;
}
async function _fetchGiftableEntitlements() {
  let obj = outer2_1(outer2_2[2]);
  obj.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH" });
  obj = { url: outer2_4.ENTITLEMENTS_GIFTABLE, rejectWithError: true };
  const obj2 = outer2_0(outer2_2[4]);
  const tmp2 = yield outer2_0(outer2_2[4]).httpGetWithCountryCodeQuery(obj);
  obj = { type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS", entitlements: tmp2.body };
  outer2_1(outer2_2[2]).dispatch(obj);
}
const result = require("dispatcher").fileFinishedImporting("actions/EntitlementActionCreators.tsx");

export const fetchUserEntitlementsForApplication = function fetchUserEntitlementsForApplication(id, arg1) {
  let flag = arg1;
  const _require = id;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = importDefault(686);
  obj.wait(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { type: "ENTITLEMENT_FETCH_APPLICATION_START", applicationId: closure_0 };
    obj.dispatch(obj);
  });
  const HTTP = _require(507).HTTP;
  obj = { url: Endpoints.ENTITLEMENTS_FOR_APPLICATION(id), oldFormErrors: true, query: obj, rejectWithError: true };
  obj = { exclude_consumed: flag };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let obj = outer1_1(outer1_2[2]);
    obj = { type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS", applicationId: closure_0, entitlements: body.body };
    obj.dispatch(obj);
    return body.body;
  }).catch(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { type: "ENTITLEMENT_FETCH_APPLICATION_FAIL", applicationId: closure_0 };
    obj.dispatch(obj);
  });
};
export const fetchUserEntitlements = function fetchUserEntitlements(arg0) {
  return _fetchUserEntitlements(...arguments);
};
export const fetchGiftableEntitlements = function fetchGiftableEntitlements() {
  return _fetchGiftableEntitlements(...arguments);
};
