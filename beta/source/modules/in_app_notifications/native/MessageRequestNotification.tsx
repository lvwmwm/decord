// Module ID: 11720
// Function ID: 11721
// Name: MessageRequestNotification
// Dependencies: [19, 21, 1112, 11115, 5090, 11160, 1186, 11123, 2]
// Exports: default

// Module 11720 (MessageRequestNotification)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageRequestNotification.tsx");

export default function MessageRequestInAppNotification(notification) {
  let intl;
  notification = notification.notification;
  const author = notification.author;
  const numMutualGuilds = notification.numMutualGuilds;
  const items = [author.username, numMutualGuilds];
  const memo = react.useMemo(() => {
    let intl;
    const obj = { type: "simple", text: intl.formatToPlainString(intl2.t.LeYU4d, obj2) };
    intl = intl2.intl;
    return obj;
  }, items);
  const callback = react.useCallback(() => {
    const obj = numMutualGuilds(dependencyMap[3]);
    obj.clearNotification();
    const obj2 = author(dependencyMap[4]);
    const rootNavigationRef = obj2.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  const NotificationPressable = author(11160).NotificationPressable;
  let obj2 = { user: author, size: author(1186).AvatarSizes.NORMAL, guildId: "Array" };
  const Avatar = author(1186).Avatar;
  ({ text: intl.string(author(1112).t["Bx4/Lf"]) });
  const SystemMessageText = author(11123).SystemMessageText;
  intl = author(1112).intl;
  return <NotificationPressable icon={null} header={memo} onPress={callback} notification={notification}>{null}</NotificationPressable>;
};
