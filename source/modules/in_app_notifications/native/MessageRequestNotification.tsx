// Module ID: 10093
// Function ID: 10094
// Name: MessageRequestInAppNotification
// Dependencies: [19, 21, 1236, 9656, 4107, 9738, 1297, 9674, 2]
// Exports: default

// Module 10093 (MessageRequestInAppNotification)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getSystemLocale").fileFinishedImporting("modules/in_app_notifications/native/MessageRequestNotification.tsx");

export default function MessageRequestInAppNotification(notification) {
  notification = notification.notification;
  let author;
  let numMutualGuilds;
  author = notification.author;
  numMutualGuilds = notification.numMutualGuilds;
  const items = [author.username, numMutualGuilds];
  const memo = React.useMemo(() => {
    let obj = { type: "simple", text: null };
    const intl = author(outer1_2[2]).intl;
    obj = { name: author.username, count: numMutualGuilds };
    obj[1] = intl.formatToPlainString(author(outer1_2[2]).t.LeYU4d, obj);
    return obj;
  }, items);
  const callback = React.useCallback(() => {
    numMutualGuilds(9656).clearNotification();
    const obj = numMutualGuilds(9656);
    const rootNavigationRef = author(4107).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  let obj = { icon: null, header: null, children: null, onPress: null, notification: null };
  obj = { user: author, size: null, guildId: "Array" };
  obj[1] = author(1297).AvatarSizes.NORMAL;
  obj[0] = jsx(author(1297).Avatar, { user: author, size: null, guildId: "Array" });
  obj[1] = memo;
  obj = { text: null };
  let intl = author(1236).intl;
  obj[0] = intl.string(author(1236).t["Bx4/Lf"]);
  obj[2] = jsx(author(9674).SystemMessageText, { text: null });
  obj[3] = callback;
  obj[4] = notification;
  return jsx(author(9738).NotificationPressable, { text: null });
};
