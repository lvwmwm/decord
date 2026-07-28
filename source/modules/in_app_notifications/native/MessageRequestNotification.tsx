// Module ID: 10361
// Function ID: 79893
// Name: MessageRequestInAppNotification
// Dependencies: [31, 33, 1212, 10239, 4017, 10313, 1273, 10258, 2]
// Exports: default

// Module 10361 (MessageRequestInAppNotification)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getSystemLocale").fileFinishedImporting("modules/in_app_notifications/native/MessageRequestNotification.tsx");

export default function MessageRequestInAppNotification(notification) {
  notification = notification.notification;
  const author = notification.author;
  const numMutualGuilds = notification.numMutualGuilds;
  const items = [author.username, numMutualGuilds];
  const memo = React.useMemo(() => {
    let obj = { type: "simple" };
    const intl = author(outer1_2[2]).intl;
    obj = { name: author.username, count: numMutualGuilds };
    obj.text = intl.formatToPlainString(author(outer1_2[2]).t.LeYU4d, obj);
    return obj;
  }, items);
  const callback = React.useCallback(() => {
    numMutualGuilds(outer1_2[3]).clearNotification();
    const obj = numMutualGuilds(outer1_2[3]);
    const rootNavigationRef = author(outer1_2[4]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  let obj = {};
  obj = { user: author, size: author(1273).AvatarSizes.NORMAL, guildId: undefined };
  obj.icon = jsx(author(1273).Avatar, { user: author, size: author(1273).AvatarSizes.NORMAL, guildId: undefined });
  obj.header = memo;
  obj = {};
  let intl = author(1212).intl;
  obj.text = intl.string(author(1212).t["Bx4/Lf"]);
  obj.children = jsx(author(10258).SystemMessageText, {});
  obj.onPress = callback;
  obj.notification = notification;
  return jsx(author(10313).NotificationPressable, {});
};
