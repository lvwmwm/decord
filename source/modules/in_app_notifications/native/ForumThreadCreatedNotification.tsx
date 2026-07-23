// Module ID: 10318
// Function ID: 79617
// Name: ForumThreadCreatedNotification
// Dependencies: [31, 10237, 33, 4320, 1212, 4360, 4138, 4337, 10279, 1934, 10310, 1273, 4126, 2]
// Exports: default

// Module 10318 (ForumThreadCreatedNotification)
import result from "result";
import { NOTIFICATION_PREVIEW_LINE_CLAMP as closure_4 } from "set";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/in_app_notifications/native/ForumThreadCreatedNotification.tsx");

export default function ForumThreadCreatedNotification(notification) {
  let parentChannel;
  let threadCreator;
  notification = notification.notification;
  let userAuthor;
  const thread = notification.thread;
  ({ threadCreator, parentChannel } = notification);
  const guild = notification.guild;
  let stringResult = thread(parentChannel[3])(thread);
  if (null == stringResult) {
    const intl = notification(parentChannel[4]).intl;
    stringResult = intl.string(notification(parentChannel[4]).t["/YzI63"]);
  }
  const intl2 = notification(parentChannel[4]).intl;
  let obj = { threadName: stringResult };
  let obj1 = notification(parentChannel[5]);
  userAuthor = obj1.getUserAuthor(threadCreator, thread);
  const items = [parentChannel, guild, userAuthor];
  const items1 = [thread];
  const memo = guild.useMemo(() => {
    const obj = { type: "message", channel: parentChannel, parentChannel: null, guild, author: userAuthor };
    return obj;
  }, items);
  const items2 = [notification.parentChannel.id];
  const callback = guild.useCallback(() => {
    notification(parentChannel[6]).transitionToThread(thread);
  }, items1);
  const callback1 = guild.useCallback(() => {
    let obj = thread(parentChannel[7]);
    obj = { channelId: notification.parentChannel.id };
    return obj.pushLazy(notification(parentChannel[9])(parentChannel[8], parentChannel.paths), obj);
  }, items2);
  obj = {};
  obj = { size: notification(parentChannel[11]).AvatarSizes.NORMAL, user: threadCreator, guildId: thread.guild_id };
  obj.icon = jsx(notification(parentChannel[11]).Avatar, { size: notification(parentChannel[11]).AvatarSizes.NORMAL, user: threadCreator, guildId: thread.guild_id });
  obj1 = { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp: userAuthor, children: intl2.formatToPlainString(notification(parentChannel[4]).t.WUIDu9, obj) };
  obj.children = jsx(notification(parentChannel[12]).Text, { variant: "redesign/message-preview/medium", color: "text-subtle", lineClamp: userAuthor, children: intl2.formatToPlainString(notification(parentChannel[4]).t.WUIDu9, obj) });
  obj.header = memo;
  obj.onPress = callback;
  obj.onSettingsPress = callback1;
  obj.notification = notification;
  return jsx(notification(parentChannel[10]).NotificationPressable, { size: notification(parentChannel[11]).AvatarSizes.NORMAL, user: threadCreator, guildId: thread.guild_id });
};
