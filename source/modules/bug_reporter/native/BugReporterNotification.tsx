// Module ID: 10305
// Function ID: 79535
// Name: BugReporterNotification
// Dependencies: []
// Exports: BugReporterNotification

// Module 10305 (BugReporterNotification)
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const UserSettingsSections = arg1(dependencyMap[3]).UserSettingsSections;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { y: "<string:16956481>", isArray: "<string:553216>", borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.preview = obj;
const tmp2 = arg1(dependencyMap[1]);
obj.rightAccessoryContainer = { marginLeft: importDefault(dependencyMap[6]).space.PX_12 };
let closure_9 = obj.createStyles(obj);
const obj1 = { marginLeft: importDefault(dependencyMap[6]).space.PX_12 };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/bug_reporter/native/BugReporterNotification.tsx");

export const BugReporterNotification = function BugReporterNotification(notification) {
  notification = notification.notification;
  const arg1 = notification;
  const tmp = callback();
  let obj = { style: tmp.rightAccessoryContainer };
  obj = { source: { uri: notification.imageUri }, style: tmp.preview };
  const memo = React.useMemo(() => ({}), []);
  obj.children = <closure_4 {...obj} />;
  obj = { header: memo, children: jsx(arg1(dependencyMap[8]).SystemMessageText, { text: "Bzzz! Found a bug? Tap to submit." }) };
  obj.rightAccessory = <closure_5 {...obj} />;
  obj.onPress = function onPress() {
    if (!store.getField("isReportOpen")) {
      let obj = notification(paths[9]);
      obj = { type: notification.type, dismissReason: "notification_clicked", inAppNotificationId: notification.inAppNotificationId };
      obj.trackDismissed(obj);
      callback(paths[10]).popAll();
      const obj3 = callback(paths[10]);
      callback(paths[11]).clearNotification();
      obj = { isReportOpen: true };
      store.setState(obj);
      const obj4 = callback(paths[11]);
      ({ imageUri: obj7.screenshotUri, image: obj7.screenshot } = notification);
      callback(paths[10]).pushLazy(notification(paths[13])(paths[12], paths.paths), {});
      const obj1 = {};
      const obj6 = callback(paths[10]);
    }
  };
  obj.onSettingsPress = function onSettingsPress() {
    let obj = notification(closure_2[14]);
    obj = { screen: constants.OVERVIEW };
    obj.openUserSettings(obj);
  };
  obj.notification = notification;
  return jsx(arg1(dependencyMap[7]).NotificationPressable, obj);
};
