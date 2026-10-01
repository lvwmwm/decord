// Module ID: 9639
// Function ID: 9640
// Name: MessageFailedToSendNotification
// Dependencies: [19, 17, 21, 4836, 576, 1115, 4847, 4763, 9630, 9640, 9566, 2]

// Module 9639 (MessageFailedToSendNotification)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import flow_Client from "flow/Client" /* 4763 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { iconContainer: size };
size = { width: 40, height: 40, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.md };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo(function MessageFailedToSendNotification(notification) {
  let intl;
  let intl2;
  notification = notification.notification;
  let channelId;
  let obj = { type: "simple", text: intl.string(channelId(1115).t.Q0x94X) };
  const tmp = closure_6();
  intl = channelId(1115).intl;
  channelId = notification.channelId;
  const messageId = notification.messageId;
  const items = [channelId, messageId];
  const callback = react.useCallback(() => {
    const obj = transitionToChannel;
    const obj2 = { jumpType: flow_Client.JumpType.INSTANT };
    obj.transitionToMessage(channelId, messageId, obj2);
  }, items);
  const NotificationPressable = channelId(9630).NotificationPressable;
  ({ size: "md", color: messageId(576).colors.ICON_SUBTLE });
  const RetryIcon = channelId(9640).RetryIcon;
  ({ text: intl2.string(channelId(1115).t.xxRPOT) });
  const SystemMessageText = channelId(9566).SystemMessageText;
  intl2 = channelId(1115).intl;
  return <NotificationPressable icon={null} header={obj} onPress={callback} notification={notification}>{null}</NotificationPressable>;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageFailedToSendNotification.tsx");

export default memoResult;
