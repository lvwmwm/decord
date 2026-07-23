// Module ID: 10355
// Function ID: 79907
// Dependencies: [31, 27, 10237, 653, 33, 4130, 689, 10356, 4337, 10235, 5796, 10310, 4126, 2]

// Module 10355
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { NOTIFICATION_PREVIEW_LINE_CLAMP as closure_5 } from "set";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ InAppNotificationTypes: closure_6, UserSettingsSections: closure_7 } = ME);
let obj = {};
obj = { width: 48, height: 48, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center" };
obj.iconContainer = obj;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function RestrictedHoursWarningNotification(notification) {
  notification = notification.notification;
  const type = notification.type;
  let obj = { style: callback().iconContainer };
  obj = { size: "sm", color: type(689).colors.WHITE };
  obj.children = jsx(notification(10356).ThemeDarkIcon, { size: "sm", color: type(689).colors.WHITE });
  const items = [notification.title];
  const items1 = [type];
  const memo = importAllResult.useMemo(() => ({ type: "simple", text: notification.title }), items);
  callback = importAllResult.useCallback(() => {
    if (type === outer1_6.RESTRICTED_SCHEDULE_UPDATED) {
      let obj = type(outer1_2[8]);
      obj.popAll();
      type(outer1_2[9]).clearNotification();
      const obj2 = type(outer1_2[9]);
    }
    obj = { screen: outer1_7.FAMILY_CENTER };
    notification(outer1_2[10]).openUserSettings(obj);
  }, items1);
  obj = { icon: <View size="sm" color={type(689).colors.WHITE} />, header: memo };
  const obj1 = { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp: closure_5, children: notification.subtitle };
  obj.children = jsx(notification(4126).Text, { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp: closure_5, children: notification.subtitle });
  obj.onPress = callback;
  obj.notification = notification;
  return jsx(notification(10310).NotificationPressable, { icon: <View size="sm" color={type(689).colors.WHITE} />, header: memo });
});
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/RestrictedHoursWarningNotification.tsx");

export default memoResult;
