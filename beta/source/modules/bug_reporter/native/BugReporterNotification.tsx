// Module ID: 13007
// Function ID: 13008
// Name: BugReporterNotification
// Dependencies: [19, 17, 13008, 1078, 21, 4758, 580, 13000, 12970, 12959, 4961, 12961, 13009, 1984, 7626, 2]
// Exports: BugReporterNotification

// Module 13007 (BugReporterNotification)
import nativeDefault from "native" /* 580 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 12959 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 12961 */;
import noop from "module_19" /* 19 */;
import BugReportStore from "BugReportStore" /* 13008 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const UserSettingsSections = fn(1078).UserSettingsSections;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
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
  return jsx(notification(13000).NotificationPressable, {
    header: memo,
    children: jsx(notification(12970).SystemMessageText, { text: "Bzzz! Found a bug? Tap to submit." }),
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
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13009, dependencyMap.paths), { screenshotUri: null, screenshot: null });
        const obj10 = { screenshotUri: null, screenshot: null };
      }
    },
    onSettingsPress() {
      notification(dependencyMap[14]).openUserSettings({ screen: constants.OVERVIEW });
    },
    notification
  });
};
