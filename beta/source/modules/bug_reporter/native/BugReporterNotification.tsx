// Module ID: 9643
// Function ID: 9644
// Name: BugReporterNotification
// Dependencies: [19, 17, 9644, 1074, 21, 4836, 576, 9630, 9566, 9554, 5039, 9556, 9645, 1981, 6800, 2]
// Exports: BugReporterNotification

// Module 9643 (BugReporterNotification)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 9554 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 9556 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BugReportStore from "BugReportStore" /* 9644 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { preview: size, rightAccessoryContainer: obj2 };
size = { height: 64, width: 32, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { marginLeft: nativeDefault.space.PX_12 };
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/bug_reporter/native/BugReporterNotification.tsx");

export const BugReporterNotification = function BugReporterNotification(notification) {
  notification = notification.notification;
  const tmp = closure_9();
  let obj2 = { source: { uri: notification.imageUri }, style: tmp.preview };
  const memo = react.useMemo(() => ({ type: "simple", text: "Bug Catcher Clyde" }), []);
  const tmp3 = <closure_5 style={tmp.rightAccessoryContainer}>{null}</closure_5>;
  const NotificationPressable = notification(9630).NotificationPressable;
  return <NotificationPressable header={memo} rightAccessory={tmp3} onPress={function onPress() {
    const obj = BugReportStore;
    if (!BugReportStore.getField("isReportOpen")) {
      const obj9 = { type: null, dismissReason: "notification_clicked", inAppNotificationId: null };
      ({ type: obj3.type, inAppNotificationId: obj3.inAppNotificationId } = notification);
      const obj2 = InAppNotificationUtils;
      obj2.trackDismissed(obj9);
      const obj4 = ModalActionCreatorsDefault;
      obj4.popAll();
      const obj5 = InAppNotificationActionCreatorsDefault;
      obj5.clearNotification();
      obj.setState({ isReportOpen: true });
      const obj10 = { screenshotUri: null, screenshot: null };
      ({ imageUri: obj7.screenshotUri, image: obj7.screenshot } = notification);
      const obj6 = ModalActionCreatorsDefault;
      obj6.pushLazy(asyncRequire(9645, dependencyMap.paths), obj10);
    }
  }} onSettingsPress={function onSettingsPress() {
    const obj = notification(dependencyMap[14]);
    const obj2 = { screen: constants.OVERVIEW };
    obj.openUserSettings(obj2);
  }} notification={notification}>{null}</NotificationPressable>;
};
