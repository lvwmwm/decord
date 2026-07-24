// Module ID: 16184
// Function ID: 125410
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5, 27, 3760, 1194, 1348, 4325, 11478, 11479, 653, 4344, 4098, 16185, 1934, 480, 3712, 11481, 10254, 675, 477, 14363, 668, 5078, 2]

// Module 16184 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import showActionSheet from "showActionSheet";
import maybeLoadBundle from "maybeLoadBundle";
import isThrottled from "isThrottled";
import asyncGeneratorStep from "asyncGeneratorStep";
import { NativeModules } from "set";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import { PermissionPromptType } from "_isNativeReflectConstruct";
import EventActionType from "EventActionType";
import ME from "ME";
import { NotificationAuthorizationStatus as closure_21 } from "NativePermissionStatus";
import tmp4 from "AutomaticLifecycleManager";

let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function haveNotSeenPromptSince(arg0, arg1) {
  const tmp = state.getState().promptLastSeen[arg0];
  let tmp2 = null == tmp;
  if (!tmp2) {
    let tmp4;
    if (items.includes(arg0)) {
      tmp4 = importDefault(3712)().diff(tmp, "days") >= 1;
      const obj = importDefault(3712)();
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function shouldShowPrompt() {
  return _shouldShowPrompt(...arguments);
}
function _shouldShowPrompt() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  return obj(...arguments);
}
function shouldShowReactivationPrompt() {
  return _shouldShowReactivationPrompt(...arguments);
}
function _shouldShowReactivationPrompt() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  return obj(...arguments);
}
function showPrompt(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    let obj = callback(outer1_2[20]);
    const result = obj.setPushPermissionReactivationSeen(callback);
    obj = {};
    const obj2 = callback2(outer1_2[15]);
    obj.impressionName = callback(outer1_2[18]).ImpressionNames.PUSH_NOTIFICATION_REACTIVATION_PROMPT;
    obj.impressionProperties = { action_location: callback2 };
    obj.location = callback2;
    obj2.openLazy(callback(outer1_2[17])(outer1_2[16], outer1_2.paths), outer1_16, obj);
  }, arg2);
}
function _logNotificationPermissionStatus() {
  return _logNotificationPermissionStatus2(...arguments);
}
function _logNotificationPermissionStatus2() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  return obj(...arguments);
}
({ NOTIFICATION_REACTIVATION_ACTIONSHEET_KEY: closure_16, EventActionLocation: closure_17 } = EventActionType);
({ RelationshipTypes: closure_18, GuildFeatures: closure_19, AnalyticEvents: closure_20 } = ME);
let items = [, ];
({ FRIEND_REQUEST_SENT: arr[0], INVITE_ACCEPTED: arr[1] } = PermissionPromptType);
let c23 = null;
tmp4 = new tmp4();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/nuf/native/NotificationPermissionManager.tsx");

export default tmp4;
