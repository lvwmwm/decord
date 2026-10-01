// Module ID: 11904
// Function ID: 11905
// Name: NotificationPermissionUtil
// Dependencies: [32, 5, 19, 17, 11902, 11903, 1074, 5045, 8749, 1241, 11905, 11911, 11912, 504, 2]
// Exports: enableProvisionalPushNotification, requestPushNotificationPermission, useCanSeePushNotificationNudge, useShouldShowPushNotificationNudgeByPromptType, useShowReactivationPrompt

// Module 11904 (NotificationPermissionUtil)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1074 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5045 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 11903 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 11905 */;
import RegionalTeenUtils from "RegionalTeenUtils" /* 11912 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 11902 */;
import size from "module_2" /* 2 */;

let c1, c2, c3, closure_3, closure_4;

const f94920 = () => state.authorizationStatus;
let obj = function _requestPushNotificationPermission() {
  obj = _asyncToGenerator(async (arg0, action_location, arg2) => {
    let closure_0 = arg0;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let action_type;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              closure_3 = undefined;
              const NativePermissionManager = NativeModules.NativePermissionManager;
              c5 = 1;
              c6 = 1;
              const obj6 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            closure_3 = value;
            if (closure_3 === closure_132_10.DENIED) {
              closure_132_1(closure_132_2[8])();
              const obj8 = { action_type: closure_132_8.TO_SETTINGS, action_location };
              const obj3 = closure_132_1(closure_132_2[9]);
              obj3.track(closure_132_9.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj8);
              closure_2();
            } else if (closure_3 === closure_132_10.AUTHORIZED) {
              let obj2 = closure_132_0(closure_132_2[10]);
              const result = obj2.updateNotificationAuthorizationStatus(closure_3);
              closure_2();
            } else {
              obj = closure_132_1(closure_132_2[11]);
              const permission = obj.requestPermission((permission_granted) => {
                obj = action_location(closure_2[9]);
                const obj2 = { action_type, action_location, permission_granted };
                obj.track(constants.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
                closure_1_2();
              });
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp35) {
          c6 = 3;
          throw tmp35;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _enableProvisionalPushNotification() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp3;
            let closure_0 = tmp3;
            let NativePermissionManager = NativeModules.NativePermissionManager;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          if (value === closure_129_10.UNDETERMINED) {
            const DCDProvisionalNotificationUtils = closure_129_6.DCDProvisionalNotificationUtils;
            let result = DCDProvisionalNotificationUtils.registerProvisionalNotification((arg0) => {
              let str = "denied";
              const track = closure_1_1(closure_1_2[9]).track;
              const PERMISSIONS_ACKED = constants.PERMISSIONS_ACKED;
              const tmp = closure_1_1(closure_1_2[9]);
              if (arg0) {
                str = "accepted";
              }
              track(PERMISSIONS_ACKED, { type: "provisional_notification", action: str });
              const NativePermissionManager = closure_1_6.NativePermissionManager;
              const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
              notificationAuthorizationStatus.then((result) => {
                if (null != result) {
                  obj = closure_1_0(closure_1_2[10]);
                  result = obj.updateNotificationAuthorizationStatus(result);
                }
              });
            });
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
const EventActionType = NotificationPermissionConstants.EventActionType;
const AnalyticEvents = Constants.AnalyticEvents;
let closure_10 = NativePermissionConstants.NotificationAuthorizationStatus;
let result = size.fileFinishedImporting("modules/nuf/native/NotificationPermissionUtil.tsx");

export const requestPushNotificationPermission = function requestPushNotificationPermission() {
  return obj(...arguments);
};
export const useShowReactivationPrompt = function useShowReactivationPrompt() {
  let tmp2;
  const tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, require] = tmp;
  const effect = react.useEffect(() => {
    function shouldShowReactivationPrompts() {
      return obj(...arguments);
    }
    obj = function _shouldShowReactivationPrompts() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_0;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
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
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const NativePermissionManager = closure_2_6.NativePermissionManager;
                c1 = 1;
                c2 = 1;
                const obj4 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              if (value !== constants.AUTHORIZED) {
                tmp3(true);
              }
              c2 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp10) {
            c2 = 3;
            throw tmp10;
          }
        }
      });
      return obj(...arguments);
    };
    !shouldShowReactivationPrompts();
  }, []);
  return tmp2;
};
export const enableProvisionalPushNotification = function enableProvisionalPushNotification() {
  return obj(...arguments);
};
export const useCanSeePushNotificationNudge = function useCanSeePushNotificationNudge() {
  let hasItem;
  let tmp4;
  obj = RegionalTeenUtils;
  const isTeenInStrictCountry = obj.useIsTeenInStrictCountry();
  const items = [PushNotificationPermissionStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, f94920);
  [tmp4, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    const NativePermissionManager = NativeModules.NativePermissionManager;
    const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
    notificationAuthorizationStatus.then((result) => {
      if (null != result) {
        obj = PushNotificationActionCreators;
        result = obj.updateNotificationAuthorizationStatus(result);
      }
      closure_1_0(true);
    });
  }, []);
  if (hasItem) {
    hasItem = !isTeenInStrictCountry;
  }
  if (hasItem) {
    hasItem = null != stateFromStores;
  }
  if (hasItem) {
    const items1 = [, , ];
    ({ DENIED: arr2[0], PROVISIONAL: arr2[1], UNDETERMINED: arr2[2] } = closure_10);
    hasItem = items1.includes(stateFromStores);
  }
  return hasItem;
};
export const useShouldShowPushNotificationNudgeByPromptType = function useShouldShowPushNotificationNudgeByPromptType(CHANNEL_BANNER) {
  let hasItem;
  let state;
  let tmp7;
  obj = RegionalTeenUtils;
  const isTeenInStrictCountry = obj.useIsTeenInStrictCountry();
  const items = [PushNotificationPermissionStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, f94920);
  [tmp7, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    const NativePermissionManager = NativeModules.NativePermissionManager;
    const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
    notificationAuthorizationStatus.then((result) => {
      if (null != result) {
        obj = PushNotificationActionCreators;
        result = obj.updateNotificationAuthorizationStatus(result);
      }
      closure_1_0(true);
    });
  }, []);
  const tmp4 = PushNotificationPermissionStore;
  if (hasItem) {
    hasItem = !isTeenInStrictCountry;
  }
  if (hasItem) {
    hasItem = null != stateFromStores;
  }
  if (hasItem) {
    const items1 = [, , ];
    ({ DENIED: arr2[0], PROVISIONAL: arr2[1], UNDETERMINED: arr2[2] } = closure_10);
    hasItem = items1.includes(stateFromStores);
  }
  const items2 = [tmp4];
  const tmpResult = get_initialized;
  const stateFromStores1 = tmpResult.useStateFromStores(items2, () => state.getState().eligiblePromptTypes);
  if (hasItem) {
    hasItem = stateFromStores1.has(CHANNEL_BANNER);
  }
  return hasItem;
};
