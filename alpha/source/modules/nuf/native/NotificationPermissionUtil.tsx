// Module ID: 13960
// Function ID: 13961
// Name: NotificationPermissionUtil
// Dependencies: [32, 5, 19, 17, 13958, 13959, 1072, 7940, 7963, 10918, 1252, 13961, 13967, 13968, 504, 2]
// Exports: enableProvisionalPushNotification, requestPushNotificationPermission, useCanSeePushNotificationNudge, useShouldShowPushNotificationNudgeByPromptType, useShowReactivationPrompt

// Module 13960 (NotificationPermissionUtil)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import NativePermissionConstants from "NativePermissionConstants" /* 7940 */;
import react_nativeDefault from "react-native" /* 7963 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 13959 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 13961 */;
import RegionalTeenUtils from "RegionalTeenUtils" /* 13968 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13958 */;
import size from "module_2" /* 2 */;

let c1, c2, c3, closure_3, closure_4;

const f105440 = () => state.authorizationStatus;
let obj = function _requestPushNotificationPermission() {
  obj = _asyncToGenerator(async (arg0, action_location, arg2) => {
    let closure_0 = arg0;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let action_type;
      let obj8;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              c5 = 1;
              c6 = 1;
              const obj7 = { value: obj8.getNotificationAuthorizationStatus(), done: false };
              obj8 = react_nativeDefault;
              return obj7;
            }
          } else {
            if (1 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                closure_3 = value;
                if (closure_3 === closure_132_10.DENIED) {
                  closure_132_1(closure_132_2[9])();
                  const obj10 = { action_type: closure_132_8.TO_SETTINGS, action_location };
                  const obj5 = closure_132_1(closure_132_2[10]);
                  obj5.track(closure_132_9.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj10);
                  closure_2();
                } else if (closure_3 === closure_132_10.AUTHORIZED) {
                  const obj4 = closure_132_0(closure_132_2[11]);
                  const result = obj4.updateNotificationAuthorizationStatus(closure_3);
                  closure_2();
                } else {
                  let obj2 = closure_132_1(closure_132_2[12]);
                  c5 = 2;
                  c6 = 1;
                  const obj11 = {
                    value: obj2.requestPermission((permission_granted) => {
                                  obj = action_location(closure_2[10]);
                                  const obj2 = { action_type, action_location, permission_granted };
                                  obj.track(constants.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
                                  closure_1_2();
                                }),
                    done: false
                  };
                  return obj11;
                }
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value, done: true };
              return obj;
            }
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
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
    let obj2;
    let tmp2;
    if (c3 === 2) {
      c3 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        const tmp3 = c2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp3;
            let closure_0 = tmp3;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj2.getNotificationAuthorizationStatus(), done: false };
            obj2 = react_nativeDefault;
            return obj5;
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
              const track = closure_1_1(closure_1_2[10]).track;
              const PERMISSIONS_ACKED = constants.PERMISSIONS_ACKED;
              closure_1_1(closure_1_2[10]);
              const tmp = closure_1_1;
              const tmp2 = closure_1_2;
              if (arg0) {
                str = "accepted";
              }
              track(PERMISSIONS_ACKED, { type: "provisional_notification", action: str });
              const tmpResult = tmp(tmp2[8]);
              const notificationAuthorizationStatus = tmpResult.getNotificationAuthorizationStatus();
              notificationAuthorizationStatus.then((result) => {
                if (null != result) {
                  obj = closure_1_0(closure_1_2[11]);
                  result = obj.updateNotificationAuthorizationStatus(result);
                }
              });
            });
          }
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp12) {
        c3 = 3;
        throw tmp12;
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

export function requestPushNotificationPermission() {
  return obj(...arguments);
}
export function useShowReactivationPrompt() {
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
        let obj2;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
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
                const obj4 = { value, done: true };
                return obj4;
              } else {
                c1 = 1;
                c2 = 1;
                const obj5 = { value: obj2.getNotificationAuthorizationStatus(), done: false };
                obj2 = closure_2_1(closure_2_2[8]);
                return obj5;
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
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp11) {
            c2 = 3;
            throw tmp11;
          }
        }
      });
      return obj(...arguments);
    };
    !shouldShowReactivationPrompts();
  }, []);
  return tmp2;
}
export function enableProvisionalPushNotification() {
  return obj(...arguments);
}
export function useCanSeePushNotificationNudge() {
  let hasItem;
  let tmp4;
  obj = RegionalTeenUtils;
  const isTeenInStrictCountry = obj.useIsTeenInStrictCountry();
  const items = [PushNotificationPermissionStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, f105440);
  [tmp4, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    obj = react_nativeDefault;
    const notificationAuthorizationStatus = obj.getNotificationAuthorizationStatus();
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
}
export function useShouldShowPushNotificationNudgeByPromptType(CHANNEL_BANNER) {
  let hasItem;
  let state;
  let tmp7;
  obj = RegionalTeenUtils;
  const isTeenInStrictCountry = obj.useIsTeenInStrictCountry();
  const items = [PushNotificationPermissionStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, f105440);
  [tmp7, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    obj = react_nativeDefault;
    const notificationAuthorizationStatus = obj.getNotificationAuthorizationStatus();
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
}
