// Module ID: 15624
// Function ID: 15625
// Name: RedesignNotificationModal
// Dependencies: [19, 17, 11902, 11903, 1074, 21, 4836, 576, 11904, 1241, 11905, 12185, 15625, 1115, 2]
// Exports: RedesignNotificationScreen

// Module 15624 (RedesignNotificationModal)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 11902 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 11904 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 11905 */;
import NewUserPermissionsOnboardingDefault from "NewUserPermissionsOnboarding" /* 12185 */;
import AssetRegistryDefault from "AssetRegistry" /* 15625 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 11903 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
class RedesignNotificationModal {
  constructor(onComplete) {
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
    let obj2 = { onAllow: callback, onDontAllow: callback1, header: null, title: intl.string(onComplete(1115).t["3nx0b5"]), subtitle: intl2.string(onComplete(1115).t.Gf7U1T) };
    let obj3 = { resizeMode: "contain", style: tmp.notificationHeaderImage, source: AssetRegistryDefault };
    const tmp4 = NewUserPermissionsOnboardingDefault;
    intl = onComplete(1115).intl;
    intl2 = onComplete(1115).intl;
    return <closure_5 style={tmp.container}>{null}</closure_5>;
  }
}
({ Image: closure_4, View: hasOwnProperty } = react_native);
const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
({ EventActionLocation: metroImportDefault, EventActionType: metroImportAll } = NotificationPermissionConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let obj = { container: obj2, notificationHeaderImage: { position: "absolute", alignSelf: "center", zIndex: 2, top: -140, height: 156, width: 150 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: -nativeDefault.space.PX_48 };
const unpackModuleId = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/RedesignNotificationModal.tsx");

export default RedesignNotificationModal;
export const RedesignNotificationScreen = function RedesignNotificationScreen(onComplete) {
  return <RedesignNotificationModal onComplete={arg0.route.params.onComplete} />;
};
