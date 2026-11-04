// Module ID: 11086
// Function ID: 11087
// Name: BugReporterNotification
// Dependencies: [19, 17, 11087, 1072, 21, 5014, 575, 5717, 11076, 11037, 11022, 6744, 11024, 11088, 1994, 7563, 2]
// Exports: BugReporterNotification

// Module 11086 (BugReporterNotification)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 11022 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 11024 */;
import react from "react" /* 19 */;
import BugReportStore from "BugReportStore" /* 11087 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let size;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { preview: size, rightAccessoryContainer: obj2 };
size = { height: 64, width: 32, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { marginLeft: nativeDefault.space.PX_12 };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/bug_reporter/native/BugReporterNotification.tsx");

export function BugReporterNotification(notification) {
  notification = notification.notification;
  const tmp = closure_8();
  const imageUri = notification.imageUri;
  const memo = react.useMemo(() => ({ type: "simple", text: "Bug Catcher Clyde" }), []);
  let obj2 = { source: { uri: imageUri }, style: tmp.preview };
  const tmp3 = <View style={tmp.rightAccessoryContainer}>{null}</View>;
  const NotificationPressable = notification(11076).NotificationPressable;
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
      obj6.pushLazy(asyncRequire(11088, dependencyMap.paths), obj10);
    }
  }} onSettingsPress={function onSettingsPress() {
    const obj = notification(dependencyMap[15]);
    const obj2 = { screen: constants.OVERVIEW };
    obj.openUserSettings(obj2);
  }} notification={notification}>{null}</NotificationPressable>;
}
