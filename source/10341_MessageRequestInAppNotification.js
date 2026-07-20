// Module ID: 10341
// Function ID: 79817
// Name: MessageRequestInAppNotification
// Dependencies: []
// Exports: default

// Module 10341 (MessageRequestInAppNotification)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/in_app_notifications/native/MessageRequestNotification.tsx");

export default function MessageRequestInAppNotification(notification) {
  notification = notification.notification;
  const author = notification.author;
  const arg1 = author;
  const numMutualGuilds = notification.numMutualGuilds;
  const importDefault = numMutualGuilds;
  const items = [author.username, numMutualGuilds];
  const memo = React.useMemo(() => {
    let obj = { type: "simple" };
    const intl = author(closure_2[2]).intl;
    obj = { name: author.username, count: numMutualGuilds };
    obj.text = intl.formatToPlainString(author(closure_2[2]).t.LeYU4d, obj);
    return obj;
  }, items);
  const callback = React.useCallback(() => {
    numMutualGuilds(closure_2[3]).clearNotification();
    const obj = numMutualGuilds(closure_2[3]);
    const rootNavigationRef = author(closure_2[4]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  let obj = {};
  obj = { user: author, size: arg1(dependencyMap[6]).AvatarSizes.NORMAL, guildId: undefined };
  obj.icon = jsx(arg1(dependencyMap[6]).Avatar, obj);
  obj.header = memo;
  obj = {};
  const intl = arg1(dependencyMap[2]).intl;
  obj.text = intl.string(arg1(dependencyMap[2]).t.Bx4/Lf);
  obj.children = jsx(arg1(dependencyMap[7]).SystemMessageText, obj);
  obj.onPress = callback;
  obj.notification = notification;
  return jsx(arg1(dependencyMap[5]).NotificationPressable, obj);
};
