// Module ID: 16220
// Function ID: 16221
// Name: RedesignNotificationModal
// Dependencies: [19, 17, 12140, 12141, 1085, 21, 5090, 587, 558, 576, 12142, 1264, 12143, 16221, 1126, 12448, 2]

// Module 16220 (RedesignNotificationModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12140 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 12142 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 12143 */;
import NewUserPermissionsOnboardingDefault from "NewUserPermissionsOnboarding" /* 12448 */;
import AssetRegistryDefault from "AssetRegistry" /* 16221 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 12141 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
({ EventActionLocation: metroImportDefault, EventActionType: metroImportAll } = NotificationPermissionConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let obj = { container: obj2, notificationHeaderImage: { position: "absolute", alignSelf: "center", zIndex: 2, top: -140, height: 156, width: 150 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: -nativeDefault.space.PX_48 };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignNotificationModal(onComplete) {
  let obj3;
  let tmp12;
  let tmp5;
  const tmp = onComplete;
  let obj = onComplete(576);
  const cResult = obj.c(15);
  onComplete = onComplete.onComplete;
  const tmp4 = closure_11();
  if (cResult[0] !== onComplete) {
    const fn = function n() {
      const obj = NotificationPermissionUtil;
      const pushNotificationPermission = obj.requestPushNotificationPermission(metroImportAll.ALLOW_TO_REQUEST, metroImportDefault.ALERT, () => {
        if (onComplete != null) {
          tmp();
        }
      });
    };
    cResult[0] = onComplete;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== onComplete) {
    class I {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { action_type: metroImportAll.SKIP_STEP, action_location: metroImportDefault.ALERT };
        obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
        const obj3 = PushNotificationActionCreators;
        const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
        const obj4 = NotificationPermissionUtil;
        const result1 = obj4.enableProvisionalPushNotification();
        if (onComplete != null) {
          tmp4(true);
        }
      }
    }
    cResult[2] = onComplete;
    cResult[3] = I;
  } else {
    class I {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { action_type: metroImportAll.SKIP_STEP, action_location: metroImportDefault.ALERT };
        obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
        const obj3 = PushNotificationActionCreators;
        const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
        const obj4 = NotificationPermissionUtil;
        const result1 = obj4.enableProvisionalPushNotification();
        if (onComplete != null) {
          tmp4(true);
        }
      }
    }
  }
  if (cResult[4] !== tmp4.notificationHeaderImage) {
    class I {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { action_type: metroImportAll.SKIP_STEP, action_location: metroImportDefault.ALERT };
        obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
        const obj3 = PushNotificationActionCreators;
        const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
        const obj4 = NotificationPermissionUtil;
        const result1 = obj4.enableProvisionalPushNotification();
        if (onComplete != null) {
          tmp4(true);
        }
      }
    }
    const tmp10 = <closure_4 resizeMode="contain" style={tmp4.notificationHeaderImage} source={AssetRegistryDefault} />;
    cResult[4] = tmp4.notificationHeaderImage;
    cResult[5] = tmp10;
  } else {
    class I {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { action_type: metroImportAll.SKIP_STEP, action_location: metroImportDefault.ALERT };
        obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
        const obj3 = PushNotificationActionCreators;
        const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
        const obj4 = NotificationPermissionUtil;
        const result1 = obj4.enableProvisionalPushNotification();
        if (onComplete != null) {
          tmp4(true);
        }
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { action_type: metroImportAll.SKIP_STEP, action_location: metroImportDefault.ALERT };
        obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
        const obj3 = PushNotificationActionCreators;
        const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
        const obj4 = NotificationPermissionUtil;
        const result1 = obj4.enableProvisionalPushNotification();
        if (onComplete != null) {
          tmp4(true);
        }
      }
    }
    const stringResult = obj3.string(tmp(1126).t["3nx0b5"]);
    const intl = tmp(1126).intl;
    const stringResult1 = intl.string(tmp(1126).t.Gf7U1T);
    cResult[6] = stringResult;
    cResult[7] = stringResult1;
    tmp12 = stringResult1;
  } else {
    class I {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { action_type: metroImportAll.SKIP_STEP, action_location: metroImportDefault.ALERT };
        obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
        const obj3 = PushNotificationActionCreators;
        const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
        const obj4 = NotificationPermissionUtil;
        const result1 = obj4.enableProvisionalPushNotification();
        if (onComplete != null) {
          tmp4(true);
        }
      }
    }
    tmp12 = cResult[7];
  }
  if (cResult[8] === tmp5) {
    class I {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { action_type: metroImportAll.SKIP_STEP, action_location: metroImportDefault.ALERT };
        obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
        const obj3 = PushNotificationActionCreators;
        const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
        const obj4 = NotificationPermissionUtil;
        const result1 = obj4.enableProvisionalPushNotification();
        if (onComplete != null) {
          tmp4(true);
        }
      }
    }
  }
  cResult[8] = tmp5;
  cResult[9] = tmp6;
  cResult[10] = tmp7;
  cResult[11] = jsx(NewUserPermissionsOnboardingDefault, { onAllow: tmp5, onDontAllow: tmp6, header: tmp7, title: tmp11, subtitle: tmp12 });
  jsx(NewUserPermissionsOnboardingDefault, { onAllow: tmp5, onDontAllow: tmp6, header: tmp7, title: tmp11, subtitle: tmp12 });
}) : (function RedesignNotificationModal(onComplete) {
  let intl;
  let intl2;
  onComplete = onComplete.onComplete;
  const tmp = closure_11();
  const items = [onComplete];
  const items1 = [onComplete];
  const callback = react.useCallback(() => {
    const obj = NotificationPermissionUtil;
    const pushNotificationPermission = obj.requestPushNotificationPermission(metroImportAll.ALLOW_TO_REQUEST, metroImportDefault.ALERT, () => {
      if (onComplete != null) {
        tmp();
      }
    });
  }, items);
  const callback1 = react.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { action_type: metroImportAll.SKIP_STEP, action_location: metroImportDefault.ALERT };
    obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
    const obj3 = PushNotificationActionCreators;
    const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
    const obj4 = NotificationPermissionUtil;
    const result1 = obj4.enableProvisionalPushNotification();
    if (onComplete != null) {
      tmp4(true);
    }
  }, items1);
  let obj2 = { onAllow: callback, onDontAllow: callback1, header: null, title: intl.string(onComplete(1126).t["3nx0b5"]), subtitle: intl2.string(onComplete(1126).t.Gf7U1T) };
  let obj3 = { resizeMode: "contain", style: tmp.notificationHeaderImage, source: AssetRegistryDefault };
  const tmp4 = NewUserPermissionsOnboardingDefault;
  intl = onComplete(1126).intl;
  intl2 = onComplete(1126).intl;
  return <closure_5 style={tmp.container}>{null}</closure_5>;
});
let closure_12 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignNotificationScreen(route) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  const onComplete = route.route.params.onComplete;
  if (cResult[0] !== onComplete) {
    const tmp5 = <closure_12 onComplete={onComplete} />;
    cResult[0] = onComplete;
    cResult[1] = tmp5;
    tmp2 = tmp5;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function RedesignNotificationScreen(onComplete) {
  return <closure_12 onComplete={arg0.route.params.onComplete} />;
});
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/RedesignNotificationModal.tsx");

export default tmp4;
export const RedesignNotificationScreen = tmp5;
