// Module ID: 10540
// Function ID: 10541
// Name: MessageFailedToSendNotification
// Dependencies: [19, 17, 21, 4917, 575, 1112, 6000, 6658, 10531, 10541, 10492, 2]

// Module 10540 (MessageFailedToSendNotification)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import transitionToChannel from "transitionToChannel" /* 6000 */;
import flow_Client from "flow/Client" /* 6658 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4917 */;
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
  let obj = { type: "simple", text: intl.string(channelId(1112).t.Q0x94X) };
  const tmp = closure_6();
  intl = channelId(1112).intl;
  channelId = notification.channelId;
  const messageId = notification.messageId;
  const items = [channelId, messageId];
  const callback = react.useCallback(() => {
    const obj = transitionToChannel;
    const obj2 = { jumpType: flow_Client.JumpType.INSTANT };
    obj.transitionToMessage(channelId, messageId, obj2);
  }, items);
  const NotificationPressable = channelId(10531).NotificationPressable;
  ({ size: "md", color: messageId(575).colors.ICON_SUBTLE });
  const RetryIcon = channelId(10541).RetryIcon;
  ({ text: intl2.string(channelId(1112).t.xxRPOT) });
  const SystemMessageText = channelId(10492).SystemMessageText;
  intl2 = channelId(1112).intl;
  return <NotificationPressable icon={null} header={obj} onPress={callback} notification={notification}>{null}</NotificationPressable>;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageFailedToSendNotification.tsx");

export default memoResult;
