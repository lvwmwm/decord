// Module ID: 11905
// Function ID: 11906
// Name: PushNotificationActionCreators
// Dependencies: [5, 11906, 502, 1074, 11907, 6013, 3, 1100, 1271, 1231, 11910, 510, 5029, 1364, 1249, 1370, 573, 2]
// Exports: setPushNotificationPermissionEligibleForPrompt, setPushPermissionReactivationSeen, setPushPermissionState, updateNotificationAuthorizationStatus

// Module 11905 (PushNotificationActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import TokenManagerAll from "TokenManager" /* 1100 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5029 */;
import Constants2 from "Constants" /* 11907 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import MultiAccountStore from "MultiAccountStore" /* 11906 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1074 */;
import PushNotificationConstants from "PushNotificationConstants" /* 6013 */;
import size from "module_2" /* 2 */;

let c2, c3, c5, c6, closure_3;

let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function getOrRefreshPushSyncToken() {
  return obj(...arguments);
}
let body = function _getOrRefreshPushSyncToken() {
  let obj = _asyncToGenerator(async (arg0, value) => {
    let obj6;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let closure_2;
        let token;
        let getToken;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp;
            token = undefined;
            getToken = closure_0.pushSyncToken;
            if (null == getToken) {
              getToken = TokenManagerAll.getToken;
              token = getToken(tmp35.id);
              if (null == token) {
                c6 = 3;
                return { value: null, done: true };
              } else {
                c4 = 1;
                const HTTP = HTTPUtils.HTTP;
                const obj5 = { url: constants.DEVICES_SYNC_TOKEN, headers: obj6, rejectWithError: false };
                obj6 = { authorization: token };
                getToken = HTTP.get(obj5);
                c5 = 2;
                c6 = 1;
                const obj7 = { value: getToken, done: false };
                return obj7;
              }
            } else {
              c6 = 3;
              const obj8 = { value: closure_0.pushSyncToken, done: true };
              return obj8;
            }
          }
        } else if (1 === tmp4) {
          c4 = 0;
          closure_2 = closure_3;
          const obj4 = closure_130_1(closure_130_3[9]);
          obj4.captureException(closure_2);
          c6 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          token = value.body.token;
          c4 = 0;
          const obj = closure_130_2(closure_130_3[10]);
          obj.updatePushSyncToken(closure_0.id, token);
          getToken = token;
          c6 = 3;
          const obj10 = { value: getToken, done: true };
          return obj10;
        }
      } catch (tmp28) {
        closure_3 = tmp28;
        if (0 === c4) {
          c6 = 3;
          throw tmp28;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ DEVICE_TOKEN: metroImportDefault, DEVICE_VOIP_TOKEN: metroImportAll, Endpoints: c9 } = Constants);
const MAX_PUSH_SYNC_ACCOUNTS = Constants2.MAX_PUSH_SYNC_ACCOUNTS;
({ BUNDLE_ID: unpackModuleId, DEVICE_PUSH_VOIP_PROVIDER: closure_12, getDevicePushProvider: map1, IS_QUEST_RELEASE: closure_14 } = PushNotificationConstants);
const tmp4 = new LoggerDefault("PushNotificationActionCreators");
const logger = tmp4;
body = {
  registerDevice(token, flag) {
    let isAndroidResult;
    let obj2;
    let syncDeviceResult;
    if (flag === undefined) {
      flag = false;
    }
    const canUseMultiAccountNotifications = MultiAccountStore.canUseMultiAccountNotifications;
    logger.log("Registering push notification token: " + token + ", is voip:" + flag + ", multi-account:" + canUseMultiAccountNotifications);
    const Storage = Storage2.Storage;
    const result = Storage.set(flag ? metroImportAll : metroImportDefault, token);
    if (canUseMultiAccountNotifications) {
      const self = this;
      syncDeviceResult = this.syncDevice(token, flag);
    } else {
      let tmp9;
      const request = { url: constants.DEVICES, body, oldFormErrors: true, trackedActionData: obj2, rejectWithError: false };
      const post = TrackedHTTPUtilsDefault.post;
      TrackedHTTPUtilsDefault;
      if (flag) {
        tmp9 = closure_12;
      } else {
        tmp9 = map1();
      }
      body = { provider: tmp9, token, bypass_server_throttling_supported: isAndroidResult, bundle_id: unpackModuleId };
      const tmp2Result = PlatformUtils;
      isAndroidResult = tmp2Result.isAndroid() && !authStore2;
      obj2 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_REGISTER_DEVICE_TOKEN };
      syncDeviceResult = post(request);
    }
    return syncDeviceResult;
  },
  syncDevice(token, flag) {
    let closure_0 = token;
    if (flag === undefined) {
      flag = false;
    }
    return (async (arg0, value) => {
      let closure_0;
      let isAndroidResult;
      let obj7;
      let v2;
      let validUsers;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let closure_1;
          let tmp;
          let num = 2;
          c3 = 2;
          let num2 = 0;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = undefined;
              tmp = id.getId();
              validUsers = validUsers.getValidUsers();
              const sorted = validUsers.sort((id, id2) => {
                let num = -1;
                if (id.id !== closure_1_0) {
                  let num2 = 0;
                  if (id2.id === tmp) {
                    num2 = 1;
                  }
                  num = num2;
                }
                return num;
              });
              const substr = sorted.slice(0, MAX_PUSH_SYNC_ACCOUNTS);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: all(substr.map(getOrRefreshPushSyncToken)), done: false };
              return obj5;
            }
          } else {
            if (1 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_1 = value;
                if (closure_1.length >= 1) {
                  if (null != closure_1[0]) {
                    let tmp8;
                    const HTTP = tmp(c3[8]).HTTP;
                    const request = { url: constants.DEVICES_SYNC, body: obj7, rejectWithError: false };
                    const put = HTTP.put;
                    if (closure_129_1) {
                      tmp8 = closure_1_12;
                    } else {
                      tmp8 = closure_1_13();
                    }
                    obj7 = { provider: tmp8, token, push_sync_tokens: closure_1.filter(tmp(c3[15]).isNotNullish), bypass_server_throttling_supported: isAndroidResult, bundle_id };
                    const obj3 = tmp(c3[13]);
                    isAndroidResult = obj3.isAndroid() && !closure_1_14;
                    c2 = 2;
                    c3 = 1;
                    const obj8 = { value: put(request), done: false };
                    return obj8;
                  }
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c2 = value;
              if (c2.body.invalid_push_sync_tokens.length > 0) {
                const obj9 = c2(c3[10]);
                const result = obj9.invalidatePushSyncTokens(c2.body.invalid_push_sync_tokens);
              }
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp22) {
          c3 = 3;
          throw tmp22;
        }
      }
    })();
  },
  unregisterDevice(token) {
    logger.log("Unregistering push notification token: " + token);
    const request = { url: constants.DEVICES, body, trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_UNREGISTER_DEVICE_TOKEN }, rejectWithError: false };
    const tmp2 = TrackedHTTPUtilsDefault;
    body = { provider: map1(), token };
    const _delete = tmp2.delete;
    ({ event: discord_common_AnalyticsUtils.NetworkActionNames.USER_UNREGISTER_DEVICE_TOKEN });
    return _delete(request);
  }
};
let result = size.fileFinishedImporting("actions/native/PushNotificationActionCreators.tsx");

export default body;
export const setPushPermissionState = function setPushPermissionState(PROMPT_SEEN) {
  const permissionState = PROMPT_SEEN;
  let obj = DispatcherDefault;
  obj.wait(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "PUSH_NOTIFICATION_PERMISSION_SET_STATE", permissionState };
    obj.dispatch(obj2);
  });
};
export const setPushPermissionReactivationSeen = function setPushPermissionReactivationSeen(promptType) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN", promptType };
  obj.dispatch(obj2);
};
export const setPushNotificationPermissionEligibleForPrompt = function setPushNotificationPermissionEligibleForPrompt(CHANNEL_BANNER) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PUSH_NOTIFICATION_PERMISSION_SET_ELIGIBLE", promptType: CHANNEL_BANNER };
  obj.dispatch(obj2);
};
export const updateNotificationAuthorizationStatus = function updateNotificationAuthorizationStatus(authorizationStatus) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PUSH_NOTIFICATION_AUTHORIZATION_STATUS_UPDATE", authorizationStatus };
  obj.dispatch(obj2);
};
