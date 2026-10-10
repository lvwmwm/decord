// Module ID: 12681
// Function ID: 12682
// Name: RestrictedHoursWarningNotification
// Dependencies: [19, 17, 12576, 1085, 21, 5092, 587, 558, 576, 12682, 5934, 12577, 7093, 5088, 12614, 2]

// Module 12681 (RestrictedHoursWarningNotification)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import openUserSettings from "openUserSettings" /* 7093 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 12576 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 12577 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let clearNotificationResult, obj1, openUserSettingsResult, popAllResult, tmp2;

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
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function RestrictedHoursWarningNotification(notification) {
  let first;
  let tmp13;
  let tmp9;
  let type;
  let obj = type(576);
  const cResult = obj.c(15);
  notification = notification.notification;
  const tmp4 = closure_9();
  type = notification.type;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const ThemeDarkIcon = tmp(12682).ThemeDarkIcon;
    const tmp8 = <ThemeDarkIcon size="sm" color={nativeDefault.colors.WHITE} />;
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.iconContainer) {
    const tmp12 = <View style={tmp4.iconContainer}>{first}</View>;
    cResult[1] = tmp4.iconContainer;
    cResult[2] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== notification.title) {
    let obj4 = { type: "simple", text: notification.title };
    cResult[3] = notification.title;
    cResult[4] = obj4;
    tmp13 = obj4;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== type) {
    class N {
      constructor() {
        if (type === InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[10]);
          popAllResult = obj.popAll();
          obj2 = closure_1(closure_2[11]);
          clearNotificationResult = obj2.clearNotification();
        }
        obj3 = closure_0(closure_2[12]);
        obj1 = { screen: UserSettingsSections.FAMILY_CENTER };
        openUserSettingsResult = obj3.openUserSettings(obj1);
        return;
      }
    }
    cResult[5] = type;
    cResult[6] = N;
  } else {
    class N {
      constructor() {
        if (type === InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[10]);
          popAllResult = obj.popAll();
          obj2 = closure_1(closure_2[11]);
          clearNotificationResult = obj2.clearNotification();
        }
        obj3 = closure_0(closure_2[12]);
        obj1 = { screen: UserSettingsSections.FAMILY_CENTER };
        openUserSettingsResult = obj3.openUserSettings(obj1);
        return;
      }
    }
  }
  if (cResult[7] !== notification.subtitle) {
    class N {
      constructor() {
        if (type === InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[10]);
          popAllResult = obj.popAll();
          obj2 = closure_1(closure_2[11]);
          clearNotificationResult = obj2.clearNotification();
        }
        obj3 = closure_0(closure_2[12]);
        obj1 = { screen: UserSettingsSections.FAMILY_CENTER };
        openUserSettingsResult = obj3.openUserSettings(obj1);
        return;
      }
    }
    cResult[7] = notification.subtitle;
    cResult[8] = jsx(type(5088).Text, { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp, children: notification.subtitle });
    const tmp17 = jsx(type(5088).Text, { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp, children: notification.subtitle });
  } else {
    class N {
      constructor() {
        if (type === InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[10]);
          popAllResult = obj.popAll();
          obj2 = closure_1(closure_2[11]);
          clearNotificationResult = obj2.clearNotification();
        }
        obj3 = closure_0(closure_2[12]);
        obj1 = { screen: UserSettingsSections.FAMILY_CENTER };
        openUserSettingsResult = obj3.openUserSettings(obj1);
        return;
      }
    }
  }
  if (cResult[9] === tmp13) {
    class N {
      constructor() {
        if (type === InAppNotificationTypes.RESTRICTED_SCHEDULE_UPDATED) {
          tmp = closure_1;
          tmp2 = closure_2;
          obj = closure_1(closure_2[10]);
          popAllResult = obj.popAll();
          obj2 = closure_1(closure_2[11]);
          clearNotificationResult = obj2.clearNotification();
        }
        obj3 = closure_0(closure_2[12]);
        obj1 = { screen: UserSettingsSections.FAMILY_CENTER };
        openUserSettingsResult = obj3.openUserSettings(obj1);
        return;
      }
    }
  }
  cResult[9] = tmp13;
  cResult[10] = tmp9;
  cResult[11] = notification;
  cResult[12] = tmp14;
  cResult[13] = tmp15;
  cResult[14] = jsx(type(12614).NotificationPressable, { icon: tmp9, header: tmp13, children: tmp15, onPress: tmp14, notification });
  jsx(type(12614).NotificationPressable, { icon: tmp9, header: tmp13, children: tmp15, onPress: tmp14, notification });
}) : (function RestrictedHoursWarningNotification(notification) {
  notification = notification.notification;
  const type = notification.type;
  let obj2 = { size: "sm", color: type(587).colors.WHITE };
  const ThemeDarkIcon = notification(12682).ThemeDarkIcon;
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
  const NotificationPressable = notification(12614).NotificationPressable;
  let obj4 = { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp, children: notification.subtitle };
  return <NotificationPressable icon={tmp} header={memo} onPress={callback} notification={notification}>{null}</NotificationPressable>;
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/in_app_notifications/native/RestrictedHoursWarningNotification.tsx");

export default memoResult;
