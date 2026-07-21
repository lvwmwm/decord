// Module ID: 11439
// Function ID: 89024
// Name: _requestPushNotificationPermission
// Dependencies: []
// Exports: enableProvisionalPushNotification, requestPushNotificationPermission, useShouldShowPushNotificationNudgeByPromptType, useShowReactivationPrompt

// Module 11439 (_requestPushNotificationPermission)
function _requestPushNotificationPermission() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _requestPushNotificationPermission = obj;
  return obj(...arguments);
}
function _enableProvisionalPushNotification() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _enableProvisionalPushNotification = obj;
  return obj(...arguments);
}
function useCanSeePushNotificationNudge() {
  const isTeenInStrictCountry = callback(dependencyMap[12]).useIsTeenInStrictCountry();
  const obj = callback(dependencyMap[12]);
  const items = [closure_7];
  const stateFromStores = callback(dependencyMap[13]).useStateFromStores(items, () => authorizationStatus.authorizationStatus);
  const tmp3 = callback2(React.useState(false), 2);
  let first = tmp3[0];
  const callback = tmp3[1];
  const effect = React.useEffect(() => {
    const NativePermissionManager = obj.NativePermissionManager;
    const notificationAuthorizationStatus = NativePermissionManager.getNotificationAuthorizationStatus();
    notificationAuthorizationStatus.then((authorizationStatus) => {
      if (null != authorizationStatus) {
        const result = callback(closure_2[10]).updateNotificationAuthorizationStatus(authorizationStatus);
        const obj = callback(closure_2[10]);
      }
      callback(true);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const NativeModules = arg1(dependencyMap[3]).NativeModules;
let closure_7 = importDefault(dependencyMap[4]);
const EventActionType = arg1(dependencyMap[5]).EventActionType;
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
let closure_10 = arg1(dependencyMap[7]).NotificationAuthorizationStatus;
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/nuf/native/NotificationPermissionUtil.tsx");

export const requestPushNotificationPermission = function requestPushNotificationPermission(ALLOW_TO_REQUEST, ALERT, callback) {
  return _requestPushNotificationPermission(...arguments);
};
export const useShowReactivationPrompt = function useShowReactivationPrompt() {
  const tmp = callback2(React.useState(false), 2);
  let closure_0 = tmp[1];
  const effect = React.useEffect(() => {
    function _shouldShowReactivationPrompts() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _shouldShowReactivationPrompts = obj;
      return obj(...arguments);
    }
    !function shouldShowReactivationPrompts() {
      return _shouldShowReactivationPrompts(...arguments);
    }();
  }, []);
  return tmp[0];
};
export const enableProvisionalPushNotification = function enableProvisionalPushNotification() {
  return _enableProvisionalPushNotification(...arguments);
};
export { useCanSeePushNotificationNudge };
export const useShouldShowPushNotificationNudgeByPromptType = function useShouldShowPushNotificationNudgeByPromptType(CHANNEL_BANNER) {
  let hasItem = useCanSeePushNotificationNudge();
  const items = [closure_7];
  const stateFromStores = arg1(dependencyMap[13]).useStateFromStores(items, () => state.getState().eligiblePromptTypes);
  if (hasItem) {
    hasItem = stateFromStores.has(CHANNEL_BANNER);
  }
  return hasItem;
};
