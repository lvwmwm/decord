// Module ID: 11441
// Function ID: 89073
// Name: getOrRefreshPushSyncToken
// Dependencies: []
// Exports: setPushNotificationPermissionEligibleForPrompt, setPushPermissionReactivationSeen, setPushPermissionState, updateNotificationAuthorizationStatus

// Module 11441 (getOrRefreshPushSyncToken)
function getOrRefreshPushSyncToken() {
  return _getOrRefreshPushSyncToken(...arguments);
}
function _getOrRefreshPushSyncToken() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getOrRefreshPushSyncToken = obj;
  return obj(...arguments);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
({ DEVICE_TOKEN: closure_7, DEVICE_VOIP_TOKEN: closure_8, Endpoints: closure_9 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ BUNDLE_ID: closure_10, DEVICE_PUSH_VOIP_PROVIDER: closure_11, getDevicePushProvider: closure_12, IS_QUEST_RELEASE: closure_13 } = arg1(dependencyMap[4]));
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult("PushNotificationActionCreators");
const obj = {
  registerDevice(token, flag) {
    const self = this;
    if (flag === undefined) {
      flag = false;
    }
    const canUseMultiAccountNotifications = obj.canUseMultiAccountNotifications;
    importDefaultResult.log("Registering push notification token: " + token + ", is voip:" + flag + ", multi-account:" + canUseMultiAccountNotifications);
    const Storage = flag(dependencyMap[10]).Storage;
    const result = Storage.set(flag ? closure_8 : closure_7, token);
    if (canUseMultiAccountNotifications) {
      let syncDeviceResult = self.syncDevice(token, flag);
    } else {
      let obj = importDefault(dependencyMap[11]);
      obj = { url: constants.DEVICES };
      obj = {};
      if (flag) {
        let tmp7 = closure_11;
      } else {
        tmp7 = callback2();
      }
      obj.provider = tmp7;
      obj.token = token;
      let isAndroidResult = flag(dependencyMap[12]).isAndroid();
      if (isAndroidResult) {
        isAndroidResult = !closure_13;
      }
      obj.bypass_server_throttling_supported = isAndroidResult;
      obj.bundle_id = closure_10;
      obj.body = obj;
      obj.oldFormErrors = true;
      const obj1 = { event: flag(dependencyMap[13]).NetworkActionNames.USER_REGISTER_DEVICE_TOKEN };
      obj.trackedActionData = obj1;
      obj.rejectWithError = false;
      syncDeviceResult = obj.post(obj);
      const obj4 = flag(dependencyMap[12]);
    }
    return syncDeviceResult;
  },
  syncDevice(token, flag) {
    flag = token;
    if (flag === undefined) {
      flag = false;
    }
    const importDefault = flag;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  unregisterDevice(token) {
    importDefaultResult.log("Unregistering push notification token: " + token);
    let obj = importDefault(dependencyMap[11]);
    obj = { url: constants.DEVICES };
    obj = { provider: callback2(), token };
    obj.body = obj;
    obj.trackedActionData = { event: arg1(dependencyMap[13]).NetworkActionNames.USER_UNREGISTER_DEVICE_TOKEN };
    obj.rejectWithError = false;
    return obj.delete(obj);
  }
};
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("actions/native/PushNotificationActionCreators.tsx");

export default obj;
export const setPushPermissionState = function setPushPermissionState(PROMPT_SEEN) {
  const arg1 = PROMPT_SEEN;
  importDefault(dependencyMap[15]).wait(() => {
    let obj = callback(closure_3[15]);
    obj = { type: "PUSH_NOTIFICATION_PERMISSION_SET_STATE", permissionState: arg0 };
    obj.dispatch(obj);
  });
};
export const setPushPermissionReactivationSeen = function setPushPermissionReactivationSeen(promptType) {
  let obj = importDefault(dependencyMap[15]);
  obj = { type: "PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN", promptType };
  obj.dispatch(obj);
};
export const setPushNotificationPermissionEligibleForPrompt = function setPushNotificationPermissionEligibleForPrompt(CHANNEL_BANNER) {
  let obj = importDefault(dependencyMap[15]);
  obj = { type: "PUSH_NOTIFICATION_PERMISSION_SET_ELIGIBLE", promptType: CHANNEL_BANNER };
  obj.dispatch(obj);
};
export const updateNotificationAuthorizationStatus = function updateNotificationAuthorizationStatus(authorizationStatus) {
  let obj = importDefault(dependencyMap[15]);
  obj = { type: "PUSH_NOTIFICATION_AUTHORIZATION_STATUS_UPDATE", authorizationStatus };
  obj.dispatch(obj);
};
