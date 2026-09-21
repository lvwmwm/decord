// Module ID: 13030
// Function ID: 13031
// Name: MessageRequestNotification
// Dependencies: [19, 21, 558, 568, 1119, 12961, 4617, 1181, 12970, 13000, 2]

// Module 13030 (MessageRequestNotification)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import RootNavigationRef from "RootNavigationRef" /* 4617 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 12961 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MessageRequestNotification.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((notification) => {
  const cResult = c.c(13);
  notification = notification.notification;
  ({ author, numMutualGuilds } = notification);
  if (cResult[0] === author.username) {
    if (cResult[1] === numMutualGuilds) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj2 = { type: "simple", text: tmp4 };
      cResult[3] = tmp4;
      cResult[4] = obj2;
      let tmp6 = obj2;
    } else {
      tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function v() {
        InAppNotificationActionCreatorsDefault.clearNotification();
        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("message-requests");
        }
      };
      cResult[5] = fn;
      let tmp8 = fn;
    } else {
      tmp8 = cResult[5];
    }
    if (cResult[6] !== author) {
      const obj3 = { user: author, size: tmp(1181).AvatarSizes.NORMAL, guildId: "Array" };
      const tmp11 = jsx(tmp(1181).Avatar, { user: author, size: tmp(1181).AvatarSizes.NORMAL, guildId: "Array" });
      cResult[6] = author;
      cResult[7] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { text: null };
      const intl2 = tmp(1119).intl;
      obj4.text = intl2.string(tmp(1119).t["Bx4/Lf"]);
      const tmp14 = jsx(tmp(12970).SystemMessageText, { text: null });
      cResult[8] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] === tmp6) {
      if (cResult[10] === notification) {
        if (cResult[11] === tmp9) {
          let tmp15 = cResult[12];
        }
        return tmp15;
      }
    }
    const obj5 = { icon: tmp9, header: tmp6, children: tmp12, onPress: tmp8, notification };
    const tmp17 = jsx(tmp(13000).NotificationPressable, { icon: tmp9, header: tmp6, children: tmp12, onPress: tmp8, notification });
    cResult[9] = tmp6;
    cResult[10] = notification;
    cResult[11] = tmp9;
    cResult[12] = tmp17;
    tmp15 = tmp17;
  }
  const intl = tmp(1119).intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t.LeYU4d, { name: author.username, count: numMutualGuilds });
  cResult[0] = author.username;
  cResult[1] = numMutualGuilds;
  cResult[2] = formatToPlainStringResult;
  tmp4 = formatToPlainStringResult;
}) : ((notification) => {
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
    numMutualGuilds(12961).clearNotification();
    const obj = numMutualGuilds(12961);
    const rootNavigationRef = author(4617).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  let obj = { icon: jsx(author(1181).Avatar, { user: author, size: author(1181).AvatarSizes.NORMAL, guildId: "Array" }), header: memo, children: null, onPress: null, notification: null };
  const obj3 = { text: null };
  let intl = author(1119).intl;
  obj3.text = intl.string(author(1119).t["Bx4/Lf"]);
  obj.children = jsx(author(12970).SystemMessageText, { text: null });
  obj.onPress = callback;
  obj.notification = notification;
  return jsx(author(13000).NotificationPressable, { icon: jsx(author(1181).Avatar, { user: author, size: author(1181).AvatarSizes.NORMAL, guildId: "Array" }), header: memo, children: null, onPress: null, notification: null });
});
