// Module ID: 6973
// Function ID: 55771
// Name: _fetchAdUser
// Dependencies: [5, 6971, 653, 675, 686, 6974, 2]
// Exports: fetchAdUser

// Module 6973 (_fetchAdUser)
import enforcing from "enforcing";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
async function _fetchAdUser(arg0, arg1) {
  if (null != outer2_3.adUser) {
    if (null != outer2_3.adUser.advertisingId) {
      let obj = outer2_0(outer2_1[3]);
      obj = { has_advertising_id: true, android_advertising_id: outer2_3.adUser.advertisingId, location: arg0, success: true, last_fetched_timestamp: outer2_3.lastFetchedAt };
      obj.track(outer2_4.AD_IDENTIFIER_FETCHED, obj);
    }
  }
  let obj2 = outer2_0(outer2_1[4]);
  obj2.dispatch({ type: "FETCH_AD_USER_START" });
  const nowResult = performance.now();
  const tmp10 = yield outer2_0(outer2_1[5]).getGoogleAdvertisingId();
  const diff = performance.now() - nowResult;
  const obj4 = outer2_0(outer2_1[5]);
  obj = { platform: outer2_5.ANDROID, success: true, duration_ms: diff, has_advertising_id: null != tmp10.googleAdvertisingId, is_limit_ad_tracking_enabled: tmp10.isLimitAdTrackingEnabled };
  outer2_0(outer2_1[3]).track(outer2_4.AD_USER_FETCH_DURATION, obj);
  const obj5 = outer2_0(outer2_1[3]);
  const obj1 = { has_advertising_id: null != tmp10.googleAdvertisingId };
  let googleAdvertisingId = null;
  if (null != tmp10.googleAdvertisingId) {
    googleAdvertisingId = tmp10.googleAdvertisingId;
  }
  obj1.android_advertising_id = googleAdvertisingId;
  obj1.location = arg0;
  obj1.success = true;
  outer2_0(outer2_1[3]).track(outer2_4.AD_IDENTIFIER_FETCHED, obj1);
  const obj7 = outer2_0(outer2_1[3]);
  obj2 = { type: "FETCH_AD_USER_SUCCESS", advertisingId: tmp10.googleAdvertisingId, isLimitAdTrackingEnabled: tmp10.isLimitAdTrackingEnabled };
  outer2_0(outer2_1[4]).dispatch(obj2);
}
({ AnalyticEvents: closure_4, Platforms: closure_5 } = ME);
const result = require("ME").fileFinishedImporting("modules/ads/native/AdUserActionCreators.android.tsx");

export const fetchAdUser = function fetchAdUser(handleStoreChange) {
  return _fetchAdUser(...arguments);
};
