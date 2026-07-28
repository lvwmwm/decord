// Module ID: 10320
// Function ID: 79592
// Dependencies: [31, 27, 33, 4165, 689, 1212, 4173, 4097, 10313, 9949, 10258, 2]

// Module 10320
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = {};
obj = { width: 40, height: 40, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj.iconContainer = obj;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function MessageFailedToSendNotification(notification) {
  notification = notification.notification;
  let obj = { type: "simple" };
  const intl = channelId(1212).intl;
  obj.text = intl.string(channelId(1212).t.Q0x94X);
  channelId = notification.channelId;
  const messageId = notification.messageId;
  const items = [channelId, messageId];
  const callback = importAllResult.useCallback(() => {
    let obj = channelId(outer1_2[6]);
    obj = { jumpType: channelId(outer1_2[7]).JumpType.INSTANT };
    obj.transitionToMessage(channelId, messageId, obj);
  }, items);
  obj = {};
  obj = { style: callback().iconContainer };
  const obj1 = { size: "md", color: messageId(689).colors.ICON_SUBTLE };
  obj.children = jsx(channelId(9949).RetryIcon, { size: "md", color: messageId(689).colors.ICON_SUBTLE });
  obj.icon = <View style={callback().iconContainer} />;
  const obj2 = {};
  const intl2 = channelId(1212).intl;
  obj2.text = intl2.string(channelId(1212).t.xxRPOT);
  obj.children = jsx(channelId(10258).SystemMessageText, {});
  obj.header = obj;
  obj.onPress = callback;
  obj.notification = notification;
  return jsx(channelId(10313).NotificationPressable, { style: callback().iconContainer });
});
const result = require("jsxProd").fileFinishedImporting("modules/in_app_notifications/native/MessageFailedToSendNotification.tsx");

export default memoResult;
