// Module ID: 11585
// Function ID: 11586
// Name: MessageRequestNotification
// Dependencies: [19, 21, 1115, 10353, 4614, 10427, 1177, 10363, 2]
// Exports: default

// Module 11585 (MessageRequestNotification)
import util from "util" /* 1115 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageRequestNotification.tsx");

export default function MessageRequestInAppNotification(notification) {
  notification = notification.notification;
  const author = notification.author;
  const numMutualGuilds = notification.numMutualGuilds;
  const items = [author.username, numMutualGuilds];
  const memo = noop.useMemo(() => {
    const obj = { type: "simple", text: null };
    const intl = util.intl;
    obj.text = intl.formatToPlainString(util.t.LeYU4d, { name: author.username, count: numMutualGuilds });
    return obj;
  }, items);
  const callback = noop.useCallback(() => {
    numMutualGuilds(10353).clearNotification();
    const obj = numMutualGuilds(10353);
    const rootNavigationRef = author(4614).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  let obj = { icon: jsx(author(1177).Avatar, { user: author, size: author(1177).AvatarSizes.NORMAL, guildId: "r" }), header: memo, children: null, onPress: null, notification: null };
  const obj3 = { text: null };
  let intl = author(1115).intl;
  obj3.text = intl.string(author(1115).t["Bx4/Lf"]);
  obj.children = jsx(author(10363).SystemMessageText, { text: null });
  obj.onPress = callback;
  obj.notification = notification;
  return jsx(author(10427).NotificationPressable, { icon: jsx(author(1177).Avatar, { user: author, size: author(1177).AvatarSizes.NORMAL, guildId: "r" }), header: memo, children: null, onPress: null, notification: null });
};
