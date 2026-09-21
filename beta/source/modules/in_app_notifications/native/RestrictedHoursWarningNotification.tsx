// Module ID: 13027
// Function ID: 13028
// Name: RestrictedHoursWarningNotification
// Dependencies: [19, 17, 12960, 1078, 21, 4758, 580, 558, 568, 13028, 4961, 12961, 7626, 4754, 13000, 2]

// Module 13027 (RestrictedHoursWarningNotification)
import nativeDefault from "native" /* 580 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import openUserSettings from "openUserSettings" /* 7626 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 12961 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const lineClamp = fn(12960).NOTIFICATION_PREVIEW_LINE_CLAMP;
const Constants = fn(1078);
({ InAppNotificationTypes: metroRequire, UserSettingsSections: closure_7 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj = { iconContainer: null };
let size = { width: 48, height: 48, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj.iconContainer = size;
let closure_9 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/RestrictedHoursWarningNotification.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((notification) => {
  const cResult = type(568).c(15);
  notification = notification.notification;
  const tmp4 = closure_9();
  type = notification.type;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { size: "sm", color: nativeDefault.colors.WHITE };
    const tmp8 = jsx(tmp(13028).ThemeDarkIcon, { size: "sm", color: nativeDefault.colors.WHITE });
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.iconContainer) {
    const obj3 = { style: tmp4.iconContainer, children: first };
    const tmp12 = <View style={tmp4.iconContainer}>{first}</View>;
    cResult[1] = tmp4.iconContainer;
    cResult[2] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== notification.title) {
    const obj4 = { type: "simple", text: notification.title };
    cResult[3] = notification.title;
    cResult[4] = obj4;
    let tmp13 = obj4;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== type) {
    const fn = function b() {
      if (type === constants.RESTRICTED_SCHEDULE_UPDATED) {
        ModalActionCreatorsDefault.popAll();
        InAppNotificationActionCreatorsDefault.clearNotification();
      }
      openUserSettings.openUserSettings({ screen: constants2.FAMILY_CENTER });
    };
    cResult[5] = type;
    cResult[6] = fn;
    let tmp14 = fn;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== notification.subtitle) {
    const obj5 = { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp, children: notification.subtitle };
    const tmp18 = jsx(tmp(4754).Text, { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp, children: notification.subtitle });
    cResult[7] = notification.subtitle;
    cResult[8] = tmp18;
    let tmp15 = tmp18;
  } else {
    tmp15 = cResult[8];
  }
  if (cResult[9] === tmp13) {
    if (cResult[10] === tmp9) {
      if (cResult[11] === notification) {
        if (cResult[12] === tmp14) {
          if (cResult[13] === tmp15) {
            let tmp19 = cResult[14];
          }
          return tmp19;
        }
      }
    }
  }
  const tmp20 = jsx(type(13000).NotificationPressable, { icon: tmp9, header: tmp13, children: tmp15, onPress: tmp14, notification });
  cResult[9] = tmp13;
  cResult[10] = tmp9;
  cResult[11] = notification;
  cResult[12] = tmp14;
  cResult[13] = tmp15;
  cResult[14] = tmp20;
  tmp19 = tmp20;
}) : ((notification) => {
  notification = notification.notification;
  const type = notification.type;
  let obj = { style: closure_9().iconContainer, children: jsx(notification(13028).ThemeDarkIcon, { size: "sm", color: type(580).colors.WHITE }) };
  const items = [notification.title];
  let obj2 = { size: "sm", color: type(580).colors.WHITE };
  const items1 = [type];
  const memo = noop.useMemo(() => ({ type: "simple", text: notification.title }), items);
  const callback = noop.useCallback(() => {
    if (type === constants.RESTRICTED_SCHEDULE_UPDATED) {
      ModalActionCreatorsDefault.popAll();
      InAppNotificationActionCreatorsDefault.clearNotification();
    }
    openUserSettings.openUserSettings({ screen: constants2.FAMILY_CENTER });
  }, items1);
  const obj3 = { icon: <View style={closure_9().iconContainer}>{jsx(notification(13028).ThemeDarkIcon, { size: "sm", color: type(580).colors.WHITE })}</View>, header: memo, children: jsx(notification(4754).Text, { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp, children: notification.subtitle }), onPress: callback, notification };
  return jsx(notification(13000).NotificationPressable, { icon: <View style={closure_9().iconContainer}>{jsx(notification(13028).ThemeDarkIcon, { size: "sm", color: type(580).colors.WHITE })}</View>, header: memo, children: jsx(notification(4754).Text, { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp, children: notification.subtitle }), onPress: callback, notification });
}));
