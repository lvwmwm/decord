// Module ID: 10281
// Function ID: 79466
// Name: BugReporterNotification
// Dependencies: [31, 27, 10282, 653, 33, 4131, 689, 10272, 10217, 10199, 4338, 10198, 10283, 1935, 6554, 2]
// Exports: BugReporterNotification

// Module 10281 (BugReporterNotification)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import zustandStore from "zustandStore";
import { UserSettingsSections } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 64, width: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.preview = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.rightAccessoryContainer = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("zustandStore").fileFinishedImporting("modules/bug_reporter/native/BugReporterNotification.tsx");

export const BugReporterNotification = function BugReporterNotification(notification) {
  notification = notification.notification;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.rightAccessoryContainer };
  obj = { source: { uri: notification.imageUri }, style: tmp.preview };
  const memo = React.useMemo(() => ({ type: "simple", text: "Bug Catcher Clyde" }), []);
  obj.children = <closure_4 source={{ uri: notification.imageUri }} style={tmp.preview} />;
  obj = { header: memo, children: jsx(notification(10217).SystemMessageText, { text: "Bzzz! Found a bug? Tap to submit." }) };
  obj.rightAccessory = <closure_5 header={memo}>{jsx(notification(10217).SystemMessageText, { text: "Bzzz! Found a bug? Tap to submit." })}</closure_5>;
  obj.onPress = function onPress() {
    if (!outer1_6.getField("isReportOpen")) {
      let obj = notification(outer1_2[9]);
      obj = { type: notification.type, dismissReason: "notification_clicked", inAppNotificationId: notification.inAppNotificationId };
      obj.trackDismissed(obj);
      outer1_1(outer1_2[10]).popAll();
      const obj3 = outer1_1(outer1_2[10]);
      outer1_1(outer1_2[11]).clearNotification();
      obj = { isReportOpen: true };
      outer1_6.setState(obj);
      const obj4 = outer1_1(outer1_2[11]);
      ({ imageUri: obj7.screenshotUri, image: obj7.screenshot } = notification);
      outer1_1(outer1_2[10]).pushLazy(notification(outer1_2[13])(outer1_2[12], outer1_2.paths), {});
      const obj1 = {};
      const obj6 = outer1_1(outer1_2[10]);
    }
  };
  obj.onSettingsPress = function onSettingsPress() {
    let obj = notification(outer1_2[14]);
    obj = { screen: outer1_7.OVERVIEW };
    obj.openUserSettings(obj);
  };
  obj.notification = notification;
  return jsx(notification(10272).NotificationPressable, { header: memo, children: jsx(notification(10217).SystemMessageText, { text: "Bzzz! Found a bug? Tap to submit." }) });
};
