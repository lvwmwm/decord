// Module ID: 16333
// Function ID: 16334
// Name: RedesignNotificationModal
// Dependencies: [19, 17, 12692, 12693, 1074, 21, 4788, 576, 12694, 1241, 12695, 12970, 16334, 1115, 2]
// Exports: RedesignNotificationScreen

// Module 16333 (RedesignNotificationModal)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 12694 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 12695 */;
import NewUserPermissionsOnboardingDefault from "NewUserPermissionsOnboarding" /* 12970 */;
import _modDef16334 from "module_16334" /* 16334 */;
import noop from "module_19" /* 19 */;

require = fn;
class RedesignNotificationModal {
  constructor(arg0) {
    onComplete = global.onComplete;
    tmp = closure_11();
    items = [];
    items[0] = onComplete;
    items1 = [];
    items1[0] = onComplete;
    callback = closure_3.useCallback(() => {
      const pushNotificationPermission = NotificationPermissionUtil.requestPushNotificationPermission(constants2.ALLOW_TO_REQUEST, constants.ALERT, () => {
        if (onComplete != null) {
          tmp();
        }
      });
    }, items);
    obj = { style: tmp.container, children: null };
    callback1 = closure_3.useCallback(() => {
      AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, { action_type: constants2.SKIP_STEP, action_location: constants.ALERT });
      const obj2 = { action_type: constants2.SKIP_STEP, action_location: constants.ALERT };
      const result = PushNotificationActionCreators.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
      const result1 = NotificationPermissionUtil.enableProvisionalPushNotification();
      if (onComplete != null) {
        tmp4(true);
      }
    }, items1);
    obj1 = { onAllow: callback, onDontAllow: callback1, header: null, title: null, subtitle: null };
    obj4 = { resizeMode: "contain", style: tmp.notificationHeaderImage, source: null };
    tmp4 = closure_1(closure_2[11]);
    obj4.source = closure_1(closure_2[12]);
    obj1.header = jsx(Image, obj4);
    intl = onComplete(closure_2[13]).intl;
    obj1.title = intl.string(onComplete(closure_2[13]).t["3nx0b5"]);
    intl2 = onComplete(closure_2[13]).intl;
    obj1.subtitle = intl2.string(onComplete(closure_2[13]).t.Gf7U1T);
    obj.children = jsx(tmp4, obj1);
    return jsx(View, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const PermissionStateType = fn(12692).PermissionStateType;
const NotificationPermissionConstants = fn(12693);
({ EventActionLocation: closure_7, EventActionType: closure_8 } = NotificationPermissionConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4788);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: -nativeDefault.space.PX_48 }, notificationHeaderImage: { position: "absolute", alignSelf: "center", zIndex: 2, top: -140, height: 156, width: 150 } };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/RedesignNotificationModal.tsx");

export default RedesignNotificationModal;
export const RedesignNotificationScreen = function RedesignNotificationScreen(onComplete) {
  return <RedesignNotificationModal onComplete={arg0.route.params.onComplete} />;
};
