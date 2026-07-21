// Module ID: 10343
// Function ID: 79824
// Name: NotificationAvatar
// Dependencies: []

// Module 10343 (NotificationAvatar)
function NotificationAvatar(arg0) {
  let guildId;
  let user;
  ({ user, guildId } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.avatarContainer };
  obj = { user, guildId, size: arg1(dependencyMap[8]).AvatarSizes.NORMAL };
  obj.cutout = obj;
  const items = [callback(arg1(dependencyMap[8]).Avatar, obj), ];
  obj = { style: tmp.cutoutIconContainer };
  const obj1 = { size: "xs", color: importDefault(dependencyMap[10]).colors.ICON_SUBTLE };
  obj.children = callback(arg1(dependencyMap[9]).ClockIcon, obj1);
  items[1] = callback(View, obj);
  obj.children = items;
  return callback2(View, obj);
}
function NotificationBody(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const message = channel.message;
  let obj = arg1(dependencyMap[13]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(channel.guild_id));
  let obj1 = arg1(dependencyMap[13]);
  const items1 = [closure_5];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => channel.getChannel(channel.parent_id));
  let obj2 = arg1(dependencyMap[11]);
  const hasPreviewableMedia = obj2.useHasPreviewableMedia(message);
  const tmp4 = channel.type === arg1(dependencyMap[14]).ChannelTypes.DM;
  let num = 1;
  if (tmp4) {
    num = closure_8;
  }
  obj = {};
  let tmp8 = null;
  const messagePreviewTextVariant = arg1(dependencyMap[11]).getMessagePreviewTextVariant();
  if (!tmp4) {
    obj = { channel, parentChannel: stateFromStores1, guild: stateFromStores, author: null };
    tmp8 = callback(importDefault(dependencyMap[15]), obj);
  }
  const items2 = [tmp8, ];
  if (!hasPreviewableMedia) {
    if (null == message.poll) {
      obj1 = { channel, message, color: "text-default", layout: arg1(dependencyMap[18]).ChannelListLayoutTypes.COZY, variant: messagePreviewTextVariant, muted: false, lineClamp: num };
      let tmp15 = callback(arg1(dependencyMap[17]).ChannelRowPreview, obj1);
    }
    items2[1] = tmp15;
    obj.children = items2;
    return closure_11(closure_12, obj);
  }
  obj2 = { message, lineClamp: num, showMessageAuthor: true, maxHeight: closure_7 };
  tmp15 = callback(importDefault(dependencyMap[16]), obj2);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[4]);
({ IN_APP_NOTIFICATION_MAX_HEIGHT: closure_7, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_8 } = tmp2);
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
let closure_13 = arg1(dependencyMap[7]).createStyles({ cutoutIconContainer: { 314033: 3375103, 315680: -8192, 314067: 4320799 }, avatarContainer: { position: "relative" }, rightAccessoryContainer: { marginLeft: tmp2.RIGHT_ACCESSORY_LEFT_MARGIN } });
const obj = { broadcastStatus: "/assets/images/channel_following", broadcastType: 400, damping: 96, direction: arg1(dependencyMap[8]).CutoutDirection.BOTTOM_RIGHT };
let closure_15 = importAllResult.memo((message) => {
  message = message.message;
  let obj = arg1(dependencyMap[11]);
  let tmp2 = null;
  if (obj.useHasPreviewableMedia(message)) {
    obj = { style: tmp.rightAccessoryContainer };
    obj = { message };
    obj.children = callback(arg1(dependencyMap[12]).MediaPreviewRightAccessory, obj);
    tmp2 = callback(View, obj);
  }
  return tmp2;
});
const obj2 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo(function ReminderNotification(notification) {
  notification = notification.notification;
  const arg1 = notification;
  const channel = notification.channel;
  const message = notification.savedMessage.message;
  importDefault(dependencyMap[19])(null != message, "Message in a notification should not be null.");
  let obj = { user: notification.author, guildId: channel.guild_id };
  const items = [notification];
  const memo = importAllResult.useMemo(() => {
    const obj = { type: "simple" };
    const intl = notification(closure_2[20]).intl;
    obj.text = intl.string(notification(closure_2[20]).t.Whs8tE);
    return obj;
  }, []);
  const callback = importAllResult.useCallback(() => {
    let author;
    let savedMessage;
    let obj = callback(paths[21]);
    obj.popAll();
    obj = { presentation: "modal" };
    callback(paths[21]).pushLazy(notification(paths[23])(paths[22], paths.paths), {}, "for-later-modal", obj);
    ({ savedMessage, author } = notification);
    const obj2 = callback(paths[21]);
    obj = { message_id: savedMessage.saveData.messageId, message_author_id: author.id, notification_type: "IN_APP" };
    callback(paths[24]).track(constants.FOR_LATER_REMINDER_NOTIFICATION_CLICKED, obj);
  }, items);
  obj = { icon: callback(NotificationAvatar, obj), header: memo, onPress: callback, notification, rightAccessory: callback(closure_15, { message }), children: callback(NotificationBody, { channel, message }) };
  return callback(arg1(dependencyMap[25]).NotificationPressable, obj);
});
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/in_app_notifications/native/ReminderNotification.tsx");

export default memoResult;
