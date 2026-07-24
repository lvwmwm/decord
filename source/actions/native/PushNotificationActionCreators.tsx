// Module ID: 11481
// Function ID: 89344
// Name: getOrRefreshPushSyncToken
// Dependencies: [5, 11482, 1194, 653, 5591, 3, 684, 507, 1184, 11486, 587, 4942, 477, 480, 1327, 686, 2]
// Exports: setPushNotificationPermissionEligibleForPrompt, setPushPermissionReactivationSeen, setPushPermissionState, updateNotificationAuthorizationStatus

// Module 11481 (getOrRefreshPushSyncToken)
import timestamp from "timestamp";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult from "ME";
import str2 from "str2";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getOrRefreshPushSyncToken() {
  return _getOrRefreshPushSyncToken(...arguments);
}
function _getOrRefreshPushSyncToken() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ DEVICE_TOKEN: closure_7, DEVICE_VOIP_TOKEN: closure_8, Endpoints: closure_9 } = ME);
({ BUNDLE_ID: closure_10, DEVICE_PUSH_VOIP_PROVIDER: closure_11, getDevicePushProvider: closure_12, IS_QUEST_RELEASE: closure_13 } = require("str2"));
importDefaultResult = new importDefaultResult("PushNotificationActionCreators");
let obj = {
  registerDevice(token, flag) {
    const self = this;
    if (flag === undefined) {
      flag = false;
    }
    const canUseMultiAccountNotifications = obj.canUseMultiAccountNotifications;
    importDefaultResult.log("Registering push notification token: " + token + ", is voip:" + flag + ", multi-account:" + canUseMultiAccountNotifications);
    const Storage = require(587) /* Storage */.Storage;
    const result = Storage.set(flag ? closure_8 : closure_7, token);
    if (canUseMultiAccountNotifications) {
      let syncDeviceResult = self.syncDevice(token, flag);
    } else {
      obj = importDefault(4942);
      obj = { url: constants.DEVICES };
      obj = {};
      if (flag) {
        let tmp7 = closure_11;
      } else {
        tmp7 = callback2();
      }
      obj.provider = tmp7;
      obj.token = token;
      let isAndroidResult = require(477) /* set */.isAndroid();
      if (isAndroidResult) {
        isAndroidResult = !closure_13;
      }
      obj.bypass_server_throttling_supported = isAndroidResult;
      obj.bundle_id = closure_10;
      obj.body = obj;
      obj.oldFormErrors = true;
      const obj1 = { event: require(480) /* isThrottled */.NetworkActionNames.USER_REGISTER_DEVICE_TOKEN };
      obj.trackedActionData = obj1;
      obj.rejectWithError = false;
      syncDeviceResult = obj.post(obj);
      const obj4 = require(477) /* set */;
    }
    return syncDeviceResult;
  },
  syncDevice(token, flag) {
    let closure_0 = token;
    if (flag === undefined) {
      flag = false;
    }
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  unregisterDevice(token) {
    importDefaultResult.log("Unregistering push notification token: " + token);
    let obj = importDefault(4942);
    obj = { url: constants.DEVICES };
    obj = { provider: callback2(), token };
    obj.body = obj;
    obj.trackedActionData = { event: require(480) /* isThrottled */.NetworkActionNames.USER_UNREGISTER_DEVICE_TOKEN };
    obj.rejectWithError = false;
    return obj.delete(obj);
  }
};
let result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/native/PushNotificationActionCreators.tsx");

export default obj;
export const setPushPermissionState = function setPushPermissionState(PROMPT_SEEN) {
  let closure_0 = PROMPT_SEEN;
  importDefault(686).wait(() => {
    let obj = outer1_1(outer1_3[15]);
    obj = { type: "PUSH_NOTIFICATION_PERMISSION_SET_STATE", permissionState: closure_0 };
    obj.dispatch(obj);
  });
};
export const setPushPermissionReactivationSeen = function setPushPermissionReactivationSeen(promptType) {
  let obj = importDefault(686);
  obj = { type: "PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN", promptType };
  obj.dispatch(obj);
};
export const setPushNotificationPermissionEligibleForPrompt = function setPushNotificationPermissionEligibleForPrompt(CHANNEL_BANNER) {
  let obj = importDefault(686);
  obj = { type: "PUSH_NOTIFICATION_PERMISSION_SET_ELIGIBLE", promptType: CHANNEL_BANNER };
  obj.dispatch(obj);
};
export const updateNotificationAuthorizationStatus = function updateNotificationAuthorizationStatus(authorizationStatus) {
  let obj = importDefault(686);
  obj = { type: "PUSH_NOTIFICATION_AUTHORIZATION_STATUS_UPDATE", authorizationStatus };
  obj.dispatch(obj);
};
