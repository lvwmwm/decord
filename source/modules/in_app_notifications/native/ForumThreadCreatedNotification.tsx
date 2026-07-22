// Module ID: 10305
// Function ID: 79543
// Name: ForumThreadCreatedNotification
// Dependencies: []
// Exports: default

// Module 10305 (ForumThreadCreatedNotification)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).NOTIFICATION_PREVIEW_LINE_CLAMP;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/in_app_notifications/native/ForumThreadCreatedNotification.tsx");

export default function ForumThreadCreatedNotification(notification) {
  let parentChannel;
  let threadCreator;
  notification = notification.notification;
  const arg1 = notification;
  let closure_4;
  const thread = notification.thread;
  const importDefault = thread;
  ({ threadCreator, parentChannel } = notification);
  const dependencyMap = parentChannel;
  const guild = notification.guild;
  const React = guild;
  let stringResult = importDefault(dependencyMap[3])(thread);
  if (null == stringResult) {
    const intl = arg1(dependencyMap[4]).intl;
    stringResult = intl.string(arg1(dependencyMap[4]).t./YzI63);
  }
  const intl2 = arg1(dependencyMap[4]).intl;
  let obj = { threadName: stringResult };
  let obj1 = arg1(dependencyMap[5]);
  const userAuthor = obj1.getUserAuthor(threadCreator, thread);
  closure_4 = userAuthor;
  const items = [parentChannel, guild, userAuthor];
  const items1 = [thread];
  const memo = React.useMemo(() => {
    const obj = { addExtraAnalyticsDecorator: "message", Gesture: null, GUILD_THEME_POWERUP_BOOST_PRICE: "\u{1F9B6}\u{1F3FB}", channel: parentChannel, guild, author: userAuthor };
    return obj;
  }, items);
  const items2 = [notification.parentChannel.id];
  const callback = React.useCallback(() => {
    notification(parentChannel[6]).transitionToThread(thread);
  }, items1);
  const callback1 = React.useCallback(() => {
    let obj = thread(parentChannel[7]);
    obj = { channelId: notification.parentChannel.id };
    return obj.pushLazy(notification(parentChannel[9])(parentChannel[8], parentChannel.paths), obj);
  }, items2);
  obj = {};
  obj = { size: arg1(dependencyMap[11]).AvatarSizes.NORMAL, user: threadCreator, guildId: thread.guild_id };
  obj.icon = jsx(arg1(dependencyMap[11]).Avatar, obj);
  obj1 = { lineClamp: closure_4, children: intl2.formatToPlainString(arg1(dependencyMap[4]).t.WUIDu9, obj) };
  obj.children = jsx(arg1(dependencyMap[12]).Text, obj1);
  obj.header = memo;
  obj.onPress = callback;
  obj.onSettingsPress = callback1;
  obj.notification = notification;
  return jsx(arg1(dependencyMap[10]).NotificationPressable, obj);
};
