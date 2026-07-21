// Module ID: 6968
// Function ID: 55705
// Name: _fetchAdUser
// Dependencies: []
// Exports: fetchAdUser

// Module 6968 (_fetchAdUser)
async function _fetchAdUser(location, arg1) {
  if (null != closure_3.adUser) {
    if (null != closure_3.adUser.advertisingId) {
      let obj = callback(closure_1[3]);
      obj = { has_advertising_id: true, android_advertising_id: closure_3.adUser.advertisingId, location, success: true, last_fetched_timestamp: closure_3.lastFetchedAt };
      obj.track(constants.AD_IDENTIFIER_FETCHED, obj);
    }
  }
  let obj2 = callback(closure_1[4]);
  obj2.dispatch({ type: "FETCH_AD_USER_START" });
  const nowResult = performance.now();
  const tmp10 = yield callback(closure_1[5]).getGoogleAdvertisingId();
  const diff = performance.now() - nowResult;
  const obj4 = callback(closure_1[5]);
  obj = { platform: constants2.ANDROID, success: true, duration_ms: diff, has_advertising_id: null != tmp10.googleAdvertisingId, is_limit_ad_tracking_enabled: tmp10.isLimitAdTrackingEnabled };
  callback(closure_1[3]).track(constants.AD_USER_FETCH_DURATION, obj);
  const obj5 = callback(closure_1[3]);
  const obj1 = { has_advertising_id: null != tmp10.googleAdvertisingId };
  let googleAdvertisingId = null;
  if (null != tmp10.googleAdvertisingId) {
    googleAdvertisingId = tmp10.googleAdvertisingId;
  }
  obj1.android_advertising_id = googleAdvertisingId;
  obj1.location = location;
  obj1.success = true;
  callback(closure_1[3]).track(constants.AD_IDENTIFIER_FETCHED, obj1);
  const obj7 = callback(closure_1[3]);
  obj2 = { type: "FETCH_AD_USER_SUCCESS", advertisingId: tmp10.googleAdvertisingId, isLimitAdTrackingEnabled: tmp10.isLimitAdTrackingEnabled };
  callback(closure_1[4]).dispatch(obj2);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ AnalyticEvents: closure_4, Platforms: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/ads/native/AdUserActionCreators.android.tsx");

export const fetchAdUser = function fetchAdUser(post_connection_open) {
  return _fetchAdUser(...arguments);
};
