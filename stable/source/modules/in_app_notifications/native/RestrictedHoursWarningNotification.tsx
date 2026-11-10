// Module ID: 11188
// Function ID: 11189
// Name: RestrictedHoursWarningNotification
// Dependencies: [19, 17, 11023, 1072, 21, 5014, 575, 11189, 6744, 11024, 7563, 11076, 5624, 2]

// Module 11188 (RestrictedHoursWarningNotification)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import openUserSettings from "openUserSettings" /* 7563 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 11023 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 11024 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let size;
const View = react_native.View;
const lineClamp = InAppNotificationConstants.NOTIFICATION_PREVIEW_LINE_CLAMP;
({ InAppNotificationTypes: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
const jsx = Fragment.jsx;
let obj = { iconContainer: size };
size = { width: 48, height: 48, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
let closure_9 = createStyles.createStyles(obj);
const memoResult = react.memo(function RestrictedHoursWarningNotification(notification) {
  notification = notification.notification;
  const type = notification.type;
  let obj2 = { size: "sm", color: type(575).colors.WHITE };
  const ThemeDarkIcon = notification(11189).ThemeDarkIcon;
  const items = [notification.title];
  const items1 = [type];
  const tmp = <View style={closure_9().iconContainer}>{null}</View>;
  const memo = react.useMemo(() => ({ type: "simple", text: notification.title }), items);
  const callback = react.useCallback(() => {
    if (type === metroRequire.RESTRICTED_SCHEDULE_UPDATED) {
      const obj = ModalActionCreatorsDefault;
      obj.popAll();
      const obj2 = InAppNotificationActionCreatorsDefault;
      obj2.clearNotification();
    }
    const obj3 = openUserSettings;
    const obj4 = { screen: metroImportDefault.FAMILY_CENTER };
    obj3.openUserSettings(obj4);
  }, items1);
  const NotificationPressable = notification(11076).NotificationPressable;
  let obj4 = { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp, children: notification.subtitle };
  return <NotificationPressable icon={tmp} header={memo} onPress={callback} notification={notification}>{null}</NotificationPressable>;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/in_app_notifications/native/RestrictedHoursWarningNotification.tsx");

export default memoResult;
