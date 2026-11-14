// Module ID: 18704
// Function ID: 18705
// Name: RedesignNotificationModal
// Dependencies: [19, 17, 14825, 14826, 1072, 21, 5306, 575, 14827, 1256, 14828, 15005, 18705, 1113, 2]
// Exports: RedesignNotificationScreen

// Module 18704 (RedesignNotificationModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14825 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 14827 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 14828 */;
import NewUserPermissionsOnboardingDefault from "NewUserPermissionsOnboarding" /* 15005 */;
import react from "react" /* 19 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 14826 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
class RedesignNotificationModal {
  constructor(onComplete) {
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
    let obj2 = { onAllow: callback, onDontAllow: callback1, header: null, headerInsideCard: true, title: intl.string(onComplete(1113).t["3nx0b5"]), subtitle: intl2.string(onComplete(1113).t.Gf7U1T) };
    const tmp4 = NewUserPermissionsOnboardingDefault;
    intl = onComplete(1113).intl;
    intl2 = onComplete(1113).intl;
    return <View style={tmp.container}>{null}</View>;
  }
}
const View = react_native.View;
const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
({ EventActionLocation: metroRequire, EventActionType: metroImportDefault } = NotificationPermissionConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: nativeDefault.space.PX_48 };
const authStore = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/RedesignNotificationModal.tsx");

export default RedesignNotificationModal;
export function RedesignNotificationScreen(onComplete) {
  return <RedesignNotificationModal onComplete={arg0.route.params.onComplete} />;
}
