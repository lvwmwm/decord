// Module ID: 11085
// Function ID: 11086
// Name: ForumThreadCreatedNotification
// Dependencies: [19, 11023, 21, 5652, 1113, 6438, 5756, 6744, 11067, 1994, 11076, 1187, 5624, 2]
// Exports: default

// Module 11085 (ForumThreadCreatedNotification)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import transitionToChannel from "transitionToChannel" /* 5756 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 11023 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_4 = InAppNotificationConstants.NOTIFICATION_PREVIEW_LINE_CLAMP;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/in_app_notifications/native/ForumThreadCreatedNotification.tsx");

export default function ForumThreadCreatedNotification(notification) {
  let parentChannel;
  let threadCreator;
  notification = notification.notification;
  parentChannel = undefined;
  let userAuthor;
  const thread = notification.thread;
  ({ threadCreator, parentChannel } = notification);
  const guild = notification.guild;
  let stringResult = thread(parentChannel[3])(thread);
  if (stringResult == null) {
    const intl = notification(tmp[4]).intl;
    stringResult = intl.string(notification(tmp[4]).t["/YzI63"]);
  }
  const intl2 = notification(tmp[4]).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(notification(parentChannel[4]).t.WUIDu9, { threadName: stringResult });
  let obj = notification(tmp[5]);
  userAuthor = obj.getUserAuthor(threadCreator, thread);
  const items = [parentChannel, guild, userAuthor];
  const items1 = [thread];
  const memo = guild.useMemo(() => ({ type: "message", channel: parentChannel, parentChannel: null, guild, author: userAuthor }), items);
  const items2 = [notification.parentChannel.id];
  const callback = guild.useCallback(() => {
    const obj = transitionToChannel;
    obj.transitionToThread(thread);
  }, items1);
  const callback1 = guild.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { channelId: notification.parentChannel.id };
    return obj.pushLazy(asyncRequire(11067, dependencyMap.paths), obj2, "in-app-notification-settings-modal");
  }, items2);
  const NotificationPressable = notification(tmp[10]).NotificationPressable;
  ({ size: notification(parentChannel[11]).AvatarSizes.NORMAL, user: threadCreator, guildId: thread.guild_id });
  const Avatar = notification(tmp[11]).Avatar;
  return <NotificationPressable icon={null} header={memo} onPress={callback} onSettingsPress={callback1} notification={notification}>{null}</NotificationPressable>;
};
