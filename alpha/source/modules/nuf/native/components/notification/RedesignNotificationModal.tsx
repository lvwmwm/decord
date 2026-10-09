// Module ID: 16336
// Function ID: 16337
// Name: RedesignNotificationModal
// Dependencies: [19, 17, 12077, 12078, 1085, 21, 5091, 587, 558, 576, 12079, 1265, 12080, 16337, 1126, 12366, 2]

// Module 16336 (RedesignNotificationModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12077 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 12079 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 12080 */;
import NewUserPermissionsOnboardingDefault from "NewUserPermissionsOnboarding" /* 12366 */;
import react from "react" /* 19 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 12078 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
({ EventActionLocation: metroRequire, EventActionType: metroImportDefault } = NotificationPermissionConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: nativeDefault.space.PX_48 };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignNotificationModal(onComplete) {
  let obj2;
  let tmp10;
  let tmp15;
  let tmp5;
  let tmp7;
  let tmp9;
  const tmp = onComplete;
  let obj = onComplete(576);
  const cResult = obj.c(13);
  onComplete = onComplete.onComplete;
  const tmp4 = closure_10();
  if (cResult[0] !== onComplete) {
    const fn = function l() {
      const obj = NotificationPermissionUtil;
      const pushNotificationPermission = obj.requestPushNotificationPermission(metroImportDefault.ALLOW_TO_REQUEST, metroRequire.ALERT, () => {
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
    class R {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { action_type: metroImportDefault.SKIP_STEP, action_location: metroRequire.ALERT };
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
    cResult[3] = R;
  } else {
    class R {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { action_type: metroImportDefault.SKIP_STEP, action_location: metroRequire.ALERT };
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
  const container = tmp4.container;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { action_type: metroImportDefault.SKIP_STEP, action_location: metroRequire.ALERT };
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
    const tmp8 = jsx(tmp(16337).BellSpotIllustration, { width: 245, accessible: false });
    cResult[4] = tmp8;
    tmp7 = tmp8;
  } else {
    class R {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { action_type: metroImportDefault.SKIP_STEP, action_location: metroRequire.ALERT };
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
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { action_type: metroImportDefault.SKIP_STEP, action_location: metroRequire.ALERT };
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
    const stringResult = obj2.string(tmp(1126).t["3nx0b5"]);
    const intl = tmp(1126).intl;
    const stringResult1 = intl.string(tmp(1126).t.Gf7U1T);
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    tmp10 = stringResult1;
    tmp9 = stringResult;
  } else {
    class R {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { action_type: metroImportDefault.SKIP_STEP, action_location: metroRequire.ALERT };
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
    tmp10 = cResult[6];
  }
  if (cResult[7] === tmp5) {
    class R {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { action_type: metroImportDefault.SKIP_STEP, action_location: metroRequire.ALERT };
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
    if (cResult[10] === tmp4.container) {
      class R {
        constructor() {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { action_type: metroImportDefault.SKIP_STEP, action_location: metroRequire.ALERT };
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
      return tmp15;
    }
    const tmp18 = <View style={container}>{tmp13}</View>;
    cResult[10] = tmp4.container;
    cResult[11] = tmp13;
    cResult[12] = tmp18;
    tmp15 = tmp18;
  }
  cResult[7] = tmp5;
  cResult[8] = tmp6;
  cResult[9] = jsx(NewUserPermissionsOnboardingDefault, { onAllow: tmp5, onDontAllow: tmp6, header: tmp7, headerInsideCard: true, title: tmp9, subtitle: tmp10 });
  const tmp14 = jsx(NewUserPermissionsOnboardingDefault, { onAllow: tmp5, onDontAllow: tmp6, header: tmp7, headerInsideCard: true, title: tmp9, subtitle: tmp10 });
}) : (function RedesignNotificationModal(onComplete) {
  let intl;
  let intl2;
  onComplete = onComplete.onComplete;
  const items = [onComplete];
  const tmp = closure_10();
  const items1 = [onComplete];
  const callback = react.useCallback(() => {
    const obj = NotificationPermissionUtil;
    const pushNotificationPermission = obj.requestPushNotificationPermission(metroImportDefault.ALLOW_TO_REQUEST, metroRequire.ALERT, () => {
      if (onComplete != null) {
        tmp();
      }
    });
  }, items);
  const callback1 = react.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { action_type: metroImportDefault.SKIP_STEP, action_location: metroRequire.ALERT };
    obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj2);
    const obj3 = PushNotificationActionCreators;
    const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
    const obj4 = NotificationPermissionUtil;
    const result1 = obj4.enableProvisionalPushNotification();
    if (onComplete != null) {
      tmp4(true);
    }
  }, items1);
  let obj2 = { onAllow: callback, onDontAllow: callback1, header: null, headerInsideCard: true, title: intl.string(onComplete(1126).t["3nx0b5"]), subtitle: intl2.string(onComplete(1126).t.Gf7U1T) };
  const tmp4 = NewUserPermissionsOnboardingDefault;
  intl = onComplete(1126).intl;
  intl2 = onComplete(1126).intl;
  return <View style={tmp.container}>{null}</View>;
});
let closure_11 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignNotificationScreen(route) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  const onComplete = route.route.params.onComplete;
  if (cResult[0] !== onComplete) {
    const tmp5 = <closure_11 onComplete={onComplete} />;
    cResult[0] = onComplete;
    cResult[1] = tmp5;
    tmp2 = tmp5;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function RedesignNotificationScreen(onComplete) {
  return <closure_11 onComplete={arg0.route.params.onComplete} />;
});
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/RedesignNotificationModal.tsx");

export default tmp3;
export const RedesignNotificationScreen = tmp4;
