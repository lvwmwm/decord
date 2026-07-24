// Module ID: 11480
// Function ID: 89320
// Name: _requestPushNotificationPermission
// Dependencies: [57, 5, 31, 27, 11478, 11479, 653, 4344, 10669, 675, 11481, 11487, 11488, 566, 2]
// Exports: enableProvisionalPushNotification, requestPushNotificationPermission, useShouldShowPushNotificationNudgeByPromptType, useShowReactivationPrompt

// Module 11480 (_requestPushNotificationPermission)
import _slicedToArray from "_slicedToArray";
import EventActionType from "EventActionType";
import result from "result";
import { NativeModules } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EventActionType } from "EventActionType";
import { AnalyticEvents } from "ME";
import { NotificationAuthorizationStatus as closure_10 } from "NativePermissionStatus";

const require = arg1;
function _requestPushNotificationPermission() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
function _enableProvisionalPushNotification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
function useCanSeePushNotificationNudge() {
  const isTeenInStrictCountry = _require(11488).useIsTeenInStrictCountry();
  let obj = _require(11488);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_7.authorizationStatus);
  const tmp3 = callback(React.useState(false), 2);
  let first = tmp3[0];
  _require = tmp3[1];
  const effect = React.useEffect(() => {
    const NativePermissionManager = outer1_6.NativePermissionManager;
    const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
    notificationAuthorizationStatus.then((authorizationStatus) => {
      if (null != authorizationStatus) {
        const result = callback(outer2_2[10]).updateNotificationAuthorizationStatus(authorizationStatus);
        const obj = callback(outer2_2[10]);
      }
      outer1_0(true);
    });
  }, []);
  if (first) {
    first = !isTeenInStrictCountry;
  }
  if (first) {
    first = null != stateFromStores;
  }
  if (first) {
    const items1 = [constants.DENIED, constants.PROVISIONAL, constants.UNDETERMINED];
    first = items1.includes(stateFromStores);
  }
  return first;
}
let result = require("result").fileFinishedImporting("modules/nuf/native/NotificationPermissionUtil.tsx");

export const requestPushNotificationPermission = function requestPushNotificationPermission(ALLOW_TO_REQUEST, ALERT, callback) {
  return _requestPushNotificationPermission(...arguments);
};
export const useShowReactivationPrompt = function useShowReactivationPrompt() {
  const tmp = callback(React.useState(false), 2);
  let closure_0 = tmp[1];
  const effect = React.useEffect(() => {
    function _shouldShowReactivationPrompts() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = outer2_4(tmp);
      return obj(...arguments);
    }
    !(function shouldShowReactivationPrompts() {
      return _shouldShowReactivationPrompts(...arguments);
    })();
  }, []);
  return tmp[0];
};
export const enableProvisionalPushNotification = function enableProvisionalPushNotification() {
  return _enableProvisionalPushNotification(...arguments);
};
export { useCanSeePushNotificationNudge };
export const useShouldShowPushNotificationNudgeByPromptType = function useShouldShowPushNotificationNudgeByPromptType(CHANNEL_BANNER) {
  let hasItem = useCanSeePushNotificationNudge();
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_7.getState().eligiblePromptTypes);
  if (hasItem) {
    hasItem = stateFromStores.has(CHANNEL_BANNER);
  }
  return hasItem;
};
