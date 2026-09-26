// Module ID: 10479
// Function ID: 10480
// Name: BugReporterNotification
// Dependencies: [19, 17, 10480, 1074, 21, 4788, 576, 10466, 10402, 10390, 4991, 10392, 10481, 1980, 7656, 2]
// Exports: BugReporterNotification

// Module 10479 (BugReporterNotification)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 10390 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 10392 */;
import noop from "module_19" /* 19 */;
import BugReportStore from "BugReportStore" /* 10480 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsx = fn(21).jsx;
const createStyles = fn(4788);
let obj2 = { preview: null, rightAccessoryContainer: null };
let size = { height: 64, width: 32, borderRadius: nativeDefault.radii.sm };
obj2.preview = size;
obj2.rightAccessoryContainer = { marginLeft: nativeDefault.space.PX_12 };
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/bug_reporter/native/BugReporterNotification.tsx");

export const BugReporterNotification = function BugReporterNotification(notification) {
  notification = notification.notification;
  const tmp = closure_9();
  const obj = { style: tmp.rightAccessoryContainer, children: null };
  const memo = noop.useMemo(() => ({ type: "simple", text: "Bug Catcher Clyde" }), []);
  obj.children = <closure_4 source={{ uri: notification.imageUri }} style={tmp.preview} />;
  let obj2 = { source: { uri: notification.imageUri }, style: tmp.preview };
  const tmp3 = <closure_5 style={tmp.rightAccessoryContainer}>{null}</closure_5>;
  return jsx(notification(10466).NotificationPressable, {
    header: memo,
    children: jsx(notification(10402).SystemMessageText, { text: "Bzzz! Found a bug? Tap to submit." }),
    rightAccessory: <closure_5 style={tmp.rightAccessoryContainer}>{null}</closure_5>,
    onPress() {
      if (!BugReportStore.getField("isReportOpen")) {
        ({ type: obj3.type, inAppNotificationId: obj3.inAppNotificationId } = notification);
        InAppNotificationUtils.trackDismissed({ type: null, dismissReason: "notification_clicked", inAppNotificationId: null });
        const obj9 = { type: null, dismissReason: "notification_clicked", inAppNotificationId: null };
        ModalActionCreatorsDefault.popAll();
        InAppNotificationActionCreatorsDefault.clearNotification();
        BugReportStore.setState({ isReportOpen: true });
        ({ imageUri: obj7.screenshotUri, image: obj7.screenshot } = notification);
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10481, dependencyMap.paths), { screenshotUri: null, screenshot: null });
        const obj10 = { screenshotUri: null, screenshot: null };
      }
    },
    onSettingsPress() {
      notification(dependencyMap[14]).openUserSettings({ screen: constants.OVERVIEW });
    },
    notification
  });
};
