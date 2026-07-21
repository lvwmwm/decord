// Module ID: 10344
// Function ID: 79833
// Dependencies: []

// Module 10344
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = arg1(dependencyMap[2]).NOTIFICATION_PREVIEW_LINE_CLAMP;
({ InAppNotificationTypes: closure_6, UserSettingsSections: closure_7 } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
const tmp2 = arg1(dependencyMap[3]);
let obj = {};
obj = { bottom: 109907, name: 67503, description: -1699303086, accessible: 1564545433, paths: 1912603216, delete: 24, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[6]).radii.round };
obj.iconContainer = obj;
let closure_9 = arg1(dependencyMap[5]).createStyles(obj);
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function RestrictedHoursWarningNotification(notification) {
  notification = notification.notification;
  const arg1 = notification;
  const type = notification.type;
  const importDefault = type;
  let obj = { style: callback().iconContainer };
  obj = { size: "sm", color: importDefault(dependencyMap[6]).colors.WHITE };
  obj.children = jsx(arg1(dependencyMap[7]).ThemeDarkIcon, obj);
  const items = [notification.title];
  const items1 = [type];
  const memo = importAllResult.useMemo(() => ({ type: "simple", text: notification.title }), items);
  const callback = importAllResult.useCallback(() => {
    if (type === constants.RESTRICTED_SCHEDULE_UPDATED) {
      let obj = type(closure_2[8]);
      obj.popAll();
      type(closure_2[9]).clearNotification();
      const obj2 = type(closure_2[9]);
    }
    obj = { screen: constants2.FAMILY_CENTER };
    notification(closure_2[10]).openUserSettings(obj);
  }, items1);
  obj = { icon: <View {...obj} />, header: memo, children: jsx(arg1(dependencyMap[12]).Text, { lineClamp: closure_5, children: notification.subtitle }), onPress: callback, notification };
  return jsx(arg1(dependencyMap[11]).NotificationPressable, obj);
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/in_app_notifications/native/RestrictedHoursWarningNotification.tsx");

export default memoResult;
