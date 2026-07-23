// Module ID: 14784
// Function ID: 112770
// Name: RedesignNotificationModal
// Dependencies: [31, 27, 11448, 11449, 653, 33, 4130, 689, 11450, 675, 11451, 11717, 14785, 1212, 2]
// Exports: RedesignNotificationScreen

// Module 14784 (RedesignNotificationModal)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { PermissionStateType } from "_isNativeReflectConstruct";
import EventActionType from "EventActionType";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
class RedesignNotificationModal {
  constructor(arg0) {
    onComplete = global.onComplete;
    tmp = c11();
    items = [];
    items[0] = onComplete;
    items1 = [];
    items1[0] = onComplete;
    callback = result.useCallback(() => {
      const pushNotificationPermission = onComplete(outer1_2[8]).requestPushNotificationPermission(outer1_8.ALLOW_TO_REQUEST, outer1_7.ALERT, () => {
        if (null != outer1_0) {
          outer1_0();
        }
      });
    }, items);
    obj = { style: tmp.container };
    callback1 = result.useCallback(() => {
      let obj = outer1_1(outer1_2[9]);
      obj = { action_type: outer1_8.SKIP_STEP, action_location: outer1_7.ALERT };
      obj.track(outer1_9.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj);
      const result = onComplete(outer1_2[10]).setPushPermissionState(outer1_6.PROMPT_SKIPPED);
      const obj3 = onComplete(outer1_2[10]);
      const result1 = onComplete(outer1_2[8]).enableProvisionalPushNotification();
      if (null != onComplete) {
        onComplete(true);
      }
    }, items1);
    obj = { onAllow: callback, onDontAllow: callback1 };
    obj1 = { resizeMode: "contain", style: tmp.notificationHeaderImage };
    tmp4 = require("NewUserPermissionsOnboarding");
    obj1.source = require("registerAsset");
    obj.header = jsx(Image, obj1);
    intl = require("getSystemLocale").intl;
    obj.title = intl.string(require("getSystemLocale").t["3nx0b5"]);
    intl2 = require("getSystemLocale").intl;
    obj.subtitle = intl2.string(require("getSystemLocale").t.Gf7U1T);
    obj.children = jsx(tmp4, obj);
    return jsx(View, obj);
  }
}
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ EventActionLocation: closure_7, EventActionType: closure_8 } = EventActionType);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, marginTop: -require("_createForOfIteratorHelperLoose").space.PX_48 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.notificationHeaderImage = { position: "absolute", alignSelf: "center", zIndex: 2, top: -140, height: 156, width: 150 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/nuf/native/components/notification/RedesignNotificationModal.tsx");

export default RedesignNotificationModal;
export const RedesignNotificationScreen = function RedesignNotificationScreen(onComplete) {
  return <RedesignNotificationModal onComplete={arg0.route.params.onComplete} />;
};
